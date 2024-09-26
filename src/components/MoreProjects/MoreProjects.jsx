import { useEffect } from 'react'
import { useProjectContext } from '../../context/ProjectContext'
import Spinner from '../Spinner'
import './_projectCarousel.scss'
import GlideProjects from './GlideProjects'

const MoreProjects = () => {
  const context = useProjectContext()

  useEffect(() => {
    GlideProjects()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='glideProjects'>
              <div className='glide__track' data-glide-el='track'>
                <ul className='glide__slides'>
                  {!context.projectList
                    ? <Spinner />
                    : context.projectList.map(proj => (
                      <li className='glide__slide' key={proj._id}>
                        <img src={`${proj.image}`} className='projectCarousel' />
                        <h6 className='captionSlider'>{`${proj.projectName}`}</h6>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreProjects
