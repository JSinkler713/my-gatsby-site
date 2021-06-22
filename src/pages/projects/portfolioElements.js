import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Container = styled.div`
  color: black;
  background: white;
  padding-top: 20px;
  min-height: 80vh;
  padding: 39px;

  @media screen and (max-width: 768px) {
  /* TODO: fix this */
    padding-top: 20px;
  }
`
export const StyledLink = styled(Link)`
text-decoration: none;
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  max-width: auto;

`
export const Card = styled.div`
 max-width: 465px;
 margin: 48px;
 @media screen and (max-width: 500px) {
   margin: 0px;
   margin-bottom: 24px;
 }
`
export const ProjectType = styled.h3`
  color: rgba(86, 84, 82, 0.67);
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`

export const ProjectImageContainer = styled.div`
  min-width: 465px;
  border-radius: 5px;
`

export const ProjectTitle = styled.h2`
font-weight: 600;
font-size: 36px;
line-height: 54px;
`

export const TopLine = styled.p`
  color: #01bf71;
  /* color:hsl(23deg 96% 54%); */
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 1.3;
  text-transform: uppercase;
  margin-bottom: 1rem;
`
export const Heading = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-left: -1.5px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f7f7' : '#010606')};

  @media screen and (max-width: 480px;) {
   font-size: 2rem;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 20px 0;
  color: #fff;
  color: ${({ lightText }) => (lightText ? '#f7f7f7' : '#010606')};
`
