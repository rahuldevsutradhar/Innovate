import React from 'react'
import HeadingOne from './components/HeadingOne'
import SubHeading from './components/SubHeading'
import Image from './components/Image'
import LogoImage from './assets/Logo.png'
import Container from './components/Container'
import Flex from './components/Flex'
import Navbar from './layout/Navbar'
import Banner from './layout/Banner'


const App = () => {
  return (
    <div>
     <Navbar/>
     <Banner/>
    </div>
  )
}

export default App
