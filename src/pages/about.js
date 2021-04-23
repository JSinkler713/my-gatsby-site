import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby'
import HomeLayout from '../components/homelayout';
import {useSpring, animated, useTransition} from 'react-spring'

export default () => {
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState('')
  const [showSent, setShowSent] = useState(false)
  const [honey, setHoney] = useState(false)
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


  /* Animate span confirming email sent */
  const spring = useSpring({
    opacity: showSent ? 1 : 0,
    transform: showSent ? 'scale(1.25)': 'scale(1)',
  })
  const SentSpan = <animated.span style={spring}>SENT ✔️</animated.span>

  /* NETLIFY FORM ENCODING*/
  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  /* NETLIFY FORM SUBMISSION*/
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!honey) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "message": message,
          "form-name": event.target.getAttribute("name"),
          "contact": contact
        })
      }).then(() => {
        console.log('success')
        // success should give a pop up all is well, and reset the form
        setShowSent(true)

      }).catch(error => alert(error))
    } else {
      // what to do with a bot? Send them to youtube
      window.location.assign("https://www.youtube.com/watch?v=ADj2jDqT4uY"); 
    }
  }
  //called when showSent is updated with form submission
  useEffect(()=> {
    // if showSent === true
    if (showSent) {
    // do a little timer,
      const timer = setTimeout(()=> {
        // at the end set showSent back to false
        setShowSent(false)
      }, 2000)
    setContact('')
    setMessage('')
    }
  }, [showSent])

  const handleChangeMessage = (e)=> {
    setMessage(e.target.value)
  }
  const handleChangeContact = (e)=> {
    setContact(e.target.value)
  }


  useEffect(()=> {
    if (index < arrayOfWhatIAm.length -1) {
      setTimeout(()=>setIndex(index+1), 1000)
    }
  }, [index])

  return (
    <HomeLayout>
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
        <form className='contact-form' data-netlify="true" name="myForm" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="myForm" />
          <input type="hidden" name="honey"  onChange={()=>setHoney(true)} />
          <label>Leave me a message 👋!</label>
          <textarea rows="10" cols="33" name="message" type="text" placeholder="Hey James, Looking forward to talking. Like your stuff on react!" value={message} onChange={handleChangeMessage} />
          <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', width: 'fit-content' }}>
            <label>Contact</label>
          <input name="contact" type="email" value={contact} placeholder="yourname@email.com" onChange={handleChangeContact}/>
        
          </div>
          <input type="submit" value="Send Message"/>{SentSpan}
        </form>
    </HomeLayout>
  )
}

