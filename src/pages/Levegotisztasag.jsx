import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const Levegotisztasag = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/levego.jpg"}
                            alt="Levegőtisztaság védelem"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Levegőtisztaság védelem</h2>
                        <p className="subsection-content">
                            A levegőtisztasági védelem célja a légszennyezés csökkentése és a levegő minőségének javítása. Ez különösen fontos az emberi egészség védelme, az ökoszisztémák megőrzése, és a klímaváltozás hatásainak mérséklése érdekében.
                        </p>
                        <p className="subsection-content">
                            A levegőtisztasági védelemmel kapcsolatban a jogszabályi követelmények teljesítése érdekében a következő szoláltatásokat biztosítjuk:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Pontforrások engedélyeztetése</li>
                            <li><IoCheckmarkCircle className="check-icon" />Légszennyező pontforrás kibocsátások mérése</li>
                            <li><IoCheckmarkCircle className="check-icon" />Éves bevallás elkészítése és beküldése a hatóság felé</li>
                            <li><IoCheckmarkCircle className="check-icon" />Levegőterhelési díj analitika</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Levegotisztasag;