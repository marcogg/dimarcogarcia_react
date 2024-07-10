import axios from 'axios'
import { useProjectContext } from '../../context/ProjectContext'
import { useState } from 'react'

const CategoryTabs = () => {
  const context = useProjectContext()
  const API_URL = 'http://localhost:5000/api/projects/getProjects'

  const categoryTabs = [{
    id: 'userExperience',
    name: 'User Experience',
    active: false
  },
  {
    id: 'marketing',
    name: 'Marketing',
    active: false
  },
  {
    id: 'spatial',
    name: 'Spatial',
    active: false
  },
  {
    id: 'webDevelopment',
    name: 'Web Dev',
    active: false
  },
  {

    id: 'visualDesign',
    name: 'Visual Design',
    active: false
  }
  ]

  const [isActive, setIsActive] = useState(false)

  // ToggleButton Categories
  const handleToggle = (catIdName) => {
    categoryTabs[catIdName].active = true
    setIsActive(!isActive)
  }

  // Axios request
  const fetchData = async (categoryId) => {
    context.setLoading(!context.loading)
    const project = await axios.get(`${API_URL}/${categoryId}`)
    console.log(project.data)
    context.setProjectList(project.data)
    context.setLoading(false)

    return context.setProject(project.data)
  }

  // Get Id from button to leash the axios request
  const getId = (e) => {
    const id = e.target.id
    console.log(id)
    fetchData(id)
    handleToggle(id)
  }

  return (
    <>
      <ul className='categories darkText' id='categories'>
        {
          categoryTabs.map(category => (
            <li key={category.id} className={`${category.active ? 'active' : ''}`} onClick={getId} id={category.id}>{category.name}</li>
          ))
        }
        {/* <li className={`active ${isActive ? 'active' : ''}`} id='userExperience' onClick={getId}>User Experience</li>
        <li className={`${isActive ? 'active' : ''}`} id='marketing' onClick={getId}>Marketing</li>
        <li className={`${isActive ? 'active' : ''}`} id='spatial' onClick={getId}>Spatial design</li>
        <li className={`${isActive ? 'active' : ''}`} id='visualDesign' onClick={getId}>Visual design</li>
        <li className={`${isActive ? 'active' : ''}`} id='webDevelopment' onClick={getId}>Web Development</li> */}
      </ul>
    </>
  )
}

export default CategoryTabs
