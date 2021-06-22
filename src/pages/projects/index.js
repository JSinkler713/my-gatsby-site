import React, {useState, useEffect, useContext} from 'react'; 
import HomeLayout from '../../components/homelayout'
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from "gatsby-plugin-image"
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import FooterContact from '../../components/Footer-Contact'
import {Container,CardContainer, Card, ProjectImageContainer, ProjectType, ProjectTitle, TopLine, Heading, Subtitle  } from './portfolioElements'


const Portfolio = ()=> { 
  const [isOpen, toggleOpen] = useIsOpen()

  return (
    <>
   <HomeLayout isOpen={isOpen} toggleOpen={toggleOpen} style={{maxWidth: '800px'}}>
     <Container>
       <TopLine>My Work</TopLine>
       <Heading>Portfolio</Heading>
       <Subtitle>Here are a few of my recent projects. If you want to see more, feel free to browse my <a href='https://github.com/JSinkler713' target="_blank">gitHub</a>.</Subtitle>
       <CardContainer>
         <Card>
           <ProjectImageContainer>
             <StaticImage
              src="../../project-assets/hero.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
           </ProjectImageContainer>
           <ProjectType>Application</ProjectType>
           <ProjectTitle>Weather Report</ProjectTitle>
         </Card>
         <Card>
           <ProjectImageContainer>
             <StaticImage
              src="../../project-assets/hero.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
           </ProjectImageContainer>
           <ProjectType>Business</ProjectType>
           <ProjectTitle>California Equipment</ProjectTitle>
         </Card>
         <Card>
           <ProjectImageContainer>
             <StaticImage
              src="../../project-assets/hero.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
           </ProjectImageContainer>
           <ProjectType>WDArt</ProjectType>
           <ProjectTitle>E-Commerce</ProjectTitle>
         </Card>
       </CardContainer>
     </Container>
       
   </HomeLayout>
    <FooterContact id='contact' fullBleed={true} />
    </>
  )
}
export default Portfolio
