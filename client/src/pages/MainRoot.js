import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom"

export default function MainRoot() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}
