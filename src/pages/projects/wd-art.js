import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/homelayout';
import { Link } from 'gatsby';
// import '../phoneStyle.css'
import { useSpring } from 'react-spring';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Title, } from '../../components/portfolioElements';
import { TechName, TechnologyHolder, ImageContainer, SubHeader, Container, Content} from '../../components/portfolioPageElements'

export default function() {
  //const [show1, setShow1] = useState(true);
  //const [show2, setShow2] = useState(true);
  const [isOpen, toggleOpen] = useIsOpen();

  return (
    <HomeLayout
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      style={{ maxWidth: '800px' }}
    >
      <StaticImage
        src="../../portfolio-assets/wdart-preview.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
      />
      <Title>WDArt</Title>
      <Container>
        <Content>
          <SubHeader>Description</SubHeader>
          <p>A digital storefront for amazing photography. Stripe implementation for secure payment checkout, with Gatsby powering a fast static site, and React implemented for actions such as the shopping cart, and buy functionality.</p>
          <ImageContainer>
            {/* TODO: GET BETTER SCREENSHOT */}
               <StaticImage
                src='../../portfolio-assets/wdart-second-pic.png'
                alt="A phone displaying the weather"
                placeholder="blurred"
                layout="fullWidth"
              />
          </ImageContainer>
          <SubHeader center={true}>Technologies</SubHeader>
          <TechnologyHolder>
               <StaticImage
                src='../../portfolio-assets/wdart-third-pic.png'
                alt="A phone displaying the weather"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
              />
            <TechName>React</TechName>
            
          </TechnologyHolder>
          <SubHeader>Summary</SubHeader>
          <p>A responsive, fast, easy to navigate storefront to buy digital assets. The stripe implementation combined with React’s useContext hook for cart management, makes this this a full featured storefront.</p>
          <ImageContainer>
               <StaticImage
                src='../../portfolio-assets/wdart-third-pic.png'
                alt="A phone displaying the weather"
                placeholder="blurred"
                layout="fullWidth"
              />
          </ImageContainer>
          <SubHeader>Want More?</SubHeader>
          <p>Feel free to browse the code, or check out the live site with the following links.</p>
          <p>Code at <a href='https://github.com/JSinkler713/wall-deco'>GitHub</a> / <a href='https://wall-art-deco.netlify.app/' >Live Site </a>.</p>
        </Content>
      </Container>
    </HomeLayout>
  )
}
