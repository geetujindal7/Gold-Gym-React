import React,{useState, useEffect} from 'react'
import {Box} from '@mui/material'
import HeroBanner from './HeroBanner'
import ExerciseSearch from './ExerciseSearch'
import { fetchData, options } from './fetchData'
import AllExercises from './AllExercises'


function Home() {

   
 const [exercises, setExercises] = useState([])
 const [bodyPArt, setBodyPart] = useState(['All'])
 const [bodyClick, setBodyClick] = useState('')




 useEffect(() => {
    const exericseData = async () => 
    {
        const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options)
        setExercises(data)
    } 
    exericseData();
 }, [])

  return (<>
      <HeroBanner />
      <ExerciseSearch setExercises={setExercises} setBodyPart={setBodyPart} bodyPArt ={bodyPArt} bodyClick={bodyClick} setBodyClick={setBodyClick}/>
      <AllExercises  setExercises={setExercises} setBodyPart={setBodyPart} exercises ={exercises}/>
  </>
    
  )
}

export default Home