import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Stack, Button, Typography} from '@mui/material'
import { fetchData, options } from './fetchData'
import bodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipImage from '../assets/icons/equipment.png'



const ExerciseDetails = () => {
    const {id} = useParams();
    const [details, setdetails] = useState({})

useEffect(() => {
    const exericseData = async () => 
    {
        const details = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, options);  
        setdetails(details)     
        } 
    exericseData();
}, [id])

const {bodyPart, gifUrl, name, target, equipment} = details;
const ed = [{
    icon: bodyPartImage,
    name: bodyPart
},
{
    icon: TargetImage,
    name: target
},
{
    icon: EquipImage,
    name: equipment
},
]
  return (
      
   <Box>
    <Stack gap="60px" sx={{
        flexDirection:{lg:'row'},
        p:'20px',
        alignItems:'center'
    }}>
    <img src={gifUrl} alt={name}  loading="lazy" className='detail-image'/>
    <Stack  sx={{
        gap:{lg:'35px', xs: '20px'},
    }}>
    
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h6'>
            Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
            </Typography>
        {
            ed.map((e) => (
                <Stack key={e.name} direction="row" gap="24px" alignItems="center">
                    <Button sx={{
                        background: '#fff2db',
                        borderRadius: '50%',
                        width:'100px',
                        height:'100px'
                    }}>
                        <img src={e.icon} alt={bodyPart}  style={{width:'50px', height:'50px'}}/>
                    </Button>
                    <Typography textTransform="capitalize" variant='h5'>
                        {e.name}
                    </Typography>
                </Stack>
            ))
        }
    </Stack>
    </Stack>
   </Box>
  )
}

export default ExerciseDetails