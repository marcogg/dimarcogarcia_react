import React from 'react'
import './_cards.scss'

// eslint-disable-next-line react/prop-types
const Cards = ({ caption, brand, image, projectName }) => {
  return (
    <div className='card'>
      <div className='imageContainer'>
        <div className='overlay' />
        <img src={image} className='w-100' loading='lazy' />
      </div>
      <div className='meta'>
        <div className='w-100'>
          <div className='col-12 d-flex flex-column justify-content-between'>
            <h6 className='client-card-title'>{brand}</h6>
            <h5>{projectName}</h5>
            <p className='mb-4'>{caption}</p>
            <a className='mb-4'><span className='mt-2 project-link' id='' onClick=''>Read More</span></a>
          </div>
        </div>
      </div>`
    </div>
  )
}

export default Cards
