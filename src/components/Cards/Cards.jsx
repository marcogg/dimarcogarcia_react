import React from 'react'

const Cards = () => {
  return (
    <>
      <div className='imageContainer'>
        <div className='overlay' />
        <img src=' ' className='w-100' loading='lazy' />
      </div>
      <div className='meta'>
        <div className='w-100'>
          <div className='col-12 d-flex flex-column justify-content-between'>
            <h6 className='client-card-title'>${this.client}</h6>
            <h5>${this.projectName}</h5>
            <p className='mb-4'>${this.caption}</p>
            <a className='mb-4'><span className='mt-2 project-link' id='${this.link}' onClick=''>Read More</span></a>
          </div>
        </div>
      </div>`
    </>
  )
}

export default Cards
