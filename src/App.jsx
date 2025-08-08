import { Flex, Text, Button } from "@radix-ui/themes"
import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Footer from './assets/Components/Footer/Footer'
import BookManager from './assets/Components/BookManager/BookManager'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genres from './Pages/Genres'
import Horror from './Pages/Horror'
import './index.css'
import './App.css'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/bookmanager" element={<BookManager />} />

        </Routes>
      </Router>
      <Navbar />
    </>
  )
}
export default App

