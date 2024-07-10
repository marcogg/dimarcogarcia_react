import { ProjectProvider } from './context/ProjectContext'
import Home from './Pages/Home'
import ProjectInfo from './Pages/ProjectInfo'
import './App.css'
import Cards from './components/Cards/Cards'

// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <>
      <ProjectProvider>
        <Home />
        <ProjectInfo />
        <Cards />
      </ProjectProvider>
    </>
  )
}

export default App
