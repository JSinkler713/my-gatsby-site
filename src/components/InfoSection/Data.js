// have some data for my reusable components

import imgOne from './me.png'
import imgFour from './svg-4.svg'
import imgTwo from './svg-2.svg'
import imgThree from './svg-3.svg'

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

export const aboutReference = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'James Sinkler',
  headline: 'Software Engineer',
  description: "Learn more about my background and what I do",
  buttonLabel: 'About Me',
  imgStart: true,
  button: '/about/',
  img: imgFour,
  alt: 'Car',
  dark: false,
  primary: true,
  darkText: true
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
  mTop: true,
  img: imgTwo,
  alt: 'get app off ground',
  dark: false,
  primary: true,
  darkText: true
}

export const blogReference = {
  id: 'blog',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Blog Posts',
  blog: true,
  headline: 'Read 📓 my posts',
  description: "This is where I like to share some of my findings. Sometimes it's react related, other times it's straight javascript. Hope you enjoy.",
  buttonLabel: 'Read the Blog',
  button: '/blog/',
  imgStart: true,
  img: imgTwo,
  alt: 'Read Latest',
  dark: false,
  primary: true,
  darkText: true
}
export const blogHeader = {
  id: 'blog',
  mTop: true,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Blog Posts',
  blog: true,
  headline: 'Read 📓 my posts',
  description: "This is where I like to share some of my findings. Sometimes it's react related, other times it's straight javascript. Hope you enjoy.",
  buttonLabel: 'Read Latest',
  button: '/blog/js-set',
  imgStart: true,
  img: imgTwo,
  alt: 'Read Latest',
  dark: false,
  primary: true,
  darkText: true
}

export const homeObjThree = {
  id: 'portfolio',
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: 'work',
  headline: 'JS skills, I mean it is my name',
  description: "Check out some of my work",
  buttonLabel: 'Check out work',
  buttonLabel: 'My Work',
  button: '/projects/',
  imgStart: false,
  img: imgThree,
  alt: 'Comp',
  dark: true,
  primary: true,
  darkText: false
}
