import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import Map from './components/Map/Map'

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<Aboutus/>}/>
        <Route path="map" element={<Map />}/>
        
    </Routes>
        
    </>
  )
}

export default App