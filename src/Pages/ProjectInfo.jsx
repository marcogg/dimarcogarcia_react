/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useProjectContext } from '../context/ProjectContext'
import Spinner from '../components/Spinner'

const ProjectInfo = (props) => {
  const context = useProjectContext()
  const selectedProject = context.selectedProject

  useEffect(() => {
    console.log(context.stateTest)
    // if (props) {
    //   context.setSelectedProject(prevState => ({ ...prevState, data: props }))
    // }
  }, [])

  return (
    <>
      {context.loading
        ? <Spinner />
        : (
          <div className='container'>
            <div className='col-6'>
              <h1>{`${selectedProject}`}</h1>
            </div>
          </div>
          // eslint-disable-next-line indent
        )}
    </>
  )
}

export default ProjectInfo
