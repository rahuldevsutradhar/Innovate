import React from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import ImageOne from '../../assets/One.png'
import ImageTwo from '../../assets/two.png'
import ImageThree from '../../assets/three.png'
import ImageFour from '../../assets/four.png'
import BgPic from '../../assets/element.png'
import Flex from '../../components/Flex'

const Galllary = () => {
  return (
    <section className='bg-[#F9F9FB] '>
      
      
        <Container>
            <Flex className='justify-between relative'>
                <div>
                <Image className='absolute top-[-100px] left-0 -z-10' src={ImageOne} alt="one"/>
                </div>
                <div>
                <Image className='absolute top-[-160px] left-[300px] -z-10' src={ImageTwo} alt="one"/>
                </div>
                <div>
                <Image className='absolute top-[-40px] left-[531px] -z-10' src={ImageThree} alt="one"/>
                </div>
                <div>
                <Image className='absolute top-[-105px] right-[0px] -z-10' src={ImageFour} alt="one"/>
                </div>
         
            </Flex>
        </Container>
        
    </section>
  )
}

export default Galllary