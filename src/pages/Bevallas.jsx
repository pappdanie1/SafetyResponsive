import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const Bevallas = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/k-termek.jpg"}
                            alt="Example Image 4"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Környezetvédelmi termékdíj bevallás</h2>
                        <p className="subsection-content">
                            A környezetvédelmi termékdíj egy olyan pénzügyi teher, amelyet bizonyos termékek gyártói, forgalmazói vagy importőrei kötelesek megfizetni annak érdekében, hogy hozzájáruljanak a környezet védelméhez. Magyarországon ezt a díjat a környezetvédelmi termékdíjról szóló törvény (2011. évi LXXXV. törvény) szabályozza. A termékdíjat elsősorban azokra a termékekre vetik ki, amelyek hulladékká válásukkor jelentős környezeti terhelést okoznak, és amelyeket újra lehet hasznosítani vagy környezetbarát módon kezelni.
                        </p>
                        <p className="subsection-content">
                            Főbb termékcsoportok, amelyekre kivetik a termékdíjat:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Az akkumulátor</li>
                            <li><IoCheckmarkCircle className="check-icon" />A csomagolószer</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az egyéb kőolajtermék</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az elektromos, elektronikus berendezés</li>
                            <li><IoCheckmarkCircle className="check-icon" />A gumiabroncs</li>
                            <li><IoCheckmarkCircle className="check-icon" />A reklámhordozó papír</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az egyéb műanyag termék</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az egyéb vegyipari termék</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az egyéb kőolajtermék</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az irodai papír</li>
                        </ul>
                        <p className="subsection-content">
                            <strong>Bevallási kötelezettség: </strong>A termékdíjköteles termékek gyártóinak, forgalmazóinak vagy importőreinek rendszeres időközönként (általában negyedévente vagy évente) be kell vallaniuk a forgalomba hozott termékek mennyiségét és ennek megfelelően megfizetni a termékdíjat.
                        </p>
                        <p className="subsection-content">
                            <strong>Nyilvántartási kötelezettség: </strong>Pontos nyilvántartást kell vezetni a termékdíjköteles termékekről és azok forgalmáról.
                        </p>
                        <p className="subsection-content">
                            <strong>Mentesítések és kedvezmények: </strong>Bizonyos esetekben lehetőség van mentesítésre vagy kedvezményes díjfizetésre, például ha a gyártó vagy forgalmazó bizonyos környezetvédelmi feltételeknek megfelel, vagy ha bizonyos mennyiség alatti forgalomról van szó.
                        </p>
                        <p className="subsection-content">
                            A környezetvédelmi termékdíj célja tehát a környezetre káros termékek környezetbarát kezelésének finanszírozása és a környezettudatos magatartás elősegítése.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bevallas;