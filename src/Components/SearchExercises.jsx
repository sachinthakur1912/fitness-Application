import { Box, Stack,TextField,Typography , Button} from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizintalScrollBar'

export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  useEffect(() => {
    const fetchExercisesData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all',...bodyPartsData]);
    }
  fetchExercisesData();
    
  }, [])
  
  const handleSearch= async()=>{
    if(search){
      
      const exercisesData=await fetchData
      ("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
      const searchedExercises=exercisesData.filter(
        (exercise)=>exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
        )
    //     console.log(exercisesData)
    //     console.log(searchedExercises)
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    setSearch('');
      setExercises(searchedExercises);
     }
  }
  return (
    <Stack alignItems='center' justifyContent='center' p='20px' mt='37px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}}>
      Awesome Exercises You <br/> should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input:{fontWeight:'700',border:'none',borderRadius:'4px'},
          width:{lg:'800px', xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
        }}
        height='76px'
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search for Exercises'
        type='text'
        />
        <Button className='search-btn'
        sx={{
          bgcolor:'#ff2625',
          color:'#fff',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'20px',xs:'14px'},
          height:'56px',
          position:'absolute',
          right:'0'

        }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <HorizontalScrollBar data={bodyParts}
        bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
      </Stack>
  )
}
