import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import {useSpring, animated, useTransition} from 'react-spring'

export default () => {
  const arrayOfWhatIAm = ['Developer', 'Teacher', 'Learner', 'Tinkerer', 'Builder', 'Problem-Solver']
  const [index, setIndex] = useState(0)
  const [items, setItems] = useState(arrayOfWhatIAm)
  const springHook = useSpring({delay: 3000}, {from: {opacity:0}}, {to: {opacity:1}})
    
  const transitions = useTransition(arrayOfWhatIAm, null, {
    from: { opacity: 0 },
    delay: 1000,
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const values = arrayOfWhatIAm.map((item, key) => {
    return(
      <animated.span key={key} style={{fontSize: '.8rem'}, {fontWeight: '100'}}>{item}        </animated.span>
    )
  })

  useEffect(()=> {
    if (index < arrayOfWhatIAm.length -1) {
    setTimeout(()=>setIndex(index+1), 1000)
    }
  }, [index])

  return (
    <Layout>
      <h1>James Sinkler</h1>
      <br/>
      { values }
      <p>Welcome to my personal website!</p>
      <div>
        <p>I build full-stack applications with React, node.js and SQL databases. I enjoy problem solving and seeing projects come to life. I've taught Math in my previous life, enjoy talking code, or solving puzzles. I've studied coding on my own, then online at Udacity, and most recently at General Assembly's Software Engineering Immersive. I enjoy improving my skills and continuing to learn from others. </p>
      </div>
      <div>
        <p>I plan to use this site to help others build out their skills as I continue to build out mine. There are a lot of tutorials, and lessons that I have benefited from as I've learned, and I want to contribute back to the dev community with my own gatherings of knowledge. I plan to cover things ranging from Hash Maps in Coding challenges, to React Hooks and how to implement the useContext() hook. Some things I will have more expertise in, and others I will be sharing my own new learning.</p>
      </div>
      <div>
        <p>I hope you enjoy what you read, and get some benefit out of the articles that come to life with this project. Everything from graphQL servers to React Native may turn into a post. Thanks for joining me on my learnings and teachings.</p>
        </div>
    </Layout>
  )
}

