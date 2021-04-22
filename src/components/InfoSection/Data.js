// have some data for my reusable components

import imgOne from './me.png'
//import imgTwo from '../../images/svg-2.svg'
//import imgThree from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'James Sinkler',
  headline: 'Software Engineer',
  description: "Get your app off the ground today. Contact me to get the idea you've had for ages finally built.",
  buttonLabel: 'Contact',
  imgStart: false,
  img: imgOne,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
    id: 'blog',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'James Sinkler',
    headline: 'Software Engineer with JS skills, I mean it is my name',
    description: "Get you app off the ground today. Contact me and get the idea you've had for ages, finally built.",
    buttonLabel: 'Get started',
    imgStart: true,
    //img: imgTwo,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText: true
}

export const homeObjThree = {
id: 'portfolio',
lightBg: false,
lightText: true,
lightTextDesc: true,
topLine: 'James Sinkler',
headline: 'Software Engineer with JS skills, I mean it is my name',
description: "Get you app off the ground today. Contact me and get the idea you've had for ages, finally built.",
buttonLabel: 'Get started',
imgStart: false,
//img: imgThree,
alt: 'Car',
dark: true,
primary: true,
darkText: false
}
