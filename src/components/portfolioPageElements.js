import React from 'react';
import { StaticImage } from 'gatsby';
import styled from '@emotion/styled';

export const Container = styled.div`
 display: flex;
 justify-content: center;
 padding: 20px;
 /* Will get sucked up in margin at bigger sizes */
`
export const ImageContainer = styled.div`
 width: 100%;
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
 @media screen and (max-width: 500px) {
  grid-template-columns: 130px 130px;
  grid-template-rows: 150px  150px 150px;
  margin: 0px;
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
overflow-z: hidden;
 @media screen and (max-width: 500px) {
  grid-template-columns: 130px 130px;
  grid-template-rows: 200px 200px 200px 200px;
   margin: 0 10px;
   margin-bottom: 64px;
   width: fit-content;
   p {
    word-break: break-word;
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
