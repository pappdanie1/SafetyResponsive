import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const KornyezetvedelmiEll = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/k-ell.jpg"}
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
                            <li><IoCheckmarkCircle className="check-icon" />Erőforrás-gazdálkodás (energia- és vízfelhasználás hatékonyságát)</li>
                            <li><IoCheckmarkCircle className="check-icon" />Szennyezésmegelőzés és kockázatkezelés</li>
                            <li><IoCheckmarkCircle className="check-icon" />Dokumentáció és nyilvántartások</li>
                        </ul>
                        <p className="subsection-content">
                            A környezetvédelmi ellenőrzések eredményei alapján javaslatokat teszünk a szükséges fejlesztésekre és intézkedésekre, hogy a szervezetek környezetvédelmi teljesítményét javítsák és hozzájáruljanak a fenntarthatósághoz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KornyezetvedelmiEll;