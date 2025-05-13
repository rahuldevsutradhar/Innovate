import React, { useState } from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import Logo from '../assets/Logo.png';
import List from '../components/List';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from "react-icons/im";


const Navbar = () => { // Corrected component name
  let [show, setShow] = useState(false);
  let handleClick = () => {
    setShow(!show); // Added semicolon
  };

  return (
    <>
      {/* destop site design */}
      <nav className='hidden md:block bg-[#160c6d80] absolute top-0 left-0 w-full'>
        <Container>
          <Flex className='items-center'>
            <div className='w-2/12'>
              <Image src={Logo} alt="Logo" />
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

      {/* modile site design */}
      <nav className='md:hidden relative px-4 bg-[#160c6d80] py-5 '>
        <Flex className="flex justify-between items-center">
          <div>
            <Image src={Logo} alt="Logo" className='w-[70%]' />
          </div>
          <div onClick={handleClick}>
           {
            show ?<ImCross className='text-white'/> : <FaBars className='text-white' />
           }
          </div>
        </Flex>
        {show && (
          <ul className='absolute top-[80px] left-0 w-full bg-blue-500 rounded-[10px] flex flex-col justify-center items-center py-5 gap-y-5'>
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
        )}
      </nav>
    </>
  );
};

export default Navbar; // Consistent export name