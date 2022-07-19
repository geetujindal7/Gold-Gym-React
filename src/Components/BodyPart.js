import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import '../App.css';


const BodyPart = ({ e, item, data, setBodyPart, setBodyClick }, props) => {

   
    return (
        <Stack
       key={item} type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: e === data[item] ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                props.setbodyClick(e);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
            <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />
            <Typography 
            fontSize="24px"
             fontWeight="bold"
             color="#3A1212"
             textTransform="capitalize">{e}</Typography>
        </Stack>

    )
}

export default BodyPart