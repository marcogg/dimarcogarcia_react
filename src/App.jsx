import './App.css'
import Header from './components/Header/'
import Info from './components/Info/Info'
import Navigate from './components/Navigate/'
import Portfolio from './components/Portfolio'

function App () {
  return (
    <>
      <header>
        <Navigate />
        <Header />
        <Info />
        <Portfolio />
      </header>
    </>
  )
}

export default App
