import styled from '@emotion/styled';

export const Container = styled.div`
 display: flex;
 justify-content: center;
 padding: 20px;
`
export const ImageContainer = styled.div`
 width: 100%;
 padding-bottom: 20px;
`

export const Content = styled.div`
  margin: 0 20px;
  max-width: 1100px;
  min-width: 100%;
  p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  margin: 16px 0px;
  margin-bottom: 64px;
  }
 @media screen and (max-width: 640px) {
  margin: 0 20px;
 }
 @media screen and (min-width: 1100px) {
  min-width: unset;
 }
`
export const SubHeader = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin-top: 24px;
  text-align: ${({center}) => (center ? 'center' : 'left')};
`
export const TechWrapper = styled.div`
display: flex;
justify-content: center;
margin: 40px;
 @media screen and (max-width: 500px) {
   margin: 32px 0px;
   width: 100%;
 }
`
export const TechnologyHolder = styled.div`
justify-self: center;
align-self: center;
width: 520px;
display: grid;
grid-template-columns: 130px 130px 130px 130px;
grid-template-rows: 200px 200px;
align-items: center;
overflow-x: clip;
 @media screen and (max-width: 500px) {
  grid-template-columns: 140px 140px;
  grid-template-rows: 200px 200px 200px 200px;
  margin: 0 auto;
  margin-bottom: 64px;
  width: fit-content;
  align-items:start;
  justify-self: center;
 }
`
export const IconWrapper = styled.div`
margin: 8px;
width: 80px;
height: 150px;
/*overflow-x: hidden;*/
   p {
      margin-bottom: 0;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
@media screen and (max-width: 500px) {
  grid-template-columns: 140px 140px;
  grid-template-rows: 200px 200px 200px 200px;
  margin: 0 auto;
  width: fit;
   p {
      overflow-x: hidden;
      margin-bottom: 0;
      font-size: 12px;
    }
 }
`
export const TechName = styled.p`
font-size: 12px;
overflow-x: hidden;
`
//content 640 margin 0

export const IconTitle = styled.p`
font-size: 12px;
`

export const Title = styled.h1`
  position: absolute;
  text-shadow: 1px 1px black;
  z-index: 1;
  top: ${({top}) => top? top : '300px'};
  right: 0px;
  left: 0px;
  margin: auto;
  text-align: center;
  color: white;
  font-size: 64px;
  @media (max-width: 708px) {
    top: 100px;
    font-size: 48px;
  }
`;
