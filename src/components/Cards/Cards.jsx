import React from 'react'
import './_cards.scss'
import { Link } from 'react-router-dom'
// import axios from 'axios'

// eslint-disable-next-line react/prop-types
const Cards = ({ caption = '', brand = '', image = '', projectName = '', ...props }) => {
  const sanitizeProject = (projectTitle) => {
    const titleMerged = projectTitle.replaceAll(' ', '-')
    return titleMerged
  }

  const project = { ...props }

  return (
    <div className='card'>
      <div className='imageContainer'>
        <div className='overlay' />
        <img src={`../..${image}`} className='w-100' loading='lazy' />
      </div>
      <div className='meta'>
        <div className='w-100'>
          <div className='col-12 d-flex flex-column justify-content-between'>
            <h6 className='client-card-title'>{brand}</h6>
            <h5>{projectName}</h5>
            <p className='mb-4'>{caption}</p>
            <Link to={{ pathname: `/project-detail/${sanitizeProject(projectName)}`, state: { project: { ...project } } }}><span className='mb-4 mt-2 project-link'>Read More</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
