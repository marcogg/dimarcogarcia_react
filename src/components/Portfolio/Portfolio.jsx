/* eslint-disable quotes */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './_portfolio.scss'
import Spinner from '@/components/Spinner'
import Cards from '@/components/Cards'

const Portfolio = () => {
  const API_URL = 'http://localhost:5000/api/projects/getProjects'

  const [project, setProject] = useState([])
  const [isActive, setIsActive] = useState('false')

  // ToggleButton Categories
  const handleToggle = () => {
    setIsActive(!isActive)
  }

  // Axios request
  const fetchData = async (categoryId) => {
    const project = await axios.get(`${API_URL}/${categoryId}`)
    console.log(project.data)
    return setProject(project.data)
  }

  // Get Id from button to leash the axios request
  const getId = (e) => {
    const id = e.target.id
    console.log(id)
    handleToggle()
    return fetchData(id)
  }

  // Fetching default data
  useEffect(() => {
    fetchData('userExperience')
  }, [])

  return (
    <>
      <section className='mY-5'>
        <div className='container'>
          <div className='row w-100'>
            <div className='col-12 col-md-6 col-lg-6'>
              <h2 className='title text-left'>Projects</h2>
            </div>
          </div>
          <div className='row w-100 noWrap mY-5'>
            <ul className='categories darkText' id='categories'>
              <li className={`isActive ? active: `} id='userExperience' onClick={getId}>User Experience</li>
              <li className={`isActive ? active: `} id='marketing' onClick={getId}>Marketing</li>
              <li className={`isActive ? active: `} id='spatial' onClick={getId}>Spatial design</li>
              <li className={`isActive ? active: `} id='visualDesign' onClick={getId}>Visual design</li>
              <li className={`isActive ? active: `} id='webDevelopment' onClick={getId}>Web Development</li>
            </ul>
          </div>
          <div className='row w-100'>
            <div className='projects' id='projects'>
              {project
                ? project.map((projects) => (
                  <Cards key={projects._id} {...projects} />
                ))

                : <Spinner />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
