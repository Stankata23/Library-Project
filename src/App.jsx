import { useState } from 'react';
import './App.css';
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import Footer from './assets/Components/Footer/Footer';
import BookManager from './assets/Components/BookManager/BookManager';



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
