import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import numbers from '/src/assets/14001.jpg'


const ISO14001 = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={numbers}
                            alt="ISO 14001 Környezetközpontú Irányítási Rendszerek"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>ISO14001 Környezetközpontú Irányítási Rendszerek</h2>
                        <p className="subsection-content">
                            Az ISO 14001 szabvány egy nemzetközi szabvány, amely a környezetközpontú irányítási rendszerek (KIR) követelményeit határozza meg. Célja, hogy a szervezetek hatékonyan kezeljék környezeti felelősségeiket, csökkentsék környezeti hatásaikat és megfeleljenek a vonatkozó jogszabályoknak, előírásoknak. Az ISO 14001 szabvány alkalmazása segíti a szervezeteket abban, hogy környezetvédelmi teljesítményüket folyamatosan javítsák, csökkentsék a környezeti kockázatokat és elősegítsék a fenntartható fejlődést.
                        </p>
                        <p className="subsection-content">
                            Támogatásaink a KIR alkalmazásával kapcsolatban:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Rendszer kezelése, dokumentálása</li>
                            <li><IoCheckmarkCircle className="check-icon" />Auditok bonyolítása</li>
                            <li><IoCheckmarkCircle className="check-icon" />Vezetőségi átvizsgálás</li>
                            <li><IoCheckmarkCircle className="check-icon" />Jogszabály regiszter</li>
                            <li><IoCheckmarkCircle className="check-icon" />Érdekelt felek elvárásai, stb.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ISO14001;