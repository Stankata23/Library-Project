
import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genres from './Pages/Genres'

import Horror from './Pages/Horror'

import ThemeToggle from './DarkTheme/ThemeToggle'
import './index.css';



function App() {


  return (
    <>
      
  
      <ThemeToggle />
      
      
      <Router>
        <Routes>
          <Route path="/" element={<Hero/>} />
           <Route path="/genres" element={<Genres />} />
           <Route path="/horror" element={<Horror />} />
         </Routes>       
       </Router>
       <Navbar/>

    </>
  )
}

export default App

