import React, { useState, useEffect } from 'react'
import './_portfolio.scss'

const Portfolio = () => {
  const [projectsCat, setProjectsCat] = useState('webDev')
  const getId = (e) => {
    const id = e.target.id
    return setProjectsCat(id)
  }

  useEffect(() => {
    getId(projectsCat)
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
              <li className='active' id='webDev' onClick={getId}>Web development</li>
              <li id='advertising'>Marketing</li>
              <li id='spatial'>Spatial design</li>
              <li id='visualDesign'>Visual design</li>
              <li id='innovation'>Innovation</li>
            </ul>
          </div>
          <div className='row w-100'>
            <div className='projects' id='projects'>
              {

              }
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
