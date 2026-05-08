import React from "react";
import SafetyCard from "../components/SafetyCard";
import { Link } from "react-router-dom";
import szab from '/src/assets/t-szab.jpg'
import ell from '/src/assets/t-ell.png'
import ido from '/src/assets/ido-f.jpg'
import okt from '/src/assets/t-okt.jpg'
import kataszt from '/src/assets/kataszt.jpg'
import tuzveszelyes from '/src/assets/tuzveszelyes.jpg'
import { Helmet } from "react-helmet-async";

const FireSafety = () => {

    return (
        <>
            <Helmet>
                <title>Tűzvédelem - Teljes körű tűzvédelmi szolgáltatások cégeknek | EHS Szolgáltatás</title>
                <meta name="description" content="Tűzvédelmi szabályzat, ellenőrzés, oktatás, időszakos felülvizsgálat, katasztrófavédelem, tűzveszélyes tevékenységek kezelése – 30 év tapasztalat. Gondoskodunk cége biztonságáról!" />
                <meta property="og:image" content={new URL(ido, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Tűzvédelmi szolgáltatások",
                        "description": "Tűzvédelmi szabályzat, ellenőrzés, oktatás, időszakos felülvizsgálat, katasztrófavédelem és tűzveszélyes tevékenységek kezelése.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "EHS Szolgáltatás",
                            "url": "https://ehs-szolgaltatas.com"
                        },
                        "areaServed": "HU",
                        "serviceType": "Tűzvédelem",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Tűzvédelmi szolgáltatások",
                            "itemListElement": [
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tűzvédelmi szabályzat"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tűzvédelmi ellenőrzések"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Időszakos felülvizsgálatok"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tűzvédelmi oktatás"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Katasztrófavédelem"}}
                            ]
                        }
                    }
                `}</script>
            </Helmet>
            <main className="cards-cc">
                <h1 className="cards-title">Tűzvédelem</h1>
                    <div className="cards-container">
                        <Link to="/tuzvedelmi-szabalyzat">
                            <SafetyCard head={"Tűzvédelmi szabályzat"} img={szab} />
                        </Link>
                        <Link to="/tuzvedelmi-ellenorzesek">
                            <SafetyCard head={"Tűzvédelmi ellenőrzések"} img={ell} />
                        </Link>
                        <Link to="/idoszakos-felulvizsgalatok-tuzvedelem">
                            <SafetyCard head={"Időszakos felülvizsgálatok"} img={ido} />
                        </Link>
                        <Link to="/tuzvedelmi-oktatas">
                            <SafetyCard head={"Tűzvédelmi oktatás"} img={okt} />
                        </Link>
                        <Link to="/katasztrofavedelem">
                            <SafetyCard head={"Katasztrófavédelem"} img={kataszt} />
                        </Link>
                        <Link to="/tuzveszelyes-tevelenyseg">
                            <SafetyCard head={"Tűzveszélyes tevékenység"} img={tuzveszelyes} />
                        </Link>
                    </div>
            </main>
        </>
    );
}

export default FireSafety;