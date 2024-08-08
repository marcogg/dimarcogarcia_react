/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useProjectContext } from '../context/ProjectContext'
import Spinner from '../components/Spinner'
import './_projectInfo.scss'

const ProjectInfo = ({ projectName = 'test', ...props }) => {
  const context = useProjectContext()

  useEffect(() => {
    console.log(context.projectFeatured)
    console.log(context.projectFeatured.challenge)
    console.log(context.loading)
  }, [])

  return (
    <>
      {context.loading
        ? <Spinner />
        : (
          <section className='bgProjects'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-12 col-md-6 col-lg-6'>
                  <h5 className='year'>{`${context.projectFeatured.year}`}</h5>
                  <h1 className='title'>{`${context.projectFeatured.projectName}`}</h1>
                  <p className='brand'>{`${context.projectFeatured.brand}`}</p>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                  <img className='image img-fluid' src={`${context.projectFeatured.image}`} />
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <h3>About the problem</h3>
                  <p>{`${context.projectFeatured.challenge}`}</p>
                </div>
              </div>
            </div>
          </section>
          // eslint-disable-next-line indent
        )}
    </>
  )
}

export default ProjectInfo
