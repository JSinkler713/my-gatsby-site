import React from 'react';
import { StaticImage } from 'gatsby';
import styled from '@emotion/styled';

export const Container = styled.div`
 display: flex;
 justify-content: center;
`
export const ImageContainer = styled.div`
 width: 100%;
`

export const Content = styled.div`
  margin: 0 20px;
  max-width: 1152px;
  p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  margin: 16px 0px;
  margin-bottom: 64px;
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
`
export const TechnologyHolder = styled.div`
justify-self: center;
align-self: center;
width: 520px;
display: grid;
grid-template-columns: 130px 130px 130px 130px;
grid-template-rows: 200px 200px;
align-items: center;
`
export const IconWrapper = styled.div`
margin: 8px;
width: 100px;
height: 150px;
`
export const TechName = styled.p`
font-size: 12px;
`

export const IconTitle = styled.p`
font-size: 12px;
`
