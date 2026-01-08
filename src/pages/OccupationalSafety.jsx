import React from "react";
import SafetyCard from "../components/SafetyCard";
import { Link } from "react-router-dom";

const OccupationalSafety = () => {
    
    return (
        <div className="cards-cc">
            <h1 className="cards-title">Munkavédelem</h1>
            <div className="cards-container">
                <Link to="/munkabiztonsagi-szakertoi-tevekenyseg">
                    <SafetyCard head={"Munkabiztonsági Szakértői tevékenység"} img={"/src/assets/MunkabiztonsagiSzakertoiTevekenyseg.jpg"} />
                </Link>
                <Link to="/munkavedelmi-szabalyzat">
                    <SafetyCard head={"Munkavédelmi Szabályzat"} img={"/src/assets/munkavedelmi-szabalyzat.jpg"} />
                </Link>
                <Link to="/munkavedelmi-ellenorzesek">
                    <SafetyCard head={"Munkavédelmi ellenőrzések"} img={"/src/assets/munkavedelmi-ell.jpg"} />
                </Link>
                <Link to="/idoszakos-felulvizsgalatok">
                    <SafetyCard head={"Időszakos felülvizsgálatok"} img={"/src/assets/munkavedelmi-felul.jpg"} />
                </Link>
                <Link to="/balesetkivizsgalas">
                    <SafetyCard head={"Balesetkivizsgálás"} img={"/src/assets/baleset-kivizs.jpg"} />
                </Link>
                <Link to="/uzembehelyezesek">
                    <SafetyCard head={"Üzembehelyezések"} img={"/src/assets/uzembeh.jpg"} />
                </Link>
                <Link to="/munkavedelmi-oktatas">
                    <SafetyCard head={"Munkavédelmi oktatás"} img={"/src/assets/m-oktatas.jpg"} />
                </Link>
                <Link to="/munkavedelmi-kockazatertekeles">
                    <SafetyCard head={"Munkavédelmi kockázatértékelés"} img={"/src/assets/kockazat.jpg"} />
                </Link>
                <Link to="/biztonsagtechnikai-meresek">
                    <SafetyCard head={"Biztonságtechnikai mérések"} img={"/src/assets/b-meresek.jpg"} />
                </Link>
                <Link to="/veszelyes-munkak">
                    <SafetyCard head={"Veszélyes munkák"} img={"/src/assets/veszelyes-m.jpg"} />
                </Link>
                <Link to="/ISO-45001-MEBIR">
                    <SafetyCard head={"ISO 45001 MEBIR"} img={"/src/assets/mebir.jpg"} />
                </Link>
                <Link to="/emelogep-ugyintezes">
                    <SafetyCard head={"Emelőgép ügyintézés"} img={"/src/assets/emelogep.jpg"} />
                </Link>
                <Link to="/munkavedelmi-tervek">
                    <SafetyCard head={"Munkavédelmi tervek"} img={"/src/assets/m-tervek.jpg"} />
                </Link>
                <Link to="/epitesi-munkahelyek-munkavedelmi-feladatai">
                    <SafetyCard head={"Építési munkahelyek munkavédelmi feladatai"} img={"/src/assets/epitesi-m.jpg"} />
                </Link>
            </div>
        </div>
    );
};

export default OccupationalSafety;