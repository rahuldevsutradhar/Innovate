import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Correct path to your logo

const Navbar = () => {
  return (
    <nav className='bg-[#160c6d80] absolute top-0 left-0 w-full'>
      <Container>
        <Flex className='items-center'>
          <div className='w-2/12'>
            {/* Use the standard img tag to display your logo */}
            <Link to='/'>
              <img src={Logo} alt="Logo" className='cursor-pointer w-[100px]' />
            </Link>
          </div>
          <div className='w-8/12'>
            <ul className='flex gap-x-10 cursor-grab justify-center'>
              <Link to='/'>
                <List text="Home" />
              </Link>
              <Link to='/about'>
                <List text="About" />
              </Link>
              <Link to='/service'>
                <List text="Service" />
              </Link>
              <Link to='/portfolio'>
                <List text="Portfolio" />
              </Link>
              <Link to='/price'>
                <List text="Price" />
              </Link>
              <Link to='/blog'>
                <List text="Blog" />
              </Link>
            </ul>
          </div>
          <div className='w-2/12 text-right py-5'>
            <Button text="Contact Us" />
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
