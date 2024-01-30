import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
import { useState } from 'react'


export default function Home() {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([])
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises}
      bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises exercises={exercises}
      bodyPart={bodyPart} setExercises={setExercises}/>
    </Box>
  )
}
