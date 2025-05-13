import React from 'react'
import HeadingOne from './HeadingOne'
import SubHeading from './SubHeading'
import Image from './Image'
import emoji from '../assets/emoji.png'
import emojiTwo from '../assets/emojiTwo.png'
import emojiThree from '../assets/emojiThree.png'

const PlanCard = () => {
  return (
    <>
    <div className='w-[370px] h-[561px] bg-[#FFFFFF] hover:bg-[#6B62C5] rounded-[20px] shadow-2xl '>
      <HeadingOne text='Basic' classname='text-[30px] text-center mt-[60px] mb-[25px] '/>
      <Image src={emoji} alt='emoji' className='bg-[#ffffff80] '/>
      <h1 className='relative font-Nunito text-[#1BBF00] font-extrabold text-[48px] leading-10 text-center my-[22px]'>
        <span className='font-Quicksand text-[24px] absolute -top-[7px] left-[125px]'>$</span>370</h1>
      <SubHeading text=' Responsive Design Dynamic Elements Service Pages Custom Design & Features' className='text-center w-[252px] h-[128px] mx-auto hover:text-[#FFFF]'/>
    </div>

    <div className='w-[370px] h-[561px] bg-[#FFFFFF] hover:bg-[#6B62C5] rounded-[20px] shadow-2xl '>
      <HeadingOne text='Professional' classname='text-[30px] text-center mt-[60px] mb-[25px] '/>
      <Image src={emojiTwo} alt='emoji' className='bg-[#ffffff80] '/>
      <h1 className='relative font-Nunito text-[#1BBF00] font-extrabold text-[48px] leading-10 text-center my-[22px]'>
        <span className='font-Quicksand text-[24px] absolute -top-[7px] left-[125px]'>$</span>240</h1>
      <SubHeading text=' Responsive Design Dynamic Elements Service Pages Custom Design & Features' className='text-center w-[252px] h-[128px] mx-auto hover:text-[#FFFF]'/>
    </div>

    <div className='w-[370px] h-[561px] bg-[#FFFFFF] hover:bg-[#6B62C5] rounded-[20px] shadow-2xl '>
      <HeadingOne text='Exclusive' classname='text-[30px] text-center mt-[60px] mb-[25px] '/>
      <Image src={emojiThree} alt='emoji' className='bg-[#ffffff80] '/>
      <h1 className='relative font-Nunito text-[#1BBF00] font-extrabold text-[48px] leading-10 text-center my-[22px]'>
        <span className='font-Quicksand text-[24px] absolute -top-[7px] left-[125px]'>$</span>325</h1>
      <SubHeading text=' Responsive Design Dynamic Elements Service Pages Custom Design & Features' className='text-center w-[252px] h-[128px] mx-auto hover:text-[#FFFF]'/>
    </div>
    </>
  )
}

export default PlanCard