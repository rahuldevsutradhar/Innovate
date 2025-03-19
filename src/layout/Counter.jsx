import React from 'react'
import Pointer from '../components/Pointer'
import Flex from '../components/Flex'
import Container from '../components/Container'

const Counter = () => {
  return (
    <section className='bg=[#F9F9FB]'>
    <Container>
        <Flex className='gap-x-20 text-center justify-between mt-[400px]'>
             <Pointer text='Happy Client' number='63K'/>
             <Pointer text='Projects Done' number='10K'/>
             <Pointer text='Gets Award' number='120'/>
             <Pointer text='Operated YEARS' number='16'/>
        </Flex>
    </Container>
    </section>
  )
}

export default Counter