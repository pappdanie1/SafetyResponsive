import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ido from '/src/assets/ido-f.jpg'
import { Helmet } from "react-helmet-async";

const IdoszakosFelulvizsgalatokT = () => {

    return (
        <>
            <Helmet>
                <title>Tűzvédelmi időszakos felülvizsgálatok - EHS Szolgáltatás</title>
                <meta name="description" content="Tűzvédelmi időszakos felülvizsgálatok elvégzése a 54/2014. (XII. 5.) BM rendelet szerint: elektromos berendezések, villámvédelem, robbanásvédelem, tűzoltó készülékek." />
                <meta property="og:image" content={new URL(ido, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={ido}
                            alt="Periodic Inspections"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
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
            </div>
        </div>        </>    );
}

export default IdoszakosFelulvizsgalatokT