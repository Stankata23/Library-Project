import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genres from './Pages/Genres'
import MainPage from './Pages/MainPage'


function App() {
  

  return (
    <>
    <Router>
      <Routes>

        <Route path="/" element = {<MainPage />} />
         <Route path="/genres" element = {<Genres />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
