import {
  InfoContainer,
  InfoWrapper,
  Row,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Button,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoSectionElements';

const InfoSection = ({
  vh,
  button,
  lightBg,
  mTop,
  mkSmall,
  id,
  imgStart,
  lightText,
  topLine,
  headline,
  description,
  img,
  alt,
  primary,
  buttonLabel,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper vh={vh} mTop={mTop}>
          <Row imgStart={imgStart}>
            <Column colNum={'1'}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <BtnWrap>
                  {button ? (
                    <Button
                      primary={primary}
                      dark={dark}
                      lightText={lightText}
                      to={button}
                    >
                      {buttonLabel}
                    </Button>
                  ) : (
                    ''
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column>
            <Column colNum={'2'}>
              <ImgWrap>
                <Img src={img} mkSmall={mkSmall} alt={alt} />
              </ImgWrap>
            </Column>
          </Row>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
export default InfoSection;
