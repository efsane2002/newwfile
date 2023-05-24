import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import style from "./index.module.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
              
      <AppBar position="static" style={{position:"fixed",zIndex:"99"}}>
        <Toolbar style={{backgroundColor:"white"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div style={{display:"flex",justifyContent:"space-around", width:"60%", margin:"0 auto"}}>
            <Link to="/" element=""style={{color: 'black',fontSize:"16px",textDecoration:"none"}} >Home</Link>
            <Link to="/about" element="" style={{color: 'black',fontSize:"16px",textDecoration:"none"}}>About</Link>
            <Link to="/blog" element="" style={{color: 'black',fontSize:"16px",textDecoration:"none"}}>blog</Link>
            <Link to="/country" element=""style={{color: 'black',fontSize:"16px",textDecoration:"none"}} >Country</Link>
            <Link to="/element" element="" style={{color: 'black',fontSize:"16px",textDecoration:"none"}}>Element</Link>
            <Link to="/course" element=""style={{color: 'black',fontSize:"16px",textDecoration:"none"}} >Course</Link>
            <Link to="/immigration" element="" style={{color: 'black',fontSize:"16px",textDecoration:"none"}}>Immigration</Link>
            <Link to="/Contact" element="" style={{color: 'black',fontSize:"16px",textDecoration:"none"}}>Contact</Link>
            </div>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}