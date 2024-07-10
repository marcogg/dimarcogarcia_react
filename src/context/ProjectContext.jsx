import axios from 'axios'
import { useContext, createContext, useEffect, useState } from 'react'

const ProjectContext = createContext()

// eslint-disable-next-line space-before-function-paren
function ProjectProvider({ ...props }) {
  const API_URL = 'http://localhost:5000/api/projects/getProjects'

  const [projectList, setProjectList] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedProject, setSelectedProject] = useState()
  const [stateTest, setStateTest] = useState(false)
  const [projectFeatured, setProjectFeatured] = useState({
    caption: '',
    brand: '',
    image: '',
    projectName: '',
    url: '',
    category: '',
    year: '',
    challenge: '',
    approach: '',
    impact: '',
    projectLink: '',
    skills: ''
  })

  useEffect(() => {
    setLoading(!loading)
    axios.get(`${API_URL}/userExperience`)
      .then(response => setProjectList(response.data))
      .catch(console.error('Failed to get project list'))
    setLoading(false)
  }, [])

  useEffect(() => {
    console.log(projectList)
  }, [projectList])


  const values = {
    projectList,
    setProjectList,
    loading,
    setLoading,
    selectedProject,
    setSelectedProject,
    stateTest,
    setStateTest,
    projectFeatured,
    setProjectFeatured
  }

  return (
    <ProjectContext.Provider value={values} {...props} />
  )
}

const useProjectContext = () => {
  const context = useContext(ProjectContext)
  return context
}

export {
  ProjectProvider,
  useProjectContext
}
