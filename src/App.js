import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ExerciseDetails from './Components/ExerciseDetails';


function App() {
  return (
    <Box width="400px" sx={{width :{xl:'1488px'}}} m= "auto">
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} /> 
       <Route path='/exercise/:id' element={<ExerciseDetails />} /> 
     </Routes>
     <Footer />
    </Box>
  );
}

export default App;
