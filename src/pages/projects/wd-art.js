import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/homelayout';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useSpring } from 'react-spring';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Title, } from '../../components/portfolioElements';
import { IconTitle, TechWrapper, IconWrapper, TechnologyHolder, ImageContainer, SubHeader, Container, Content} from '../../components/portfolioPageElements'
import IconContainer from '../../components/IconContainer'


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
                src='../../portfolio-assets/wdart-second-pic.jpg'
                alt="A phone displaying the weather"
                placeholder="blurred"
                layout="fullWidth"
              />
          </ImageContainer>
          <SubHeader center={true}>Technologies</SubHeader>
          <TechWrapper>
            <TechnologyHolder>
              <IconWrapper>
                <StaticImage
                  src='../../icons/Sanity_CMS.png'
                  alt="Sanity_CMS"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Sanity CMS</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/Stripe.png'
                  alt="Stripe"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Stripe</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/React.png'
                  alt="React"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>React</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/Styled_Components.png'
                  alt="Styled_Components"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Styled Components</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/React_Spring.png'
                  alt="React_Spring"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>React Spring</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/Gatsby.png'
                  alt="Gatsby"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Gatsby</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/Netlify.png'
                  alt="Netlify"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Netlify</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/GitHub.png'
                  alt="GitHub"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>GitHub</IconTitle>
              </IconWrapper>
            </TechnologyHolder>
          </TechWrapper>
          <ImageContainer>
               <StaticImage
                src='../../portfolio-assets/wdart-third-pic.png'
                alt="A phone displaying the weather"
                placeholder="blurred"
                layout="fullWidth"
              />
          </ImageContainer>
          <SubHeader>Summary</SubHeader>
          <p>A responsive, fast, easy to navigate storefront to buy digital assets. The stripe implementation combined with React’s useContext hook for cart management, makes this this a full featured storefront.</p>
          <SubHeader>Want More?</SubHeader>
          <p>Feel free to browse the code, or check out the live site with the following links.</p>
          <p>Code at <a href='https://github.com/JSinkler713/wall-deco'>GitHub</a> / <a href='https://wall-art-deco.netlify.app/' >Live Site </a>.</p>
        </Content>
      </Container>
    </HomeLayout>
  )
}
