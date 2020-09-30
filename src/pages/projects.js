import React, {useState, useEffect, useContext} from 'react'; 
import { Link } from 'gatsby'
import Layout from '../components/layout'
 
export default ()=> { 
  return (
    <Layout>
     <div> 
       <h1>My Projects</h1>
       <video style={{width:'375px', height: '669px'}} src='https://i.imgur.com/OLIbE7R.mp4' autoplay='true' /> 
       <video style={{width:'375px', height: '669px'}} src='https://i.imgur.com/r3gJurD.mp4' autoplay='true' /> 
     </div> 
    </Layout>
  ) 
} 
