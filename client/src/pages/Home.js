import React from 'react'
import style from "./index.module.css"
import Element from './Element'
import Course from './Course'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className={style.div1}>
           <Helmet>
        <title>home page</title>
    </Helmet>
        <div style={{display:"flex", position:"absolute",top:"300px",left:'200px',color:"white"}}><p>PROCESS WISA WITHOUT WITHIN HOURS</p></div>
        <h1 style={{color:"white",fontSize:"70px",position:"absolute", left:"200px",top:"330px"}}>immigrations &<br></br> Visa Consultations</h1>
        <div className={style.div}></div>
        <button style={{position:"absolute",bottom:"400px",left:"200px",height:"35px",width:"170px",border:'none'}}>Book Consultancy</button>
 <Element></Element>
 <Course></Course>
 <Blog></Blog>
 <Contact></Contact>
 </div>
  )
}
