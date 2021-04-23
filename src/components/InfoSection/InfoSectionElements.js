import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? 'white' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /*height: calc(100vh - 80px);*/
  /*height: 800px;*/
  height: ${({vh})=> (vh ? vh : '100vh')};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: ${({mTop})=> (mTop ? '80px': '0px')};
  padding: 0px 24px;
  justify-content: center;
`
export const Row = styled.div`
  display: grid;
  gap: 30px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart})=> (imgStart ?`'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart})=> (imgStart ?`'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`
export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: ${({colNum})=> (`col${colNum}`)};
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 60px 0;
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
export const BtnWrap = styled.div`
display: flex;
`
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#010606')};
  font-size: ${({fontBig})=> (fontBig ? '20px': '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    filter: saturate(1.5) ;*/
    /*background: ${({primary})=> (primary ? '#fff' : '#01BF71')};*/
  }
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 0 10px 0;
  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
  }
`
