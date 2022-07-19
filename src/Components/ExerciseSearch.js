import React,{useState, useEffect} from 'react'
import {Box, Stack, Button, TextField, Typography} from '@mui/material'
import { fetchData, options } from './fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const ExerciseSearch = (props) => {
const [search, setSearch] = useState('cardio')

useEffect(() => {
    const fetchExercisesData = async () => {
    const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
    props.setBodyPart(['All', ...bodyParts])
    }
    fetchExercisesData();
    console.log("r",props.bodyClick)
}, [])


const handleSearch = async () => {
    if(search)
    {
        const exericseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options)
        console.log(exericseData);
        const searched = exericseData.filter((e) => e.name.toLowerCase().includes(search) || 
        e.target.toLowerCase().includes(search)  || e.equipment.toLowerCase().includes(search) ||
        e.bodyPart.toLowerCase().includes(search))
        props.setExercises(searched)
        setSearch('')
        
    }
    else{
        console.log("exericseData")
    }

}

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p= "20px"> 
        <Typography fontWeight="700"
            sx={{fontSize: {lg: "44px" , xs: '30px'}}}
            mb="50px" textAlign="center"
        >
            Awesome Exercises you <br />
             should know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
                height="76px"
                sx={{
                    input: {fontWeight: '700',border: 'none', borderRadius:'4px'},
                    width: {lg:'800px', xs: '350px'},
                    backgroundColor: "#fff",
                    borderRadius: "40px"
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text" />
                <Button className='Search-btn' 
                    sx={{
                        backgroundColor:"#FF2625", 
                        color:"#fff",
                        textTransform:"none",
                        width:{lg:'175px', xs: '80px'},
                        fontSize:{lg:'20px', xs: '14px'},
                        height: '56px',
                        position:'absolute'
                        }}
                        onClick={handleSearch}>
                    Search
                </Button>
        </Box>
        <Box sx={{position: 'relative', width: '100%' , p: '20px'}}>
                        <HorizontalScrollbar data={props.bodyPArt} setBodyPart={props.setBodyPart} setbodyClick={props.setbodyClick} />
        </Box>
    </Stack>
  )
}

export default ExerciseSearch