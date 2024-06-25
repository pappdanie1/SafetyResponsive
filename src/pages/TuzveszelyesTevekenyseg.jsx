import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const TuzveszelyesTevekenyseg = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src="/src/assets/tuzveszelyes.jpg"
                            alt="Fire Hazardous Activities"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Tűzveszélyes tevékenység</h2>
                        <p className="subsection-content">
                            Az alkalomszerű tűzveszélyes tevékenységek engedélyezése során különös figyelmet kell fordítani a biztonsági előírások és szabályok betartására. Az ilyen tevékenységek lehetnek például hegesztési munkák, forrasztás, vagy más olyan munkafolyamatok, amelyek során nyílt lángot, szikrát vagy magas hőt használnak.
                        </p>
                        <p className="subsection-content">
                            Az engedélyezési folyamat általában a következő lépéseket tartalmazza:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Kockázatértékelés: </strong>Az adott tevékenységhez kapcsolódó potenciális tűzveszélyek azonosítása és értékelése. Ez magában foglalja a tevékenység helyszínének és környezetének felmérését.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Engedélykérés: </strong>Az érintett munkavállalók vagy vállalkozók írásbeli kérelmet nyújtanak be a tűzveszélyes tevékenység végzésére. A kérelemnek tartalmaznia kell a tevékenység részleteit, időtartamát és helyszínét.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Biztonsági intézkedések meghatározása: </strong>Az engedély megadása előtt részletes biztonsági intézkedéseket kell kidolgozni és dokumentálni, amelyek biztosítják a tűzveszély minimalizálását. Ide tartozhat a megfelelő tűzoltó készülékek elérhetősége, tűzvédelmi zónák kijelölése, valamint a veszélyes anyagok eltávolítása a munkaterületről.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Képzés és tájékoztatás: </strong>A tevékenységet végző munkavállalók számára oktatást kell biztosítani a tűzvédelmi előírásokról és a vészhelyzeti eljárásokról. A munkavégzés megkezdése előtt tájékoztatni kell őket a helyszín specifikus veszélyeiről és a bevezetett biztonsági intézkedésekről.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Engedély kiadása: </strong>Az illetékes tűzvédelmi szakember vagy biztonsági felelős megadja az írásbeli engedélyt, amely tartalmazza a tevékenység részleteit és az előírt biztonsági intézkedéseket. Az engedélyt jól látható helyen kell elhelyezni a munkaterületen.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Folyamatos felügyelet: </strong>A tűzveszélyes tevékenység során folyamatos felügyeletet kell biztosítani a biztonsági előírások betartásának ellenőrzése érdekében. Szükség esetén azonnali intézkedéseket kell hozni a tűzveszély elhárítására.</li>
                            <li><IoCheckmarkCircle className="check-icon" /><strong>Tevékenység befejezése: </strong>A munkavégzés befejezése után alapos ellenőrzést kell végezni a munkaterületen, hogy megbizonyosodjanak arról, hogy nem maradtak hátra tűzveszélyes anyagok vagy eszközök és a terület biztonságos állapotba került.</li>
                        </ul>
                        <p className="subsection-content">
                            Ezek az intézkedések segítenek minimalizálni a tűzveszélyt és biztosítják, hogy az alkalomszerű tűzveszélyes tevékenységek biztonságosan elvégezhetők legyenek.
                            Ezen engedélyezési eljárás kidolgozásában, alkalmazásában nyújtunk szakszerű támogatást tűzveszélyes munkát végzők vagy megrendelők részére.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuzveszelyesTevekenyseg;