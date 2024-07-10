import { Link, useNavigate } from 'react-router-dom'
import './_cards.scss'
import { useProjectContext } from '../../context/ProjectContext'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Cards = ({ caption = '', brand = '', image = '', projectName = '', url = '', category = '', year = '', challenge = '', approach = '', impact = '', projectLink = '', skills = '', ...props }) => {

  // const [projectFeatured, setProjectFeatured] = useState({
  //   caption,
  //   brand,
  //   image,
  //   projectName,
  //   url,
  //   category,
  //   year,
  //   challenge,
  //   approach,
  //   impact,
  //   projectLink,
  //   skills
  // })

  const context = useProjectContext()
  // const selected = context.selectedProject

  // useEffect(() => {
  //   console.log('selectedProject actualizado:', selected)
  // }, [selected])

  const navigate = useNavigate()
  const selectedProject = context.selectedProject

  const contextUpdate = (proj) => {
    context.setProjectFeatured(proj)
    console.log(context.projectFeatured)
    // if (proj) {
    //   context.setLoading(true)
    //   context.setStateTest(true)
    //   console.log(context.setStateTest)

    //   context.setSelectedProject(prevState => ({ ...prevState, ...proj }))
    //   console.log(proj)
    //   console.log('selectedProject updated:', selectedProject)
    //   context.setLoading(!context.loading)
    navigate(`/project-detail/${url}`)
    // }
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
            <Link onClick={() => { contextUpdate(props) }}>
              <span className='mb-4 mt-2 project-link'>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
