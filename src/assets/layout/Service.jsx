import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import HeadingOne from '../../components/HeadingOne'
import SubHeading from '../../components/SubHeading'
import Button from '../../components/Button'
import ServiceList from '../../components/ServiceList'
import LogoWeb from '../../assets/web.png'
import software from '../../assets/software.png'
import content from '../../assets/content.png'
import merketing from '../../assets/merketing.png'
import support from '../../assets/support.png'

const Service = () => {
  return (
    <section>
        <Container>
            <Flex className='gap-[30px] flex-wrap '>
                <div className='pr-[20px]'>
                    <HeadingOne classname='pb-[20px]' text='What We Do'/>
                    <SubHeading className='w-[350px] pb-[56px]' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology '/>
                    <Button text='Contact Us'/>
                </div>
                <ServiceList image={LogoWeb}
                 heading='web Design & Dev' 
                 title='Social Media has changed the way we interact & do business while creating'/>
                <ServiceList image={software}
                 heading='Software Dev ' 
                 title='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
                <ServiceList image={content}
                 heading='Content Writing' 
                 title='Social Media has changed the way we interact & do business while creating a new avenue.'/>
                <ServiceList image={merketing}
                 heading='Digital Marketing' 
                 title='Social Media has changed the way we interact & do business while creating a new avenue.'/>
                <ServiceList image={support}
                 heading='Support & Training' 
                 title='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
                
                
                
            </Flex>
        </Container>
    </section>
  )
}

export default Service