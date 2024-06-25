import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const VeszelyesMunkak = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={"/src/assets/veszelyes-m.jpg"}
                                alt="Veszélyes munkák"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Veszélyes munkák</h1>
                            <p className="subsection-content">
                                A veszélyes munkák engedélyezése egy szabályozott
                                folyamat, amely során biztosítjuk, hogy a munkavégzés
                                megfeleljen a biztonsági előírásoknak és minimalizálja a
                                kockázatokat. Ez a folyamat magában foglalja a
                                munkavégzés kockázatainak előzetes felmérését, a szükséges
                                biztonsági intézkedések meghatározását és azok betartásának
                                ellenőrzését. Az engedélyezés részeként írásos engedélyek
                                kerülnek kibocsátásra, amelyek rögzítik a munkavégzés
                                feltételeit, a szükséges védőfelszereléseket és a biztonsági
                                eljárásokat. Ezzel biztosítjuk, hogy a munkavállalók tisztában
                                legyenek a veszélyekkel és a megelőző intézkedésekkel, így
                                csökkentve a balesetek és egészségkárosodások kockázatát.
                            </p>
                            <p className="subsection-content">
                                Engedélyezési eljárások:
                            </p>
                            <ul className="custom-list">
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Zárt térben történő munkavégzés engedélyezése, feltételeinek
                                    meghatározása
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Magasban történő munkavégzés engedélyezése, feltételeinek
                                    meghatározása
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    LOTO (kiszakaszolási eljárás) eljárás, bevezetése, alkalmazása
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VeszelyesMunkak;