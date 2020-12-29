import React, { useRef } from 'react';
// gatsby prepackaged w/ reachrouter asn wraps w/ a bit more
// this has same API as reach-router
import { Link } from 'gatsby'
import HomeLayout from '../components/homelayout'
import GetInTouch from '../components/getInTouch'
import Hero from '../components/hero'
import {useSpring, animated, useChain} from 'react-spring'

export default () => {
  const refOne = useRef()
  const springStyle = useSpring({
    ref: refOne,
    from: {opacity: 0, paddingTop: '15vh'},
    to: {opacity: 1, paddingTop: '5vh'},
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
      <HomeLayout>
        <animated.h1 style={springStyle}>James Sinkler &lt;Dev/></animated.h1>
        <animated.div style={secondSpring}>
          <h3>Educator, and ever educated</h3>
          <p>Always teaching and learning new skills in my tech endeavors and beyond</p>
          <GetInTouch />
        </animated.div>
      </HomeLayout>
    </>
  )
}
