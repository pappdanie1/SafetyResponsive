import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const EnvironmentalProtection = () => {

    return (
        <div className="container">
            <section className="section">
                <h1>Környezetvédelem</h1>
                <div className="subsection">
                    <h2>1. ISO14001 Környezetközpontú Irányítási Rendszerek</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Rendszer kezelése, dokumentálása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Auditok bonyolítása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Vezetőségi átvizsgálás</li>
                        <li><IoCheckmarkCircle className="check-icon" />Jogszabály regiszter</li>
                        <li><IoCheckmarkCircle className="check-icon" />Érdekelt felek elvárásai</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>2. Környezetvédelmi ellenőrzések</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Környezetvédelmi szemlék megtartása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Hiányosságok intézkedéseinek nyomon követése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>3. Talaj védelem</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Talajvízfigyelő monitoring kút ellenőrzése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>4. Veszélyes anyagok nyilvántartása</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Veszélyes anyag regiszter készítése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Biztonsági adatlapok kezelése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>5. Levegőtisztaság védelem</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Légszennyező pontforrás kibocsátások mérése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Éves bevallás elkészítése és beküldése a hatóság felé</li>
                        <li><IoCheckmarkCircle className="check-icon" />Pontforrások engedélyeztetése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Levegőterhelési díj analitika</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>6. Környezetvédelmi oktatás</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Előzetes környezetvédelmi oktatás</li>
                        <li><IoCheckmarkCircle className="check-icon" />Időszakos környezetvédelmi oktatás</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>7. Hulladékkezelés</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Az éves hulladékos adatszolgáltatás elkészítése, hatósághoz történő benyújtása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Hulladék nyilvántartás vezetése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>8. Környezeti zaj</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Környezeti zaj mérése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>9. Környezetvédelmi termékdíj bevallás</h2>
                </div>
                <div className="subsection">
                    <h2>10.	EPR gyártói termékfelelőségi díj bevallás</h2>
                </div>
            </section>
        </div>
    );
}

export default EnvironmentalProtection