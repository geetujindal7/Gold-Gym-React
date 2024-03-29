import React,{useState} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'


const AllExercises = ({exercises}) => {

    const [currentPage, setCurrentPage] = useState(1)

    const paginate = (e, v) => {
        setCurrentPage(v)
    } 
    const lastIndexofCurrentPage = currentPage * 9;
    const indexoffirstexer = lastIndexofCurrentPage - 9;
    const currentExercise = exercises.slice(indexoffirstexer, lastIndexofCurrentPage)

  return (
   <Box id="exercises"
   sx = {{
       mt: {lg:'110px' ,}}}
    mt= "50px"
    p="20px">
<Typography variant="h3" mb="46px">
    Showing Results
</Typography>
<Stack direction="row"
sx={{
    gap: {lg:"110px" , xs : '50px'}}}
    flexWrap="Wrap" justifyContent="center"
>
{currentExercise.map((e, index) => {
   return <ExerciseCard key={index} exercise={e}/>
})}
</Stack>
<Stack mt="100px" alignItems="center">
{exercises.length > 9 && (
    <Pagination 
        color="standard"
        shape="rounded"
        count={Math.ceil(exercises.length/9)}
        page={currentPage}
        onChange={paginate}
        size="medium"
        >
    </Pagination>
)} 

</Stack>

   </Box>
  )
}

export default AllExercises