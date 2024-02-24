import React from 'react'
import './App.css'
import { BrowserRouter , Route,Routes  } from 'react-router-dom'
import Eventhandling from './Eventhandling'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Eventhandling/>} />
      <Route path="Eventhandling" element={<Eventhandling/>} />


    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
