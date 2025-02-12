import axios from 'axios'
import { useProjectContext } from '../../context/ProjectContext'

const CategoryTabs = () => {
  const context = useProjectContext()
  const API_URL = 'http://localhost:5500/api/projects/getProjects'

  // ToggleButton Categories
  const handleToggle = (clickedId) => {
    const updatedElements = context.elementState.map((element) => {
      if (element.id === clickedId) {
        return { ...element, active: true }
      } else {
        return { ...element, active: false }
      }
    })
    context.setElementState(updatedElements)
  }

  // Axios request
  const fetchData = async (categoryId) => {
    context.setLoading(!context.loading)
    const project = await axios.get(`${API_URL}/${categoryId}`)
    console.log(project.data)
    context.setProjectList(project.data)
    context.setLoading(false)
    context.setProject(project.data)
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
          context.elementState.map(category => (
            <li key={category.id} className={`${category.active ? 'active' : ''}`} onClick={(e) => getId(e)} id={category.id}>{category.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default CategoryTabs
