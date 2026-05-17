import React from "react";
import SafetyCard from "../components/SafetyCard";
import { Link } from "react-router-dom";
import munkab from '/src/assets/MunkabiztonsagiSzakertoiTevekenyseg.jpg'
import szabalyzat from '/src/assets/munkavedelmi-szabalyzat.jpg'
import ell from '/src/assets/munkavedelmi-ell.jpg'
import felul from '/src/assets/munkavedelmi-felul.jpg'
import kivizs from '/src/assets/baleset-kivizs.jpg'
import uzembeh from '/src/assets/uzembeh.jpg'
import oktatas from '/src/assets/m-oktatas.jpg'
import kockazat from '/src/assets/kockazat.jpg'
import meresek from '/src/assets/b-meresek.jpg'
import veszelyesm from '/src/assets/veszelyes-m.jpg'
import mebir from '/src/assets/mebir.jpg'
import emelogep from '/src/assets/emelogep.jpg'
import tervek from '/src/assets/m-tervek.jpg'
import epitesi from '/src/assets/epitesi-m.jpg'
import { Helmet } from "react-helmet-async";

const OccupationalSafety = () => {

    return (
        <>
            <Helmet>
                <title>Munkavédelem szakértőktől - Teljes körű munkavédelmi szolgáltatások | EHS Szolgáltatás</title>
                <meta name="description" content="30 év tapasztalattal vállalunk munkavédelmi szabályzatkészítést, ellenőrzést, kockázatértékelést, oktatást és vizsgálatokat. Biztonság, jogszabálykövetés, felelősség – kérje egyedi ajánlatát!" />
                <meta property="og:image" content={new URL(munkab, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Munkavédelmi szolgáltatások",
                        "description": "Munkavédelmi szabályzatkészítés, ellenőrzés, kockázatértékelés, oktatás és vizsgálatok – 30 év tapasztalattal.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "EHS Szolgáltatás",
                            "url": "https://ehs-szolgaltatas.com"
                        },
                        "areaServed": "HU",
                        "serviceType": "Munkavédelem",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Munkavédelmi szolgáltatások",
                            "itemListElement": [
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Munkabiztonsági Szakértői tevékenység"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Munkavédelmi Szabályzat"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Munkavédelmi ellenőrzések"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Időszakos felülvizsgálatok"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Balesetkivizsgálás"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Üzembehelyezések"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Munkavédelmi oktatás"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Munkavédelmi kockázatértékelés"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Biztonságtechnikai mérések"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Veszélyes munkák"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "ISO 45001 MEBIR"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emelőgép ügyintézés"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Munkavédelmi tervek"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Építési munkahelyek munkavédelmi feladatai"}}
                            ]
                        }
                    }
                `}</script>
            </Helmet>
            <main className="cards-cc">
                <h1 className="cards-title">Munkavédelem</h1>
                    <div className="cards-container">
                        <Link to="/munkabiztonsagi-szakertoi-tevekenyseg">
                            <SafetyCard head={"Munkabiztonsági Szakértői tevékenység"} img={munkab} />
                        </Link>
                        <Link to="/munkavedelmi-szabalyzat">
                            <SafetyCard head={"Munkavédelmi Szabályzat"} img={szabalyzat} />
                        </Link>
                        <Link to="/munkavedelmi-ellenorzesek">
                            <SafetyCard head={"Munkavédelmi ellenőrzések"} img={ell} />
                        </Link>
                        <Link to="/idoszakos-felulvizsgalatok">
                            <SafetyCard head={"Időszakos felülvizsgálatok"} img={felul} />
                        </Link>
                        <Link to="/balesetkivizsgalas">
                            <SafetyCard head={"Balesetkivizsgálás"} img={kivizs} />
                        </Link>
                        <Link to="/uzembehelyezesek">
                            <SafetyCard head={"Üzembehelyezések"} img={uzembeh} />
                        </Link>
                        <Link to="/munkavedelmi-oktatas">
                            <SafetyCard head={"Munkavédelmi oktatás"} img={oktatas} />
                        </Link>
                        <Link to="/munkavedelmi-kockazatertekeles">
                            <SafetyCard head={"Munkavédelmi kockázatértékelés"} img={kockazat} />
                        </Link>
                        <Link to="/biztonsagtechnikai-meresek">
                            <SafetyCard head={"Biztonságtechnikai mérések"} img={meresek} />
                        </Link>
                        <Link to="/veszelyes-munkak">
                            <SafetyCard head={"Veszélyes munkák"} img={veszelyesm} />
                        </Link>
                        <Link to="/iso-45001-mebir">
                            <SafetyCard head={"ISO 45001 MEBIR"} img={mebir} />
                        </Link>
                        <Link to="/emelogep-ugyintezes">
                            <SafetyCard head={"Emelőgép ügyintézés"} img={emelogep} />
                        </Link>
                        <Link to="/munkavedelmi-tervek">
                            <SafetyCard head={"Munkavédelmi tervek"} img={tervek} />
                        </Link>
                        <Link to="/epitesi-munkahelyek-munkavedelmi-feladatai">
                            <SafetyCard head={"Építési munkahelyek munkavédelmi feladatai"} img={epitesi} />
                        </Link>
                    </div>
            </main>
        </>
    );
};

export default OccupationalSafety;