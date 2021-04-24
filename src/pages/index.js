import React, { useRef, useState, useEffect } from 'react';
import * as Scroll from 'react-scroll'
import ScrollListener from 'react-scroll-listener'
// gatsby prepackaged w/ reachrouter asn wraps w/ a bit more
// this has same API as reach-router
import { Link } from 'gatsby'
import HomeLayout from '../components/homelayout'
import GetInTouch from '../components/getInTouch'
import ContactForm from '../components/ContactForm'
import InfoSection from '../components/InfoSection'
import { blogReference, homeObjOne, blogHeader, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Hero from '../components/hero'
import { ArrowElement, UpArrow, DownArrow } from '../components/ArrowElement'
import {useSpring, animated, useChain} from 'react-spring'
import useIsOpen from '../hooks/use-isOpen';

const scroll = Scroll.animateScroll

export default () => {
  const [isOpen, toggleOpen] = useIsOpen()
  const [currentActive, setCurrentActive] = useState('about')
  const [hideDown, setHideDown] = useState(false)
  const [hideUp, setHideUp] = useState(true)

  useEffect(()=> {
    const scrollListener = new ScrollListener();

  // create handlers:
    const myScrollStartHandler = function( event ){
      handleScroll()
    }
    const myScrollEndHandler = function( event ){
      // nothing
    }
    scrollListener.addScrollHandler('main', myScrollStartHandler, myScrollEndHandler)

    // handle remove listeners
    return ()=> {
      console.log('cleanup')
      scrollListener.removeScrollHandlers()
    }

  }, [])


  const handleScroll = () => {
    console.log('handling scroll')
    let lastElTop = document.querySelector('#portfolio').getBoundingClientRect()
    console.log(lastElTop)
    if (lastElTop.y < 200){
      //we need to reverse the arrow,
      setHideDown(true)
      setHideUp(false)
      //and onClick we need it to go all the way home, and then reappear pointing down

    } else {
      setHideDown(false)
      setHideUp(true)
    }
  }

  const scroll100vh = (event)=> {
    let height = window.innerHeight
    console.log(height)
    scroll.scrollMore(height)
    handleScroll()
  }
  const scrollToTop= ()=> {
    scroll.scrollToTop();
    handleScroll()
  }



  const refOne = useRef()
  const springStyle = useSpring({
    ref: refOne,
    from: {opacity: 0, paddingTop: '7vh'},
    to: {opacity: 1, paddingTop: '4vh'},
    config: { mass: 10, tension: 300, friction: 30, clamp: false}
  })
  const refTwo = useRef()
  const secondSpring = useSpring({
    ref: refTwo,
    delay: 300,
    from: {opacity: 0 },
    to: {opacity: 1},
    config: { mass: 100, tension: 300, friction: 30, clamp: true} 
  })

  useChain([refOne, refTwo])
  
  return(
    <>
      <HomeLayout isOpen={isOpen} toggleOpen={toggleOpen}>
        <InfoSection mkSmall={true} vh={`calc(100vh - 80px)`} {...homeObjOne }/>
        <InfoSection  {...blogReference }/>
        <InfoSection  {...homeObjThree }/>
        <ContactForm/>
         <ArrowElement hide={hideDown} onClick={scroll100vh} smooth={true} duration={700} spy={true} exact={true}>
           <DownArrow />
         </ArrowElement >
         <ArrowElement hide={hideUp} onClick={scrollToTop} smooth={true} duration={700} spy={true} exact={true}>
           <UpArrow />
         </ArrowElement >

      </HomeLayout>
    </>
  )
}
