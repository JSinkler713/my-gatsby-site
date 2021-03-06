import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import HomeLayout from '../../components/homelayout';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FooterContact from '../../components/Footer-Contact';
import {
  Container,
  CardContainer,
  StyledLink,
  Card,
  ProjectImageContainer,
  ProjectType,
  ProjectTitle,
  TopLine,
  Heading,
  Subtitle,
} from '../../components/portfolioElements';

const Portfolio = () => {
  const [isOpen, toggleOpen] = useIsOpen();

  return (
    <>
      <HomeLayout
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        style={{ maxWidth: '800px' }}
      >
        <Container>
          <TopLine>My Work</TopLine>
          <Heading>Portfolio</Heading>
          <Subtitle>
            Here are a few of my recent projects. If you want to see more, feel
            free to browse my{' '}
            <a href="https://github.com/JSinkler713" target="_blank">
              GitHub
            </a>
            .
          </Subtitle>
          <CardContainer>
            <Card>
              <StyledLink to="./weather-report">
                <ProjectImageContainer>
                  <StaticImage
                    src="../../portfolio-assets/weather-report-preview.png"
                    alt="A phone displaying the weather"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </ProjectImageContainer>
                <ProjectType>Application</ProjectType>
                <ProjectTitle>Weather Report</ProjectTitle>
              </StyledLink>
            </Card>
            <Card>
              <StyledLink to="./california-equipment">
                <ProjectImageContainer>
                  <StaticImage
                    src="../../portfolio-assets/california-equipment-preview.png"
                    alt="A phone displaying the weather"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </ProjectImageContainer>
                <ProjectType>Business</ProjectType>
                <ProjectTitle>California Equipment</ProjectTitle>
              </StyledLink>
            </Card>
            <Card>
              <StyledLink to="./wd-art">
                <ProjectImageContainer>
                  <StaticImage
                    src="../../portfolio-assets/wdart-preview.png"
                    alt="A phone displaying the weather"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </ProjectImageContainer>
                <ProjectType>E-Commerce</ProjectType>
                <ProjectTitle>WDArt</ProjectTitle>
              </StyledLink>
            </Card>
          </CardContainer>
        </Container>
      </HomeLayout>
      <FooterContact id="contact" fullBleed={true} />
    </>
  );
};
export default Portfolio;
