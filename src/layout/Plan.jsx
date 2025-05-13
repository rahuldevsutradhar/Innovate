import React from 'react'
import PlanCard from '../components/PlanCard'
import HeadingOne from '../components/HeadingOne'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Plan = () => {
  return (
    <div className='mb-[100px]'>
        <Container>
        <HeadingOne text='Choose The Right Plan' classname='text-center mb-[64px]'/>
        <Flex className='gap-[30px] flex wrap'>
        <PlanCard/>       
        </Flex>
        </Container>
    </div>
  )
}

export default Plan