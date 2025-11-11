import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home1 from './Home/Home1'
import Coursee from './Home/Coursee'
import Login from './Component/Login'
import Register from './Component/Register'

export default function App() {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home1/>}/>
      <Route path ="/Course" element={<Coursee/>}/>
      <Route path ='/Login' element={<Login/>}/>
      <Route path ='/Register' element={<Register/>}/>
    </Routes>

    </div>
  )
}
