import React from "react";
import { Link } from "react-router-dom";
import SafetyCard from "../components/SafetyCard";

const EnvironmentalProtection = () => {

    return (
        
        <div className="cards-cc">
            <h1 className="cards-title">Környezetvédelem</h1>
            <div className="cards-container">
                <Link to="/ISO14001">
                    <SafetyCard head={"ISO14001 Környezetközpontú Irányítási Rendszerek"} img={"/src/assets/14001.jpg"} />
                </Link>
                <Link to="/kornyezetvedelmi-ellenorzesek">
                    <SafetyCard head={"Környezetvédelmi ellenőrzések"} img={"/src/assets/k-ell.jpg"} />
                </Link>
                <Link to="/talaj-vedelem">
                    <SafetyCard head={"Talaj védelem"} img={"/src/assets/talaj-v.jpg"} />
                </Link>
                <Link to="/veszelyes-anyagok-nyilvantartasa">
                    <SafetyCard head={"Veszélyes anyagok nyilvántartása"} img={"/src/assets/veszelyes-a.jpg"} />
                </Link>
                <Link to="/levegotisztasag-vedelem">
                    <SafetyCard head={"Levegőtisztaság védelem"} img={"/src/assets/levego.jpg"} />
                </Link>
                <Link to="/kornyezetvedelmi-oktatas">
                    <SafetyCard head={"Környezetvédelmi oktatás"} img={"/src/assets/k-okt.jpg"} />
                </Link>
                <Link to="/hulladekkezeles">
                    <SafetyCard head={"Hulladékkezelés"} img={"/src/assets/hulladek.jpg"} />
                </Link>
                <Link to="/kornyezetvedelmi-termekdij-bevallas">
                    <SafetyCard head={"Környezetvédelmi termékdíj bevallás"} img={"/src/assets/k-termek.jpg"} />
                </Link>
                <Link to="/epr-gyartoi-termekfelelossegi-dij-bevallas">
                    <SafetyCard head={"EPR gyártói termékfelelőségi díj bevallás"} img={"/src/assets/epr.jpg"} />
                </Link>
            </div>
        </div>
    );
}

export default EnvironmentalProtection