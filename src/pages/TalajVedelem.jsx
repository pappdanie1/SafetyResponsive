import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import talaj from '/src/assets/talaj-v.jpg'
import { Helmet } from "react-helmet-async";

const TalajVedelem = () => {

    return (
        <>
            <Helmet>
                <title>Talajvédelem - EHS Szolgáltatás</title>
                <meta name="description" content="Talajvízfigyelő monitoring kút ellenőrzése: kút állapotának vizsgálata, mintavétel, laboratóriumi elemzés, jelentés készítése." />
                <meta property="og:image" content={new URL(talaj, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={talaj}
                            alt="Talaj védelem"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Talaj védelem</h2>
                        <p className="subsection-content">
                            A talajvízfigyelő monitoring kút ellenőrzésének célja a talajvíz minőségének és szintjének rendszeres nyomon követése, hogy az esetleges szennyezéseket és változásokat időben felismerjük és kezeljük.
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
                            Ezek az intézkedések biztosítják, hogy a talajvíz minősége megfelelő legyen és időben felismerjük a környezeti veszélyeket, így elősegítve a környezetvédelem hatékonyságát és fenntarthatóságát.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TalajVedelem;