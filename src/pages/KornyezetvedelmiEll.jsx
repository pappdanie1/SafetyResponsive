import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ell from '/src/assets/k-ell.jpg'
import { Helmet } from "react-helmet-async";

const KornyezetvedelmiEll = () => {

    return (
        <>
            <Helmet>
                <title>Környezetvédelmi ellenőrzések - EHS Szolgáltatás</title>
                <meta name="description" content="Környezetvédelmi ellenőrzések elvégzése: jogszabályok betartása, környezeti hatások felmérése, hulladékgazdálkodás, erőforrás-gazdálkodás, szennyezésmegelőzés." />
                <meta property="og:image" content={new URL(ell, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={ell}
                            alt="Környezetvédelmi ellenőrzések"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Környezetvédelmi ellenőrzések</h2>
                        <p className="subsection-content">
                            A környezetvédelmi ellenőrzések olyan folyamatok, amelyek célja a szervezetek környezetvédelmi előírásoknak való megfelelésének biztosítása és a környezeti hatások minimalizálása. 
                        </p>
                        <p className="subsection-content">
                            Az ellenőrzések az alábbiakra terjednek ki:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Környezetvédelmi szabályozások betartása</li>
                            <li><IoCheckmarkCircle className="check-icon" />Környezeti hatások felmérése</li>
                            <li><IoCheckmarkCircle className="check-icon" />Hulladékgazdálkodás</li>
                            <li><IoCheckmarkCircle className="check-icon" />Erőforrás-gazdálkodás (energia- és vízfelhasználás hatékonysága)</li>
                            <li><IoCheckmarkCircle className="check-icon" />Szennyezésmegelőzés és kockázatkezelés</li>
                            <li><IoCheckmarkCircle className="check-icon" />Dokumentációk és nyilvántartások</li>
                        </ul>
                        <p className="subsection-content">
                            A környezetvédelmi ellenőrzések eredményei alapján javaslatokat teszünk a szükséges fejlesztésekre és intézkedésekre, hogy a szervezetek környezetvédelmi teljesítményét javítsuk és hozzájáruljunk a fenntarthatósághoz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default KornyezetvedelmiEll;