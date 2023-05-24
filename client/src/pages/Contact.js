import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <div style={{backgroundColor:"white"}} >
           <Helmet>
        <title>contact page</title>
    </Helmet>
        <div style={{backgroundColor:"white",height:"40px",margin:"0 auto",width:"800px",display:"flex",justifyContent:"space-around"}}>
            <h4>Copyright ©2023 All rights reserved | This template is made with <FavoriteIcon style={{backgroundColor:"white"}}/> by <span style={{color:"red"}}>Colorlib</span></h4>
            <div>
               <span><FacebookIcon></FacebookIcon><TwitterIcon></TwitterIcon></span>
            </div>
        </div>
    </div>
  )
}
