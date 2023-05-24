import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { useRoboticContext } from "../Context/RoboticContext";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { deleteRoboticsByID, getAllRobotics } from "../api/request";

const Element = () => {
  const[robotics,setRobotics] = useRoboticContext();
 const navigate=useNavigate()
  useEffect(()=>{
    getAllRobotics().then(res=>{
      setRobotics(res);
    })
  },[setRobotics])
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRoboticsByID(id);
        setRobotics(robotics.filter((x)=>x._id!==id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
 
  return (
    <>
   <div style={{height:"100vh",backgroundColor:"white"}}>
    <h1 style={{width:"500px",paddingTop:"100px", margin:"0 auto"}}>Requirements to be Immigrants</h1>
    <p style={{width:"650px", margin:"10px auto",textAlign:"center"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div style={{ width: "80%", margin: "50px auto", height:"80vh"}}>
      <div style={{display:'flex',alignItems:'baseline'}}>
      <TextField onChange={(e)=>{
        getAllRobotics(e.target.value).then(res=>{
          setRobotics(res);
        })
     }} style={{marginBottom:'15px'}} id="outlined-basic" label="Search immigrants" variant="outlined" />
      </div>
      <Grid  container spacing={2}>
        {robotics && robotics.map((robotic)=>{
          return <Grid key={robotic._id} item lg={3} md={6} sm={12}>
          <Card
            hoverable
            cover={
              <img
                style={{
                  height: "300px",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt="example"
                src={robotic.imageURL}
              />
            }
          >
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
            <Typography style={{marginBottom:'7px'}}><Link to={`/new/${robotic._id}`}>{robotic.name}</Link></Typography>
            <Typography style={{marginBottom:'7px'}}>{robotic.paragraf}</Typography>
            </div>
            <Button onClick={()=>handleDelete(robotic._id)} variant="contained" color="error" style={{height:"30px"}}>Delete</Button>
          </div>
          </Card>
        </Grid>
        })}
      </Grid>
    </div>
    </div>
    </>
  );
};

export default Element;