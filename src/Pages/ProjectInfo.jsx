const ProjectInfo = ({ id, projectName, image, brand, year, challenge, approach, impact, skills }) => {
  return (
    <>
      <div className='container'>
        <div className='col-6'>
          <h1>{projectName}</h1>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
