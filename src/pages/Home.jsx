import React from 'react'
import Navbar from '../layout/Navbar'
import Banner from '../layout/Banner'
import Galllary from '../assets/layout/Galllary'
import Counter from '../layout/Counter'
import Content from '../assets/layout/Content'
import Service from '../assets/layout/Service'
import CreateImpact from '../layout/CreateImpact'
import Plan from '../layout/Plan'
import AboutMe from '../layout/AboutMe'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Galllary/>
      <Counter/>
      <Content/>
      <Service/>
      <CreateImpact/>
      <Plan/>
      <AboutMe/>
    </div>
  )
}

export default Home