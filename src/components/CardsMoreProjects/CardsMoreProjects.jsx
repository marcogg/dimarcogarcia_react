import './_cardsMoreProjects.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProjectContext } from '../../context/ProjectContext'
import Spinner from '../Spinner'

const CardsMoreProjects = () => {
  const context = useProjectContext()
  const navigate = useNavigate()

  const contextUpdate = (project) => {
    const projectData = {
      caption: project.caption,
      brand: project.brand,
      image: project.image,
      projectName: project.projectName,
      url: project.url,
      category: project.category,
      year: project.year,
      challenge: project.challenge,
      approach: project.approach,
      impact: project.impact,
      projectLink: project.projectLink,
      skills: project.skills
    }
    context.setProjectFeatured({ ...projectData })
  }

  useEffect(() => {
    if (context.projectFeatured.url) {
      navigate(`/project-detail/${context.projectFeatured.url}`)
    }
  }, [context.projectFeatured, navigate])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 d-grid'>
          {context.projectList && context.projectList.length > 0
            ? context.projectList.map((project) => (
              <div className='cardMoreProjects' key={project._id}>
                <img src={project.image} alt={project.projectName} className='imageProject' />
                <p className='client-card-title'>{project.brand}</p>
                <h3 className='cardTitle'>{project.projectName}</h3>
                <div onClick={() => contextUpdate(project)}>
                  <span className='mb-4 mt-2 link'>Read More</span>
                </div>
              </div>
            ))

            : <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default CardsMoreProjects
