import React, { useEffect, useState } from 'react'
import {exerciseOptions, fetchData,youtubeOptions} from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercise from '../Components/SimilarExercise'
import { useParams } from 'react-router-dom'

export default function ExerciseDetail() {
  const [exerciseDetail,setExerciseDetail]=
  useState({});
  const [exerciseVideos,setExerciseVideos]=useState([]);
  const[targetMuscleExercises,setTargetMuscleExercises]=useState([]);
  const[equipmentExercises,setEquipmentExercises]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';

     
        const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExerciseData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);
      const equipmentExerciseData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setEquipmentExercises(equipmentExerciseData);
     
    }
    fetchExerciseData();
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}
