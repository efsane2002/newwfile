import { BASE_URL } from "./baseURL";
import axios from "axios";


//get all
export const getAllRobotics = async(name)=>{
    let Robotics;
    let URL;
    if(!name){
        URL = BASE_URL+'/new'
    }
    else(
        URL = BASE_URL + `/new/?name=${name}`
    )
    await axios.get(URL)
     .then(res=>{
        Robotics = res.data
     })

     return Robotics
}

//get by id 
export const getRoboticsByID = async(id)=>{
    let Robotic;
    await axios.get(`${BASE_URL}/new/${id}`)
    .then(res=>{
        Robotic = res.data
    })
    return Robotic
}

//get bt

//delete
export const deleteRoboticsByID = async(id)=>{
    let message;
    await axios.get(`${BASE_URL}/new/${id}`)
     .then(res=>{
        message = res.data
     })
     return message
}

//post 
export const postRobotics = (payload)=>{
    axios.post(`${BASE_URL}/new`, payload)
}
