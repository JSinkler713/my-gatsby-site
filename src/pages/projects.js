import React, {useState, useEffect, useContext} from 'react'; 
import HomeLayout from '../components/homelayout'
import { Link } from 'gatsby'
import '../phoneStyle.css'
import { useSpring } from 'react-spring'
import useIsOpen from '../hooks/use-isOpen';
 
export default ()=> { 
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(true)
  const [isOpen, toggleOpen] = useIsOpen()

  return (
   <HomeLayout isOpen={isOpen} toggleOpen={toggleOpen} style={{maxWidth: '800px'}}>
     <p>Hello</p>
     {/*
        <div className='projects'>
         <div className='project project1'>
           <div onClick={()=> setShow1(!show1)} className='phone'>
              <div className='phone--top'>
                <div className='speaker'>
                </div>
              </div>
              <div className='phone--content'>
                <video style={{width:'100%', height: '100%'}} src='https://i.imgur.com/KUHv443.mp4' autoplay='true' /> 
              </div>
              <div className='phone--bottom'>
                <div  className='circle'>
                </div>
              </div>
           </div>
           { show1?
           <div className='project-info-1'>
             <h2>Weather-Report</h2>
             <p>React Project, using an external weather API, parsing over 10,000 lines of weather data, filtered down to a human readable 5 day forecast.</p>
             <h3>Tech</h3>
             <ul>
               <li>React</li>
               <li>OpenWeatherMap API</li>
               <li>ES-6 Javascript</li>
             </ul>
           </div>
           : ''
           }
         </div>
         <div className='project project2'>
           <div onClick={()=> setShow2(!show2)} className='phone'>
              <div className='phone--top'>
                <div className='speaker'>
                </div>
              </div>
              <div className='phone--content'>
                <video style={{width:'100%', height: '100%'}} src='https://i.imgur.com/71bmeiy.mp4' autoplay='true' /> 
              </div>
              <div className='phone--bottom'>
                <div  className='circle'>
                </div>
              </div>
           </div>
           { show2?
           <div className='project-info-2'>
             <h2>MovieReels</h2>
             <p>A FullStack project, built with node, express, SQL on the backend. On the front-end using React. Created to help people remember and share the movies they love.</p>
             <h3>Tech</h3>
             <ul>
               <li>React</li>
               <li>OMDP API</li>
               <li>ES-6 Javascript</li>
               <li>SQL, using SQLite</li>
               <li>Express, Node.js</li>
             </ul>
           </div>
           : ''
           }
         </div>
        </div>
      */}

    </HomeLayout>
  ) 
} 
