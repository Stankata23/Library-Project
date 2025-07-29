// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Genres from './Pages/Genres'
// import MainPage from './Pages/MainPage'
// import Horror from './Pages/Horror'

// import "@radix-ui/themes/styles.css";

// import ThemeProvider from './RadixUI/ThemeProvider'
// import ThemeToggleButton from './RadixUI/ThemeToggleBitton'

// function App() {
//   return (
//   <>
    
//       <ThemeProvider>
       
//       <Router>
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/genres" element={<Genres />} />
//           <Route path="/horror" element={<Horror />} />
//         </Routes>
//         <div class = "fixed-top-right">
//       <ThemeToggleButton />
//       </div>
//       </Router>
// </ThemeProvider>

//     </>
//   )
// }

// export default App


import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genres from './Pages/Genres'
import MainPage from './Pages/MainPage'
import Horror from './Pages/Horror'

import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"

import ThemeProvider, { ThemeContext } from './RadixUI/ThemeProvider'
import ThemeToggleButton from './RadixUI/ThemeToggleBitton'
import { useContext } from 'react'

// This inner component has access to the theme context
function AppContent() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
   
      <Router>
      
          <Theme appearance={theme} >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/horror" element={<Horror />} />
        </Routes>
         <div class ="fixed-top-right">
        <ThemeToggleButton />
      </div>
      </Theme>
      </Router>
   
    
    </>
  )
}

// Main app just provides context
export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}