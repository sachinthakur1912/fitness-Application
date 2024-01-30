import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollBar from './HorizintalScrollBar'
import Loader from './Loader'

export default function SimilarExercise({targetMuscleExercises,equipmentExercises}) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    
   <Box sx={{mt:{lg:'100px',xs:0}}}>
    <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
    </Typography>
    <Stack direction='row' sx={{p:'2',position:'relative'}} mb={5}>
        {targetMuscleExercises.length >0? <HorizontalScrollBar data={targetMuscleExercises} />
        :<Loader/>
        }
    </Stack>  
    <Typography variant='h3' mb={5}>
        Exercise that use the same equipment
    </Typography> 
    <Stack direction='row' sx={{p:'2',position:'relative'}} >
        {equipmentExercises.length >0? <HorizontalScrollBar data={equipmentExercises}/>
        :<Loader/>
        }
    </Stack> 

   </Box>
  )
}
