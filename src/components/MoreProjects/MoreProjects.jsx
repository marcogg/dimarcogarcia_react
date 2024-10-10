import { useProjectContext } from '../../context/ProjectContext'
import Spinner from '../Spinner'
import './_projectCarousel.scss'
import { useNavigate } from 'react-router-dom'
import Glider from 'react-glider'
import 'glider-js/glider.min.css'

const MoreProjects = () => {
  const context = useProjectContext()
  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='subtitle text-left'>More Projects</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Glider
            className='glider-container'
            hasArrows
            hasDots
            slidesToShow={4}
            slidesToScroll={1}
            itemWidth={300}
            scrollLock
          >
            {context.projectList
              ? context.projectList.map(proj => (
                <div className='slide' key={proj._id}>
                  <img src={`${proj.image}`} className='projectCarousel' />
                  <h6 className='projectTitle'>{`${proj.projectName}`}</h6>
                  <button onClick={() => navigate(`../project-detail/${proj.url}`)} className='link'>Read more</button>
                </div>
              ))
              : <Spinner />}
          </Glider>
        </div>
      </div>
    </div>
  )
}

export default MoreProjects
