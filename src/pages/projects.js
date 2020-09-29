import React, {useState, useEffect, useContext} from 'react'; 
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ReactPlayer from 'react-player';
 
export default ()=> { 
  return (
    <Layout>
      <h1>James Sinkler</h1>
     <div> 
       <h1>Projects</h1>
       <video style={{width:'375px', height: '669px'}} src='https://i.imgur.com/OLIbE7R.mp4' autoplay='true' /> 
     </div> 
    </Layout>
  ) 
} 
