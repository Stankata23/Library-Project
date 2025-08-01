<<<<<<< HEAD

import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genres from './Pages/Genres'

import Horror from './Pages/Horror'

import ThemeToggle from './DarkTheme/ThemeToggle'
import './index.css';
=======
import './App.css'
>>>>>>> 44122c5f4a3664771828f7970fb0b6058af0a213



function App() {
  const [count, setCount] = useState(0)

<<<<<<< HEAD

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

=======
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ГОЛЯМ ХУЙ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 44122c5f4a3664771828f7970fb0b6058af0a213
    </>
  )
}

export default App

