import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
export default function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='autos'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}
