import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
