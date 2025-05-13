
import React from 'react'
import Container from '../components/Container'
import HeadingOne from '../components/HeadingOne'
import Image from '../components/Image'
import aboutProfile from '../assets/aboutProfile.png'
import { IoStar } from "react-icons/io5";


const AboutMe = () => {
  return (
    <>
     <section className='py-[100px] bg-[#F8F8FF]'>
    <Container>
        <HeadingOne text='What The People Thinks About Us ' classname='text-center pb-[152px]'/>
        <div className='relative w-[1080px] h-[500px]  rounded-[20px] shadow-2xl'>
            <div className='absolute w-[147px] h-[147px] bg-white rounded-full top-0 left-[510px] -translate-x-1/2 -translate-y-1/2 '>
                <Image src={aboutProfile} className='rounded-full'/>
        </div>
    <ul>
        <li><IoStar/></li>
    </ul>
        
            

        </div>
    </Container>
   </section>
    </>
  )
}

export default AboutMe