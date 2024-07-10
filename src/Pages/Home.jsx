import React from 'react'
import Header from '../components/Header'
import Info from '../components/Info'
import Navigate from '../components/Navigate'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navigate />
      <Header />
      <Info />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Home
