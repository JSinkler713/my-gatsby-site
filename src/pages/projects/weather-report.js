import React from 'react';
import HomeLayout from '../../components/homelayout';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Title,
  IconTitle,
  TechWrapper,
  IconWrapper,
  TechnologyHolder,
  ImageContainer,
  SubHeader,
  Container,
  Content,
} from '../../components/portfolioPageElements';

export default function() {
  const [isOpen, toggleOpen] = useIsOpen();

  return (
    <HomeLayout
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      style={{ maxWidth: '800px' }}
    >
      <StaticImage
        src="../../portfolio-assets/weather-report-preview.png"
        alt="mobile view of weather report"
        placeholder="blurred"
        layout="fullWidth"
      />
      <Title>Weather Report</Title>
      <Container>
        <Content>
          <SubHeader>Description</SubHeader>
          <p>
            A clean minimal weather app with smart features. Utilizes
            geolocation to give a user the weather for their location. Saves
            users recent searches for easy 1 click weather searches. Utilizes
            autocomplete w/ google Places API to re.commend locations based on
            text input
          </p>
          <ImageContainer>
            <StaticImage
              src="../../portfolio-assets/weather-report-second-pic.png"
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
                  src="../../icons/OpenWeather_API.png"
                  alt="OpenWeather_API"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>OpenWeather API</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/Geolocation_API.png"
                  alt="Geolocation_API"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Geolocation API</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/Places_API.png"
                  alt="Places API"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Places API</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/Styled_Components.png"
                  alt="Styled_Components"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Styled Components</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/React_Spring.png"
                  alt="React_Spring"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>React Spring</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/React.png"
                  alt="React"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>React</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/Netlify.png"
                  alt="Netlify"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Netlify</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src="../../icons/GitHub.png"
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
              src="../../portfolio-assets/weather-report-third-pic.png"
              alt="A computer displaying weather report"
              placeholder="blurred"
              layout="fullWidth"
            />
          </ImageContainer>
          <SubHeader>Summary</SubHeader>
          <p>
            Built with React. A responsive, fast, dynamic weather app utilizing
            multiple API’s and local storage on the browser. Gives the user a
            overview of the forecast for the next week along with the current
            weather conditions including precipitation, uv-index, wind, and
            current temp.
          </p>
          <SubHeader>Want More?</SubHeader>
          <p>
            Feel free to browse the code, or check out the live site with the
            following links.
          </p>
          <p>
            Code at{' '}
            <a href="https://github.com/JSinkler713/whether-to">GitHub</a> /{' '}
            <a href="https://weatherreport.xyz">Live Site </a>.
          </p>
        </Content>
      </Container>
    </HomeLayout>
  );
}
