import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {useSpring, animated, useTransition} from 'react-spring'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    textarea {
      color: #555;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 18px;
      line-height: 1.4;
      padding: 10px;
    }
    input {
      background-color: white;
      border-radius: 5px;
      color: #555;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 18px;
      line-height: 1.4;
    }
    div input {
      margin-top: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-radius: 2px;
    }
    div label {
      font-size: 1.1em;
    }
  }
`


const ContactForm = (props)=> {
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

  return(
    <FormWrapper>
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
    </FormWrapper>
  )
}

export default ContactForm;

