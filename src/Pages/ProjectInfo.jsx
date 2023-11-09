/* eslint-disable react/prop-types */
const ProjectInfo = ({ props }) => {
  // const API_URL = 'http://localhost:5000/api/projects/getSelectedProject'
  // const { projectData } = axios.get(`${API_URL}/${id}`)
  const projectInfo = props.location.state.project

  return (
    <>
      <div className='container'>
        <div className='col-6'>
          <h1>{projectInfo.projectName}</h1>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
