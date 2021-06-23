import React from 'react';
import HomeLayout from '../../components/homelayout';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import { IconTitle, Title, TechWrapper, IconWrapper, TechnologyHolder, ImageContainer, SubHeader, Container, Content} from '../../components/portfolioPageElements'


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
        src="../../portfolio-assets/california-equipment-preview.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
      />
      <Title top={'125px'}>California Equipment</Title>
      <Container>
        <Content>
          <SubHeader>Description</SubHeader>
          <p>A client site to inform potential buyers / sellers of the business. Client focused on selling used heavy equipment as a broker. Has a  contact form that sends an email to the owner. Has a listings page the owner can update through Sanity CMS.</p>
          <ImageContainer>
            {/* TODO: GET BETTER SCREENSHOT */}
               <StaticImage
                src='../../portfolio-assets/california-equipment-second-pic.png'
                alt="phone with california equipment site"
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
                  src='../../icons/Apollo_GraphQL.png'
                  alt="Apollo_GraphQL"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Apollo GraphQL</IconTitle>
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
                  src='../../icons/Email_JS.png'
                  alt="EmailJS"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>EmailJS</IconTitle>
              </IconWrapper>
              <IconWrapper>
                <StaticImage
                  src='../../icons/GoDaddy.png'
                  alt="GoDaddy"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>GoDaddy</IconTitle>
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
                  src='../../icons/Figma.png'
                  alt="Figma"
                  placeholder="blurred"
                  layout="fixed"
                  height={64}
                />
                <IconTitle>Figma</IconTitle>
              </IconWrapper>
            </TechnologyHolder>
          </TechWrapper>
          <ImageContainer>
               <StaticImage
                src='../../portfolio-assets/california-equipment-third-pic.png'
                alt="computer displaying contact form of california equipment"
                placeholder="blurred"
                layout="fullWidth"
              />
          </ImageContainer>
          <SubHeader>Summary</SubHeader>
          <p>Built with React on the frontend, but a headless CSM Sanity on the backend. This is accessable to the client to update their Listings as needed. Apollo GraphQL helps fetch the current listings and deliver them to a potential client.</p>
          <p>As a design tool Figma was used extensively with multiple iterations to get the project to meet the goals and expectations of the client.</p>
          <SubHeader>Want More?</SubHeader>
          <p>Feel free to check out the live site if you are in the need for a used tractor.</p>
          <p>(sorry no code for clients security) / <a href='https://californiaequipment.com' >Live Site</a>.</p>
        </Content>
      </Container>
    </HomeLayout>
  )
}

