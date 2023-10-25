import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './_portfolio.scss'
import Spinner from '@/components/Spinner'
import Cards from '@/components/Cards'

const Portfolio = () => {
  const API_URL = 'http://localhost:5000/api/projects/getProjects'

  const [project, setProject] = useState([])

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
              <li id='userExperience' onClick={getId}>User Experience</li>
              <li id='marketing' onClick={getId}>Marketing</li>
              <li id='spatial' onClick={getId}>Spatial design</li>
              <li id='visualDesign' onClick={getId}>Visual design</li>
              <li id='webDevelopment' onClick={getId}>Web Development</li>
            </ul>
          </div>
          <div className='row w-100'>
            <div className='projects' id='projects'>
              {project
                ? project.map((projects) => (
                  <Cards key={projects._id} caption={projects.caption} brand={projects.brand} image={projects.image} projectName={projects.projectName} />
                ))

                : <Spinner />}
            </div>
          </div>
        </div>
        <div className='projectsModal'>
          {/* Modals created dynamically in functions.js */}
        </div>
      </section>
    </>
  )
}

export default Portfolio
