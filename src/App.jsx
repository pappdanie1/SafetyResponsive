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
import ISO14001 from './pages/ISO14001'
import KornyezetvedelmiEll from './pages/KornyezetvedelmiEll'
import TalajVedelem from './pages/TalajVedelem'
import VeszelyesAnyagok from './pages/VeszelyesAnyagok'
import Levegotisztasag from './pages/Levegotisztasag'
import KornyezetvedelmiOktatas from './pages/KornyezetvedelmiOktatas'
import Hulladekkezeles from './pages/Hulladekkezeles'
import Bevallas from './pages/Bevallas'
import EPRBevallas from './pages/EPRBevallas'
import ScrollToTop from  './components/ScrollToTop';
import Energiahatekonysag from './pages/Energiahatekonysag'
import MunkabiztonsagiSzakertoiTevekenyseg from './pages/MunkabiztonsagiSzakertoiTevekenyseg'
import ThankYou from './pages/ThankYou'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
    return (
        <div className='overall' >
            <BrowserRouter>
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/kapcsolat' element={<ContactUs />} />
                    <Route path='/munkavedelem' element={<OccupationalSafety />} />
                    <Route path='/tuzvedelem' element={<FireSafety />} />
                    <Route path='/kornyezetvedelem' element={<EnvironmentalProtection />} />
                    <Route path='/referenciak' element={<ReferencesPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/munkavedelmi-szabalyzat' element={<MunkavedelmiSzabalyzat />} />
                    <Route path='/munkavedelmi-ellenorzesek' element={<MunkavedelmiEllenorzesek />} />
                    <Route path='/idoszakos-felulvizsgalatok' element={<IdoszakosFelulvizsgalatok />} />
                    <Route path='/balesetkivizsgalas' element={<Balesetkivizsgalas />} />
                    <Route path='/uzembehelyezesek' element={<Uzembehelyezesek />} />
                    <Route path='/munkavedelmi-oktatas' element={<MunkavedelmiOktatas />} />
                    <Route path='/munkavedelmi-kockazatertekeles' element={<MunkavedelmiKockazatertekeles />} />
                    <Route path='/biztonsagtechnikai-meresek' element={<BiztonsagtechnikaiMeresek />} />
                    <Route path='/veszelyes-munkak' element={<VeszelyesMunkak />} />
                    <Route path='/ISO-45001-MEBIR' element={<ISO45001MEBIR />} />
                    <Route path='/emelogep-ugyintezes' element={<EmelogepUgyintezes />} />
                    <Route path='/munkavedelmi-tervek' element={<MunkavedelmiTervek />} />
                    <Route path='/epitesi-munkahelyek-munkavedelmi-feladatai' element={<EpitesiMunkahelyek />} />
                    <Route path='/tuzvedelmi-szabalyzat' element={<TuzvedelmiSzabalyzat />} />
                    <Route path='/tuzvedelmi-ellenorzesek' element={<TuzvedelmiEllenorzesek />} />
                    <Route path='/idoszakos-felulvizsgalatok-tuzvedelem' element={<IdoszakosFelulvizsgalatokT />} />
                    <Route path='/tuzvedelmi-oktatas' element={<TuzvedelmiOktatas />} />
                    <Route path='/katasztrofavedelem' element={<Katasztrofavedelem />} />
                    <Route path='/tuzveszelyes-tevelenyseg' element={<TuzveszelyesTevekenyseg />} />
                    <Route path='/ISO14001' element={<ISO14001 />} />
                    <Route path='/kornyezetvedelmi-ellenorzesek' element={<KornyezetvedelmiEll />} />
                    <Route path='/talaj-vedelem' element={<TalajVedelem />} />
                    <Route path='/veszelyes-anyagok-nyilvantartasa' element={<VeszelyesAnyagok />} />
                    <Route path='/levegotisztasag-vedelem' element={<Levegotisztasag />} />
                    <Route path='/kornyezetvedelmi-oktatas' element={<KornyezetvedelmiOktatas />} />
                    <Route path='/hulladekkezeles' element={<Hulladekkezeles />} />
                    <Route path='/kornyezetvedelmi-termekdij-bevallas' element={<Bevallas />} />
                    <Route path='/epr-gyartoi-termekfelelossegi-dij-bevallas' element={<EPRBevallas />} />
                    <Route path='/energiahatekonysag' element={<Energiahatekonysag />} />
                    <Route path='/munkabiztonsagi-szakertoi-tevekenyseg' element={<MunkabiztonsagiSzakertoiTevekenyseg />} />
                    <Route path='/koszonjuk' element={<ThankYou />} />
                    <Route path="/adatvedelmi-tajekoztato" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
