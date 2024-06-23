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
import MunkavedelmiKockazatertekeles from './pages/MunkavedelmiKockazatertekeles'
import BiztonsagtechnikaiMeresek from './pages/BiztonsagtechnikaiMeresek'
import VeszelyesMunkak from './pages/VeszelyesMunkak'
import ISO45001MEBIR from './pages/ISO45001MEBIR'
import EmelogepUgyintezes from './pages/EmelogepUgyintezes'
import MunkavedelmiTervek from './pages/MunkavedelmiTervek'
import EpitesiMunkahelyek from './pages/EpitesiMunkahelyek'
import TuzvedelmiSzabalyzat from './pages/TuzvedelmiSzabalyzat'
import TuzvedelmiEllenorzesek from './pages/TuzvedelmiEllenorzesek'
import IdoszakosFelulvizsgalatokT from './pages/IdoszakosFelulvizsgalatokT'
import TuzvedelmiOktatas from './pages/TuzvedelmiOktatas'
import Katasztrofavedelem from './pages/Katasztrofavedelem'
import TuzveszelyesTevekenyseg from './pages/TuzveszelyesTevekenyseg'

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
                <Route path='/munkavedelmi-kockazatertekeles' element={<MunkavedelmiKockazatertekeles/>} />
                <Route path='/biztonsagtechnikai-meresek' element={<BiztonsagtechnikaiMeresek/>} />
                <Route path='/veszelyes-munkak' element={<VeszelyesMunkak/>} />
                <Route path='/ISO-45001-MEBIR' element={<ISO45001MEBIR/>} />
                <Route path='/emelogep-ugyintezes' element={<EmelogepUgyintezes/>} />
                <Route path='/munkavedelmi-tervek' element={<MunkavedelmiTervek/>} />
                <Route path='/epitesi-munkahelyek-munkavedelmi-feladatai' element={<EpitesiMunkahelyek/>} />
                <Route path='/tuzvedelmi-szabalyzat' element={<TuzvedelmiSzabalyzat/>} />
                <Route path='/tuzvedelmi-ellenorzesek' element={<TuzvedelmiEllenorzesek/>} />
                <Route path='/idoszakos-felulvizsgalatok-tuzvedelem' element={<IdoszakosFelulvizsgalatokT/>} />
                <Route path='/tuzvedelmi-oktatas' element={<TuzvedelmiOktatas/>} />
                <Route path='/katasztrofavedelem' element={<Katasztrofavedelem/>} />
                <Route path='/tuzveszelyes-tevelenyseg' element={<TuzveszelyesTevekenyseg/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
