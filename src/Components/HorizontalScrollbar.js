import React from 'react'
import {Box} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'



const HorizontalScrollbar = ({data}, props) => {
  return (
    <ScrollMenu>
    {
        data.map((e, key) => 
       
        <Box key = {key} m="0 40px">
        <BodyPart item={key} e={e} data={data} setBodyPart={props.setBodyPart}  setbodyClick={props.setbodyClick}/>
        </Box>
        )
    }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar