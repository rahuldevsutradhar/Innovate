import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import HeadingOne from '../../components/HeadingOne'
import SubHeading from '../../components/SubHeading'
import Button from '../../components/Button'
import ServiceList from '../../components/ServiceList'

const Service = () => {
  return (
    <section>
        <Container>
            <Flex>
                <div>
                    <HeadingOne classname='pb-[20px]' text='What We Do'/>
                    <SubHeading className='w-[350px] pb-[56px]' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology '/>
                    <Button text='Contact Us'/>
                </div>
                <ServiceList/>
            </Flex>
        </Container>
    </section>
  )
}

export default Service