import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const IdoszakosFelulvizsgalatokT = () => {

    return (
        <div className="container" >
            <div className="subsection">
                <h2>Időszakos felülvizsgálatok</h2>
                <p className="subsection-content">
                    Elvégezzük a 54/2014. (XII. 5.) BM rendelet szerinti tűzvédelmi időszakos felülvizsgálatokat és üzemeltetői ellenőrzéseket, amelyek a következők:   
                </p>
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
                </ul>
            </div>
        </div>
    )
}

export default IdoszakosFelulvizsgalatokT