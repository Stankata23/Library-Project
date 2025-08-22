

import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Footer from './assets/Components/Footer/Footer'
import BookManager from './assets/Components/BookManager/BookManager'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genres from './Pages/Genres'
import Horror from './Pages/Horror'
import Fantasy from './Pages/Fantasy'
import SciFi from './Pages/Sci-Fi'
import CriminalFiction from './Pages/CriminalFiction'
import Romance from './Pages/Romance'
import Authors from './Pages/Authors/Authors'

import './index.css';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route path="/sci-fi" element={<SciFi />} />
          <Route path="/criminalfiction" element={<CriminalFiction />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/bookmanager" element={<BookManager />} />
          <Route path ="authors" element={ <Authors />}/>

        </Routes>
      </Router>
      <Navbar />




      
    </>
  )
}
export default App

