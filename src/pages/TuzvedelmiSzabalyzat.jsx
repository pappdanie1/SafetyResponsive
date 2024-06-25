import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const TuzvedelmiSzabalyzat = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/t-szab.jpg"}
                            alt="Fire Safety Regulations"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Tűzvédelmi szabályzat</h2>
                        <p className="subsection-content">
                            A tűzvédelmi szabályzat egy olyan dokumentum, amely meghatározza az adott szervezet vagy intézmény tűzvédelmi előírásait és eljárásait. Célja a tűz megelőzése, a tűz esetén követendő eljárások és a tűzoltás megszervezése.
                        </p>
                        <p className="subsection-content">
                            Elkészítjük a szabályzatot, amely tartalmazza a következőket, továbbá a 101/2023. (XII. 29.) BM rendelet előírásait:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzmegelőzési intézkedések:</strong> Azokat az eljárásokat és szabályokat, amelyekkel csökkenthető a tűz keletkezésének kockázata, például a gyúlékony anyagok megfelelő tárolása és kezelése, valamint a villamos berendezések rendszeres karbantartása.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzjelzés és riasztás:</strong> Azokat az eljárásokat, amelyek biztosítják a tűz gyors észlelését és a megfelelő személyek értesítését, beleértve a tűzjelző rendszerek használatát és a riasztási láncot.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Menekülési útvonalak:</strong> Az épületben található menekülési útvonalak és kijáratok pontos leírása, valamint a menekülési útvonalak akadálymentességének biztosítása.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzoltó eszközök:</strong> A tűzoltó készülékek és berendezések elhelyezése, karbantartása és használatukra vonatkozó utasítások.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Képzés és oktatás:</strong> Az alkalmazottak rendszeres tűzvédelmi oktatása, beleértve a tűz esetén követendő eljárások, a tűzoltó eszközök használata és az evakuálási gyakorlatok.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzriadó tervek:</strong> A tűz esetén követendő eljárások, beleértve az evakuálási terveket, az elsősegélynyújtást és a tűzoltó egységek értesítését.</li>
                        </ul>
                        <p className="subsection-content">
                            A tűzvédelmi szabályzat rendszeres felülvizsgálata és aktualizálása biztosítja, hogy mindig naprakész és hatékony legyen a tűzvédelem szempontjából.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuzvedelmiSzabalyzat