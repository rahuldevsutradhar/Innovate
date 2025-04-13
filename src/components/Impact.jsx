
import React from 'react'
import HeadingOne from './HeadingOne'
import SubHeading from './SubHeading'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import competitive from '../assets/competitive.png'
import strange from '../assets/strange.png'
import design from '../assets/design.png'

const Impact = () => {
  return (
    <section className='my-[100px] bg-[#F6F5FF]'>
       <Container>
        <HeadingOne text="We create real impact" classname='mt-[100px] text-center'/>
        <SubHeading text="We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer." 
        className='w-[558px] h-[90px] text-center mx-auto mt-[25px] mb-[75px]'/>
        <Flex>
             <div className='w-[50%]'>
                <Flex>
                    <Image src={competitive} alt='logo' className='w-[63px] h-[63px] mr-[35px]'/>
                    <div>
                        <HeadingOne text="Competitive analysis" classname='text-[30px] mb-[25px]'/>
                        <SubHeading text="With an all-new look and powerful features, Ekko is the best way to ensure success for your business.
                        " className='w-[343px] h-[90px] text-[18px] font-normal	'/>
                    </div>
                </Flex>
                <Flex className='mt-[40px]'>
                    <Image src={strange} alt='logo' className='w-[63px] h-[63px] mr-[35px]'/>
                    <div>
                        <HeadingOne text="Strategy And research" classname='text-[30px] mb-[5px]'/>
                        <SubHeading text="Save money and start building your website using the best tools available on the market today.
                        " className='w-[343px] h-[90px] text-[18px] font-normal	'/>
                    </div>
                </Flex>
             </div>
             <div className='w-[50%]'>
                <Image src={design} alt='design' className='w-[491px] h-[425px]'/>
             </div>

        </Flex>
       </Container>

    </section>
  )
}

export default Impact