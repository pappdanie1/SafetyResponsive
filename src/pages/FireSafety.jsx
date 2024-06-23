import React from "react";
import SafetyCard from "../components/SafetyCard";
import { Link } from "react-router-dom";

const FireSafety = () => {

    return (
        <div className="cards-cc" >
            <h1 className="cards-title">Tűzvédelem</h1>
            <div className="cards-container">
                <Link to="/tuzvedelmi-szabalyzat">
                    <SafetyCard head={"Tűzvédelmi szabályzat"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/tuzvedelmi-ellenorzesek">
                    <SafetyCard head={"Tűzvédelmi ellenőrzések"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/idoszakos-felulvizsgalatok-tuzvedelem">
                    <SafetyCard head={"Időszakos felülvizsgálatok"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/tuzvedelmi-oktatas">
                    <SafetyCard head={"Tűzvédelmi oktatás"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/katasztrofavedelem">
                    <SafetyCard head={"Katasztrófavédelem"} img={"/src/assets/logo.png"} />
                </Link>
                <Link to="/tuzveszelyes-tevelenyseg">
                    <SafetyCard head={"Tűzveszélyes tevékenység"} img={"/src/assets/logo.png"} />
                </Link>
            </div>
        </div>
    );
}

export default FireSafety