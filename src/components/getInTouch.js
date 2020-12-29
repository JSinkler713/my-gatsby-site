import React, {useState, useEffect, useContext} from 'react'; 
import styled from '@emotion/styled'
import {  FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMailOption, GrMail } from 'react-icons/gr' 
const GetInTouchStyles = styled.div`
  h2 {
    color: white;
  }
  svg {
    height: 36px;
    width: 36px;
  }
  ul {
    color: white;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
  }
  width: 300px;
  margin: 10vw auto;
  li {
    margin: 10px auto;
    text-decoration: none;
  }
  a, a:visited {
    color: white;
  }
`
const GetInTouch = ()=> { 
  return ( 
    <GetInTouchStyles>
      <h2>Get In Touch</h2>
      <ul> 
        <li><a href='https://www.linkedin.com/in/jsinkler-713/'><FaLinkedin /></a></li>
        <li><a href='https://github.com/JSinkler713'><FaGithub /></a></li>
        <li><a href="mailto:jamessinkler713@gmail.com"><GrMail /></a></li>
      </ul> 
    </GetInTouchStyles>
  ) 
} 
export default GetInTouch;
