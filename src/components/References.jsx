import React from "react";
import '../css/References.css'

const References = () => {

    return (
        <div className="reference-section" >
            <h2>Referenciák</h2>
            <div className="logo-container" >
                <img className="ref-img" src="/src/assets/teva.png" alt="teva" />
                <img className="ref-img" src="/src/assets/schaeffler.png" alt="schaeffler" />
                <img className="ref-img" src="/src/assets/vitesco.png" alt="vitesco" />
                <img className="ref-img" src="/src/assets/kabinet.png" alt="kabinet" />
                <img className="ref-img" src="/src/assets/iptech.png" alt="iptech" />
            </div>
        </div>
    )
}

export default References