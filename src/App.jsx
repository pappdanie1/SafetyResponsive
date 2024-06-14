import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import ContactUs from './pages/ContactUs'
import OccupationalSafety from './pages/OccupationalSafety'
import FireSafety from './pages/FireSafety'
import EnvironmentalProtection from './pages/EnvironmentalProtection'
import NotFound from './pages/NotFound'
import ReferencesPage from './pages/ReferencesPage'
import Footer from './components/Footer'

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/kapcsolat' element={<ContactUs/>}/>
                <Route path='/munkavedelem' element={<OccupationalSafety/>}/>
                <Route path='/tuzvedelem' element={<FireSafety/>}/>
                <Route path='/kornyezetvedelem' element={<EnvironmentalProtection/>}/>
                <Route path='/referenciak' element={<ReferencesPage/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
