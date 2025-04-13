import React from 'react'
import Image from './Image'


const ServiceList = ({image,heading,title}) => {
  return (
    <div className=' group/one w-[370px] rounded-[24px] hover:bg-[#6B62C5] bg-white shadow-xl duration-300'>
        <Image src={image} alt='' className='h-[64px] w-[64px] mx-auto mt-[48px] mb-[32px]'/>
        <h1 className='font-open text-3xl	font-bold	 leading-9 text-center mb-[16px] group-hover/one:text-white text-black duration-300'> {heading} </h1>
        <p className='group-hover/one:text-[#E6E5F3] text-black font-paprika text-lg	font-regular leading-9 text-center text-thirdly w-[257px] mx-auto mb-[16px] duration-300'>{title}</p>
        <h6 className='group-hover/one:text-white text-black group/two font-open text-[24px]	font-bold	 leading-6 text-center mb-[57px] relative duration-300'> Learn More
        <span className='absolute group-hover/two:w-[150px] w-[20px] h-[40px] group-hover/one:bg-[#ffffff4d] bg-[#1bbf004d] -top-[6px] right-[110px] group-hover/two:rounded-l-[30px] rounded-r-[30px] duration-300'></span></h6>
    </div>
  )
}

export default ServiceList