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
import MunkavedelmiSzabalyzat from './pages/MunkavedelmiSzabalyzat'
import MunkavedelmiEllenorzesek from './pages/MunkavedelmiEllenorzesek'
import IdoszakosFelulvizsgalatok from './pages/IdoszakosFelulvizsgalatok'
import Balesetkivizsgalas from './pages/Balesetkivizsgalas'
import Uzembehelyezesek from './pages/Uzembehelyezesek'
import MunkavedelmiOktatas from './pages/MunkavedelmiOktatas'

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
                <Route path='/munkavedelmi-szabalyzat' element={<MunkavedelmiSzabalyzat/>} />
                <Route path='/munkavedelmi-ellenorzesek' element={<MunkavedelmiEllenorzesek/>} />
                <Route path='/idoszakos-felulvizsgalatok' element={<IdoszakosFelulvizsgalatok/>} />
                <Route path='/balesetkivizsgalas' element={<Balesetkivizsgalas/>} />
                <Route path='/uzembehelyezesek' element={<Uzembehelyezesek/>} />
                <Route path='/munkavedelmi-oktatas' element={<MunkavedelmiOktatas/>} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
