import React, {useState, useEffect, useContext} from 'react'; 
import { InfoContainer, InfoWrapper, Row, Column, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoSectionElements'


const InfoSection = ({vh, lightBg, id, imgStart, lightText, topLine, headline, description, img, alt, primary, buttonLabel, dark})=> {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper vh={vh}>
          <Row imgStart={imgStart}>
            <Column colNum={'1'} >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <BtnWrap>
                </BtnWrap>
              </TextWrapper>
            </Column>
            <Column colNum={'2'} >
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column>
          </Row>
        </InfoWrapper>
      </InfoContainer >
    </>
  )
}
export default InfoSection;
