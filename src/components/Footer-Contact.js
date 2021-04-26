import React, {useState, useEffect} from 'react';
import messageImg from './InfoSection/svg-5.svg'; 
import GetInTouch from './GetInTouch'
import styled from '@emotion/styled';
import { TwoColumnContainer, TwoColumnWrapper, Row, Column } from './TwoColumn/TwoColumnElements'

const ImgWrap = styled.div`
text-align: center;
max-width: 400px;
height: 100%;
`

const Img = styled.img`
  margin: 0 0 10px 0;
  padding-top: 30px;
  width: 100%;
  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
  }
`
const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 60px 0;
  text-align: center;
`
const SocialDiv = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const TopLine = styled.p`
  color: #01bf71;
  /* color:hsl(23deg 96% 54%); */
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 1.3;
  text-transform: uppercase;
  margin-bottom: 1rem;
`
const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  margin-left: -1.5px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f7f7' : '#010606')};

  @media screen and (max-width: 480px;) {
   font-size: 2rem;
  }
`
const FooterContact = ({id, fullBleed})=> {
  return(
        <TwoColumnWrapper id={id} fullBleed={fullBleed} style={{ background: '#010606'}} vh={'300px'}>
          <Row>
            <Column>
              <TextWrapper>
                <Heading lightText={true}>Get In Touch</Heading>
                <GetInTouch />
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrap>
                <Img src={messageImg}/>
                </ImgWrap>
            </Column>
          </Row>
      </TwoColumnWrapper>
  )
}
export default FooterContact
