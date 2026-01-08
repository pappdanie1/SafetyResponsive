import React from "react";
import '../css/References.css'
import teva from '/src/assets/teva.png'
import schaeffler from '/src/assets/schaeffler.png'
import vitesco from '/src/assets/vitesco.png'
import kabinet from '/src/assets/kabinet.png'
import iptech from '/src/assets/iptech.png'
import krones from '/src/assets/krones.png'
import bmw from '/src/assets/bmw.png'
import emerson from '/src/assets/emerson.png'

const References = () => {

    return (
        <div className="reference-section" >
            <h2>Referenciák</h2>
            <div className="logo-container" >
                <img className="ref-img" src={teva} alt="teva" />
                <img className="ref-img" src={schaeffler} alt="schaeffler" />
                <img className="ref-img" src={vitesco} alt="vitesco" />
                <img className="ref-img" src={kabinet} alt="kabinet" />
                <img className="ref-img" src={iptech} alt="iptech" />
                <img className="ref-img" src={krones} alt="krones" />
                <img className="ref-img" src={bmw} alt="bmw" />
                <img className="ref-img" src={emerson} alt="emerson" />
            </div>
        </div>
    )
}

export default References