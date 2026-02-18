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
            </Helmet>
            <div className="cards-cc">
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
                    <Link to="/ISO-45001-MEBIR">
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
            </div>
        </>
    );
};

export default OccupationalSafety;