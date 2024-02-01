import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import Signin from './Signin'

export default function MainLogin() {
    const [isAuthenticated,setAuthenticated]= useState(false)
  const handleLogin=(loginresult)=>{
    setAuthenticated(loginresult);
  }
  return (
    <div>
      <NavBar />
      <Signin />
      
    </div>
  )
}
