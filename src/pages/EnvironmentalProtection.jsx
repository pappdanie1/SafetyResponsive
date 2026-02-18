import React from "react";
import { Link } from "react-router-dom";
import SafetyCard from "../components/SafetyCard";
import numbrs from '/src/assets/14001.jpg'
import epr from '/src/assets/epr.jpg'
import kell from '/src/assets/k-ell.jpg'
import talajv from '/src/assets/talaj-v.jpg'
import veszelyes from '/src/assets/veszelyes-a.jpg'
import levego from '/src/assets/levego.jpg'
import okt from '/src/assets/k-okt.jpg'
import hulladek from '/src/assets/hulladek.jpg'
import termek from '/src/assets/k-termek.jpg'
import { Helmet } from "react-helmet-async";

const EnvironmentalProtection = () => {

    return (
        <>
            <Helmet>
                <title>Környezetvédelem - Környezetvédelmi szolgáltatások cégeknek | EHS Szolgáltatás</title>
                <meta name="description" content="Környezetvédelmi ellenőrzések, ISO14001 rendszerek, talaj- és levegővédelem, veszélyes anyagok nyilvántartása, hulladékkezelés, oktatás. Vállalatok környezettudatos működéséért – 30 év szakértelemmel!" />
                <meta property="og:image" content={new URL(talajv, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <div className="cards-cc">
                <h1 className="cards-title">Környezetvédelem</h1>
                <div className="cards-container">
                    <Link to="/ISO14001">
                        <SafetyCard head={"ISO14001 Környezetközpontú Irányítási Rendszerek"} img={numbrs} />
                    </Link>
                    <Link to="/kornyezetvedelmi-ellenorzesek">
                        <SafetyCard head={"Környezetvédelmi ellenőrzések"} img={kell} />
                    </Link>
                    <Link to="/talaj-vedelem">
                        <SafetyCard head={"Talaj védelem"} img={talajv} />
                    </Link>
                    <Link to="/veszelyes-anyagok-nyilvantartasa">
                        <SafetyCard head={"Veszélyes anyagok nyilvántartása"} img={veszelyes} />
                    </Link>
                    <Link to="/levegotisztasag-vedelem">
                        <SafetyCard head={"Levegőtisztaság védelem"} img={levego} />
                    </Link>
                    <Link to="/kornyezetvedelmi-oktatas">
                        <SafetyCard head={"Környezetvédelmi oktatás"} img={okt} />
                    </Link>
                    <Link to="/hulladekkezeles">
                        <SafetyCard head={"Hulladékkezelés"} img={hulladek} />
                    </Link>
                    <Link to="/kornyezetvedelmi-termekdij-bevallas">
                        <SafetyCard head={"Környezetvédelmi termékdíj bevallás"} img={termek} />
                    </Link>
                    <Link to="/epr-gyartoi-termekfelelossegi-dij-bevallas">
                        <SafetyCard head={"EPR gyártói termékfelelőségi díj bevallás"} img={epr} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default EnvironmentalProtection