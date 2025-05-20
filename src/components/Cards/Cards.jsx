import { Link, useNavigate } from 'react-router-dom'
import './_cards.scss'
import { useProjectContext } from '../../context/ProjectContext'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Cards = ({ caption = '', brand = '', image = '', projectName = '', url = '', category = '', year = '', challenge = '', approach = '', impact = '', projectLink = '', skills = '', galleryImages = '' }) => {
  const context = useProjectContext()

  const navigate = useNavigate()

  const contextUpdate = () => {
    const projectData = {
      caption,
      brand,
      image,
      projectName,
      url,
      category,
      year,
      challenge,
      approach,
      impact,
      projectLink,
      skills,
      galleryImages
    }

    console.log(projectData)
    context.setProjectFeatured({ ...projectData })
    console.log(context.projectFeatured)
    navigate(`/project-detail/${url}`)
  }

  return (
    <div className='card'>
      <div className='imageContainer'>
        <div className='overlay' />
        <img src={`../.${image}`} className='w-100' loading='lazy' />
      </div>
      <div className='meta'>
        <div className='w-100'>
          <div className='col-12 d-flex flex-column justify-content-between'>
            <h6 className='client-card-title'>{brand}</h6>
            <h5>{projectName}</h5>
            <p className='mb-4'>{caption}</p>
            <Link onClick={contextUpdate}>
              <span className='mb-4 mt-2 project-link'>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
