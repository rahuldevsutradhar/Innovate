import React from 'react'
import HeadingOne from './components/HeadingOne'
import SubHeading from './components/SubHeading'
import Image from './components/Image'
import LogoImage from './assets/Logo.png'
import Container from './components/Container'
import Flex from './components/Flex'
import Navbar from './layout/Navbar'
import Banner from './layout/Banner'
import Galllary from './assets/layout/Galllary'
import Counter from './layout/Counter'
import Content from './assets/layout/Content'


const App = () => {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Galllary/>
     <Counter/>
     <Content/>
    </div>
  )
}

export default App
