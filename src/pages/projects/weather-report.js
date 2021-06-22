import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/homelayout';
import { Link } from 'gatsby';
// import '../phoneStyle.css'
import { useSpring } from 'react-spring';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import WeatherIcon from '../../project-assets/weather-icon.png';

const Title = styled.h1`
  position: absolute;
  text-shadow: 1px 1px black;
  z-index: 1;
  top: 300px;
  right: 0px;
  left: 0px;
  margin: auto;
  text-align: center;
  color: white;
  font-size: 64px;
  @media (max-width: 708px) {
    top: 100px;
  }
`;

const RepoLink = styled.a`
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: #01bf71;
  }
  text-decoration: none;
`;
const SiteLink = styled.a`
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: #01bf71;
  }
  text-decoration: none;
`;
const WeatherIconWrapper = styled.img`
  height: 24px;
  width: 24px;
`;

const IconWrapper = styled.span`
  svg {
    height: 24px;
    width: 24px;
    fill: black;
  }
  a:hover {
    color: #01bf71;
  }
`;

const SideBySide = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media (max-width: 768px) {
 grid-template-columns: 1fr;

`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 24px;
  padding: 24px 10px 20px;
`;
const CoolFeature = styled.strong`
  text-decoration: italicized;
  font-size: 1.1.rem;
`;
const AppDescHeader = styled.h2`
  margin: 10px;
  text-align: center;
  font-size: 36px;
`;
const ParaWrapper = styled.div`
  padding: 0px 3px;
  line-height: 1.8;
`;
const ApiWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  div {
    ul {
      padding: 0;
      list-style: none;
    }
  }
`;

const BottomContentWrapper = styled.div`
  padding: 0px 10px;
  line-height: 1.8;
`;

const AppDescPara = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

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
        src="../project-assets/hero.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
      />
      <Title>Weather Report</Title>
      <SideBySide>
        <LeftSide style={{ justifyContent: 'space-between' }}>
          <div>
            <AppDescHeader>
              <IconWrapper>
                <RepoLink
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/JSinkler713/whether-to"
                >
                  {' '}
                  Code Repo <FaGithub />
                </RepoLink>
              </IconWrapper>{' '}
              |
              <SiteLink
                rel="noreferrer"
                target="_blank"
                href="https://weatherreport.xyz"
              >
                {' '}
                Live Site <WeatherIconWrapper src={WeatherIcon} />
              </SiteLink>
            </AppDescHeader>
            <ParaWrapper>
              <AppDescPara>
                A clean, simple, smart weather application built with React.
                Features include{' '}
                <CoolFeature>"Use current Location"</CoolFeature>, remembering{' '}
                <CoolFeature>Previous Searches </CoolFeature>, and{' '}
                <CoolFeature>autocomplete </CoolFeature>for searches.
              </AppDescPara>
            </ParaWrapper>
          </div>
          <ApiWrapper>
            <div>
              <h3>2 Google API's</h3>
              <ul>
                <li>Geocoding API</li>
                <li>Places API</li>
              </ul>
            </div>
            <div>
              <h3>1 Weather API</h3>
              <ul style={{ display: 'inline-block' }}>
                <li>OpenWeatherMap API</li>
              </ul>
            </div>
          </ApiWrapper>
          <br />
          <SideBySide>
            <LeftSide style={{ padding: '6px' }}>
              <StaticImage
                src="../project-assets/icons.png"
                alt="icons designed in figma"
                placeholder="blurred"
              />
            </LeftSide>
            <div>
              <AppDescPara>
                Icons and gradients were designed by my ux-partner{' '}
                <CoolFeature>
                  <RepoLink
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.jamesrothbart.com/"
                  >
                    James Rothbart
                  </RepoLink>
                </CoolFeature>
                .
              </AppDescPara>
              <AppDescPara>
                Utilizing the OpenWeatherMap API weather codes and Styled
                components, I was able to dynamically fit our app to the current
                weather
              </AppDescPara>
            </div>
          </SideBySide>
        </LeftSide>
        <StaticImage
          src="../project-assets/computer-weather.png"
          alt="weather report on a laptop screen"
          placeholder="blurred"
          layout="fullWidth"
        />
      </SideBySide>
      <StaticImage
        src="../project-assets/phone-in-hands.jpg"
        alt="hands holding weather app"
        placeholder="blurred"
        layout="fullWidth"
      />
      <SideBySide>
        <LeftSide>
          <StaticImage
            src="../project-assets/sky-gradients.png"
            alt="gradients designed in figma"
            placeholder="blurred"
            layout="constrained"
          />
        </LeftSide>
        <BottomContentWrapper>
          <AppDescPara style={{ marginTop: '10px', marginBottom: '10px' }}>
            With a host of custom functions utilizing{' '}
            <CoolFeature>Styled Components</CoolFeature> in{' '}
            <CoolFeature>React</CoolFeature>. The emphasis was on a clean
            user-experience, with a <CoolFeature>mobile first</CoolFeature>{' '}
            design.
          </AppDescPara>
          <AppDescPara>
            We wanted to minimize user struggle, so implementing the "Use
            Current Location" and the autocomplete was key for minimizing user
            errors.
          </AppDescPara>
        </BottomContentWrapper>
      </SideBySide>
    </HomeLayout>
  );
};

