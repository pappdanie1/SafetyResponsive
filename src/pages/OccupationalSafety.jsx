import React from "react";
import SafetyCard from "../components/SafetyCard";
import { Link } from "react-router-dom";

const OccupationalSafety = () => {
    
    return (
        <div className="cards-cc">
            <h1 className="cards-title">Munkavédelem</h1>
            <div className="cards-container">
                <Link to="/munkavedelmi-szabalyzat">
                    <SafetyCard head={"Munkavédelmi Szabályzat"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/munkavedelmi-ellenorzesek">
                    <SafetyCard head={"Munkavédelmi ellenőrzések"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/idoszakos-felulvizsgalatok">
                    <SafetyCard head={"Időszakos felülvizsgálatok"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/balesetkivizsgalas">
                    <SafetyCard head={"Balesetkivizsgálás"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/uzembehelyezesek">
                    <SafetyCard head={"Üzembehelyezések"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/munkavedelmi-oktatas">
                    <SafetyCard head={"Munkavédelmi oktatás"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/munkavedelmi-kockazatertekeles">
                    <SafetyCard head={"Munkavédelmi kockázatértékelés"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/biztonsagtechnikai-meresek">
                    <SafetyCard head={"Biztonságtechnikai mérések"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/veszelyes-munkak">
                    <SafetyCard head={"Veszélyes munkák"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/ISO-45001-MEBIR">
                    <SafetyCard head={"ISO 45001 MEBIR"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/emelogep-ugyintezes">
                    <SafetyCard head={"Emelőgép ügyintézés"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/munkavedelmi-tervek">
                    <SafetyCard head={"Munkavédelmi tervek"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/epitesi-munkahelyek-munkavedelmi-feladatai">
                    <SafetyCard head={"Építési munkahelyek munkavédelmi feladatai"} img={"/src/assets/logo.png"} />
                </Link>
            </div>
        </div>
    );
};

export default OccupationalSafety;