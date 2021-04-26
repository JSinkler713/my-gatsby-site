import React, {useState, useEffect, useContext} from 'react'; 
import styled from '@emotion/styled'
import {  FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMailOption, GrMail } from 'react-icons/gr' 
const GetInTouchStyles = styled.div`
  svg {
    height: 36px;
    width: 36px;
  }
  ul {
    color: white;
    list-style-type: none;
    margin: 0px;
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around
  }
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    text-decoration: none;
  }
  a, a:visited {
    color: white;
  }
  a:hover {
    color: #01BF71;
`
const GetInTouch = ()=> { 
  return ( 
    <GetInTouchStyles>
      <ul> 
        <li><a href='https://www.linkedin.com/in/jsinkler-713/'><FaLinkedin /></a></li>
        <li><a href='https://github.com/JSinkler713'><FaGithub /></a></li>
        <li><a href="mailto:jamessinkler713@gmail.com"><GrMail /></a></li>
      </ul> 
    </GetInTouchStyles>
  ) 
} 
export default GetInTouch;
