import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-banner w-full h-screen bg-no-repeat	bg-cover bg-center'>
        <div className='bg-[#6b62c5e6] w-full h-full'>
            <Container>
                
                <h1 className='  text-[84px] font-open text-fastly font-bold text-center pt-[145px] pb-[20px]'>
                You're Unique.Your Website Should Be Too</h1>
               
                
                <SubHeading className='w-[715px] mx-auto text-[24px] font-paprika text-ragular text-white text-center leading-10 my-[25px]'
                text="A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. "/>

               <div className=' flex justify-center items-center gap-x-7 '>
                <Button text="Get Free Quoto"/>
                <Button text="Learn More"/>
               
               </div>


                
            </Container>

        </div>

    </section>
  )
}

export default Banner