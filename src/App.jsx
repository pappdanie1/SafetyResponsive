import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Contact from './pages/Contact'
import OccupationalSafety from './pages/OccupationalSafety'
import FireSafety from './pages/FireSafety'
import EnvironmentalProtection from './pages/EnvironmentalProtection'
import NotFound from './pages/NotFound'

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/kapcsolat' element={<Contact/>}/>
                <Route path='/munkavedelem' element={<OccupationalSafety/>}/>
                <Route path='/tuzvedelem' element={<FireSafety/>}/>
                <Route path='/kornyezetvedelem' element={<EnvironmentalProtection/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
