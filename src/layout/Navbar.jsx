import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import List from '../components/List'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <nav className='bg-[#160C6D]'>
        <Container >
            <Flex className='items-center'>
                <div className='w-2/12'>
                <Image src={Logo} alt="Logo"/>
                </div>
                <div className='w-8/12'> 
                <ul className='flex gap-x-10 cursor-grab justify-center'>
                    <List text="Home"/>
                    <List text="About"/>
                    <List text="Service"/>
                    <List text="Portfolio"/>
                    <List text="Price"/>
                    <List text="Blog"/>
                </ul> 
                </div>
                <div className='w-2/12 text-right py-5'>
                <Button text="Contact Us"/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar