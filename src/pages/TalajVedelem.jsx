import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const TalajVedelem = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/talaj-v.jpg"}
                            alt="Talaj védelem"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Talaj védelem</h2>
                        <p className="subsection-content">
                            A talajvízfigyelő monitoring kút ellenőrzésének célja a talajvíz minőségének és szintjének rendszeres nyomon követése, hogy az esetleges szennyezéseket és változásokat időben felismerjék és kezeljék.
                        </p>
                        <p className="subsection-content">
                            Az ellenőrzés során a következő lépésekre kerül sor:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Kút állapotának vizsgálata</li>
                            <li><IoCheckmarkCircle className="check-icon" />Mintavétel</li>
                            <li><IoCheckmarkCircle className="check-icon" />Laboratóriumi elemzés</li>
                            <li><IoCheckmarkCircle className="check-icon" />Adatok értékelése</li>
                            <li><IoCheckmarkCircle className="check-icon" />Jelentés készítése</li>
                            <li><IoCheckmarkCircle className="check-icon" />Következtetések és javaslatok</li>
                        </ul>
                        <p className="subsection-content">
                            Ezek az intézkedések biztosítják, hogy a talajvíz minősége megfelelő legyen és időben felismerjék a környezeti veszélyeket, így elősegítve a környezetvédelem hatékonyságát és fenntarthatóságát.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TalajVedelem;