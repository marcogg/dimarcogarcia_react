import axios from 'axios'
import { useContext, createContext, useEffect, useState } from 'react'

const ProjectContext = createContext()

// eslint-disable-next-line space-before-function-paren
function ProjectProvider({ ...props }) {
  const API_URL = 'http://localhost:5000/api/projects/getProjects'

  const [projectList, setProjectList] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})
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

  const [elementState, setElementState] = useState([{
    id: 'webDev',
    name: 'UI & Web Dev',
    active: true
  },
  {
    id: 'visualDesign',
    name: 'Visual Design',
    active: null
  },
  {
    id: 'spatial',
    name: 'Spatial',
    active: null
  },
  {
    id: 'userExperience',
    name: 'UX & Research',
    active: null
  },
  {

    id: 'businessStrategy',
    name: 'Business Strategy',
    active: null
  }
  ])

  useEffect(() => {
    setLoading(true)
    axios.get(`${API_URL}/webDev`)
      .then(response => {
        setProjectList(response.data)
        localStorage.setItem('webDevProjects', JSON.stringify(response.data))
      })
      .catch(error => {
        console.error('Failed to get project list', error)
      })
      .finally(() => {
        setLoading(false)
      })
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
    setProjectFeatured,
    elementState,
    setElementState
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
