import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import HeadingOne from '../../components/HeadingOne'
import SubHeading from '../../components/SubHeading'
import Button from '../../components/Button'
import ContactList from '../../components/ContactList'

const Content = () => {
  return (
    <section className='pt-[200px] pb-[100px] bg-[#FDFDFD]'>
        <Container>
            <Flex>
                <div className='w-8/12'> 
                <ContactList className='pb-[25px]' text='We solve real-world problems through people and the web.'/>
                <ContactList className='pb-[25px]' text='We make processes and technology work efficiently together.'/>
                <ContactList className='pb-[25px]' text='We advance improve existing technology through research and development.'/>
                <ContactList className='pb-[25px]' text='We develop long-lasting and scalable solutions, relationships partnerships.'/>
               
                </div>
                <div className='w-5/12'>
                      <HeadingOne classname='pb-[15px]' text="Why Choose Us"/>
                      <SubHeading className='w-[390px] pb-[40px]' text="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."/>
                      <Button className='hover:text-black' text="Contact Us"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Content