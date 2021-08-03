import React, {useState, useEffect} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import HomeLayout from '../components/homelayout';
import messageImg from '../components/InfoSection/svg-5.svg'; 
import GetInTouch from '../components/GetInTouch'
import styled from '@emotion/styled';
import { TwoColumnContainer, TwoColumnWrapper, Row, Column } from '../components/TwoColumn/TwoColumnElements'
import {useSpring, animated, useTransition} from 'react-spring'
import useIsOpen from '../hooks/use-isOpen';

const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 60px 0;
  text-align: center;
`
const SocialDiv = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const TopLine = styled.p`
  color: #01bf71;
  /* color:hsl(23deg 96% 54%); */
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 1.3;
  text-transform: uppercase;
  margin-bottom: 1rem;
`
const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  margin-left: -1.5px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f7f7' : '#010606')};

  @media screen and (max-width: 480px;) {
   font-size: 2rem;
  }
`
const Info = styled.p`
  max-width: 440px;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 20px 0;
  color: #fff;
  color: ${({ lightText }) => (lightText ? '#f7f7f7' : '#010606')};
`
const MyForm = styled.form`
  max-width: 440px;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 20px 0;
  color: #fff;
  color: ${({ lightText }) => (lightText ? '#f7f7f7' : '#010606')};
`
const MyTextArea = styled.textarea`
width: 100%;
`
const MyInput = styled.input`
width: 47%;
`
const Button = styled.input`
  margin-top: 4px;
  border-radius: 50px;
  background: #01BF71;
  white-space: nowrap;
  padding: 12px 30px;
  color: '#010606';
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    filter: saturate(1.5) ;
    color: white;
    background: #01BF71;
  }
`
const ImgWrap = styled.div`
text-align: center;
max-width: 400px;
height: 100%;
`

const Img = styled.img`
  margin: 0 0 10px 0;
  padding-top: 30px;
  width: 100%;
  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
  }
`


export default () => {
  const [isOpen, toggleOpen] = useIsOpen()
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState('')
  const [name, setName] = useState('')
  const [showSent, setShowSent] = useState(false)
  const [honey, setHoney] = useState(false)
  const arrayOfWhatIAm = ['Developer', 'Teacher', 'Learner', 'Tinkerer', 'Builder', 'Problem-Solver']
  const [index, setIndex] = useState(0)
  const [items, setItems] = useState(arrayOfWhatIAm)
    const pageData = useStaticQuery(graphql`
    {
      allFile(filter: {extension: { eq: "pdf"} }) {
        totalCount
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)


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
          "contact": contact,
          "name": name
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
    setName('')
    }
  }, [showSent])

  const handleChangeMessage = (e)=> {
    setMessage(e.target.value)
  }
  const handleChangeContact = (e)=> {
    setContact(e.target.value)
  }
  const handleChangeName = (e)=> {
    setName(e.target.value)
  }

  useEffect(()=> {
    if (index < arrayOfWhatIAm.length -1) {
      setTimeout(()=>setIndex(index+1), 1000)
    }
  }, [index])

  // console.log(data.allFile.edges[0])

  return (
    <>
    <HomeLayout isOpen={isOpen} toggleOpen={toggleOpen}>
      <TwoColumnContainer >
        <TwoColumnWrapper>
          <Row>
            <Column id={1}>
      <TopLine>James Sinkler</TopLine>
      <Heading>Hey I'm James!</Heading>
      <div>
        <Info>I build full-stack applications with React, node.js and SQL/NoSQL backends. I enjoy problem solving and seeing projects come to life.</Info><Info>I've studied coding through my degree in Mathematics, then on my own, and most recently at General Assembly's Software Engineering Immersive.</Info><Info>I went on to teach at General Assembly shortly after graduating, combining my experience as an educator with my skills in javascript, React, node, python, and more.</Info><Info>I enjoy improving my skills and continuing to learn from others. </Info>
      </div>
            </Column>
            <Column id={2}>
              <Info>There are a lot of tutorials, and lessons that I have benefited from as I've learned, and I want to contribute back to the dev community with my own knowledge.</Info>
              <Info>If you are interested in having me join your team feel free to check out my  <a href={pageData.allFile.edges[0].node.publicURL}>resume
              </a>. If you want to get in touch about a potential project or a js topic you are interested in, you can use the form below. It was built using <a href='https://www.netlify.com/products/forms/'>netlify's</a> forms.</Info>
            </Column>
          </Row>
          <Row>
            <Column>
        <TopLine>Leave me a message 👋</TopLine>
        <form className='contact-form' data-netlify="true" name="myForm" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="myForm"/>
          <input type="hidden" name="honey"  onChange={()=>setHoney(true)} />
          <div style={{marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <MyInput required data-error='Please add a name' name="name" type="text" value={name} placeholder="Name" onChange={handleChangeName}/>
          <MyInput required name="contact" type="email" value={contact} placeholder="Email" onChange={handleChangeContact}/>
          </div>
          <MyTextArea required rows="10" cols="33" name="message" type="text" placeholder="Your Message" value={message} onChange={handleChangeMessage} />
        
          <Button type="submit" value="Send Message"/>{SentSpan}
        </form>
            </Column>
            <Column>
            <Info>I plan to cover things ranging from Hash Maps in Coding challenges, to React Hooks and how to implement the useContext() hook. Some things I will have more expertise in, and others I will be sharing my own new learning.</Info>
            </Column>
          </Row>
        </TwoColumnWrapper>
        <TwoColumnWrapper style={{ background: '#010606'}} vh={'300px'}>
          <Row>
            <Column>
              <TextWrapper>
                <Heading lightText={true}>Get In Touch</Heading>
                <GetInTouch />
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrap>
                <Img src={messageImg}/>
                </ImgWrap>
            </Column>
          </Row>
      </TwoColumnWrapper>
      </TwoColumnContainer>
    </HomeLayout>
    </>
  )
}

