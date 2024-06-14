import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const FireSafety = () => {

    return (
        <div className="container">
            <section className="section">
                <h1>Tűzvédelem</h1>
                <div className="subsection">
                    <h2>1. Tűzvédelmi szabályzat </h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Tűzvédelmi szabályzat, utasítások készítése, aktualizálása a jogszabályi előírások változásainak megfelelően</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzriadóterv készítése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>2. Tűzvédelmi ellenőrzések</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Tűzvédelmi szemlék megtartása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Hiányosságok intézkedéseinek nyomon követése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>3. Időszakos felülvizsgálatok</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Elektromos berendezések tűzvédelmi szabványossági felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Villámvédelmi felülvizsgálat</li>
                        <li><IoCheckmarkCircle className="check-icon" />Robbanásvédelmi felülvizsgálat</li>
                        <li><IoCheckmarkCircle className="check-icon" />Sztatikus feltöltődés elleni védelem felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Kézi tűzoltó készülékek időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzcsapok időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Biztonsági világítás időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Beépített tűzoltó rendszerek időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzjelző hálózat időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzgátló csappantyúk időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Hő- és füstelvezető rendszerek időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzgátló nyílászárók időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Gázérzékelő rendszerek időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzvédelmi berendezések, rendszerek üzemeltetői ellenőrzésének elvégzése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>4. Tűzvizsgálat</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Tűzesetek kivizsgálása, tűzvizsgálati jegyzőkönyv készítése, intézkedési terv készítése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>5. Tűzvédelmi oktatás</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Előzetes tűzvédelmi oktatás</li>
                        <li><IoCheckmarkCircle className="check-icon" />Időszakos tűzvédelmi oktatás</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzriadó gyakorlatok bonyolítása</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>6. Katasztrófavédelem</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Katasztrófavédelmi gyakorlatok szervezése, bonyolítása, gyakorlatterv készítése, oktatás</li>
                        <li><IoCheckmarkCircle className="check-icon" />Veszélyes ipari ügyintézői feladat elvégzése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>7. Tűzveszélyes tevékenység</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Alkalomszerű tűzveszélyes tevékenységek engedélyezése, feltételeinek meghatározása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tűzveszélyes tevékenység ellenőrzése</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default FireSafety