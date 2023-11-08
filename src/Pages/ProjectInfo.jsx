import { useLocation } from 'react-router-dom'

const ProjectInfo = () => {
  const state = useLocation()
  return (
    <>
      <div className='container'>
        <div className='col-6'>
          <h1>{state.projectName}</h1>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
