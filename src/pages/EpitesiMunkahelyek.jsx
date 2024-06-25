import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const EpitesiMunkahelyek = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src="/src/assets/epitesi-m.jpg"
                                alt="Építési munkahelyek munkavédelmi feladatai"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h2>Építési munkahelyek munkavédelmi feladatai</h2>
                            <p className="subsection-content">
                                Az építési munkahelyek munkavédelmi feladatai kiterjednek a munkahelyi biztonság és egészségvédelem számos aspektusára, biztosítva a dolgozók biztonságát és a balesetek megelőzését.
                            </p>
                            <p className="subsection-content">
                                Ezek a feladatok a következőket foglalják magukban:
                            </p>
                            <ul className="custom-list">
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Kockázatértékelés és veszélyelemzés:</strong> Az építési terület veszélyeinek és kockázatainak azonosítása és értékelése, hogy megfelelő védelmi intézkedéseket lehessen hozni.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Biztonsági és egészségvédelmi terv készítése:</strong> Részletes munkavédelmi terv kidolgozása, amely tartalmazza a védelmi intézkedéseket, a munkafolyamatok biztonságos végrehajtásának leírását, valamint a vészhelyzeti eljárásokat.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Védőfelszerelések biztosítása:</strong> A megfelelő egyéni védőeszközök (például sisakok, védőkesztyűk, védőszemüvegek) biztosítása és használatuk ellenőrzése.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Képzés és oktatás:</strong> A munkavállalók rendszeres képzése a biztonsági előírásokról, a veszélyekről és a védelmi intézkedésekről, valamint az elsősegélynyújtás alapjairól.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Biztonsági jelzések és táblák elhelyezése:</strong> Figyelmeztető és irányító táblák kihelyezése a veszélyes területek, anyagok és gépek jelölésére.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Gépek és eszközök karbantartása:</strong> Az építési gépek, berendezések és szerszámok rendszeres ellenőrzése és karbantartása a biztonságos üzemeltetés érdekében.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Helyszíni ellenőrzések és felügyelet:</strong> Rendszeres helyszíni ellenőrzések végrehajtása a munkavédelmi előírások betartásának ellenőrzésére és a potenciális veszélyforrások azonnali kezelésére.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Vészhelyzeti tervek:</strong> Vészhelyzeti eljárások és menekülési tervek kidolgozása, beleértve a tűzvédelmi intézkedéseket és az elsősegélynyújtó pontok kialakítását.</li>
                            </ul>
                            <p className="subsection-content">
                                Ezek a feladatok biztosítják, hogy az építési munkahelyeken minimálisra csökkenjen a balesetek és sérülések kockázata, valamint hogy a munkavállalók biztonságos és egészséges környezetben dolgozhassanak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EpitesiMunkahelyek;