import React, {useState, useEffect, useContext} from 'react'; 
import { Link } from 'gatsby'
import ProjectLayout from '../components/ProjectLayout'
import '../phoneStyle.css'
import { useSpring } from 'react-spring'
 
export default ()=> { 
  const [show1, setShow1] = useState(false)
  
  return (
    <ProjectLayout style={{maxWidth: '800px'}}>
       <h1>My Projects</h1>
        <div className='projects'>
         <div className='project project1'>
           <div className='phone'>
              <div className='phone--top'>
                <div className='speaker'>
                </div>
              </div>
              <div className='phone--content'>
                <video style={{width:'100%', height: '100%'}} src='https://i.imgur.com/KUHv443.mp4' autoplay='true' /> 
              </div>
              <div className='phone--bottom'>
                <div onClick={()=> setShow1(!show1)} className='circle'>
                </div>
              </div>
           </div>
           { show1?
           <div className='project-info'>
             <p>React Project, using an external weather API, parsing over 10,000 lines of weather data, filtered down to a human readable 5 day forecast.</p>
           </div>
           : ''
           }
         </div>
         <video style={{width:'375px', height: '669px'}} src='https://i.imgur.com/OLIbE7R.mp4' autoplay='true' /> 
        </div>
    </ProjectLayout>
  ) 
} 
