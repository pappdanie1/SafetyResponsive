import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ell from '/src/assets/t-ell.png'
import { Helmet } from "react-helmet-async";

const TuzvedelmiEllenorzesek = () => {

    return (
        <>
            <Helmet>
                <title>Tűzvédelmi ellenőrzések - EHS Szolgáltatás</title>
                <meta name="description" content="Tűzvédelmi ellenőrzések: tűzvédelmi berendezések, menekülési útvonalak, dokumentáció vizsgálata, tűzveszélyes anyagok kezelése, épület szerkezeti vizsgálat." />
                <meta property="og:image" content={new URL(ell, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Tűzvédelmi ellenőrzések",
                        "description": "Tűzvédelmi ellenőrzések: tűzvédelmi berendezések, menekülési útvonalak, dokumentáció vizsgálata, tűzveszélyes anyagok kezelése, épület szerkezeti vizsgálat.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "EHS Szolgáltatás",
                            "url": "https://ehs-szolgaltatas.com"
                        },
                        "areaServed": "HU",
                        "serviceType": "Tűzvédelem"
                    }
                `}</script>
            </Helmet>
            <main className="container">
                <article className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={ell}
                                alt="Tűzvédelmi ellenőrzések – tűzvédelmi előírásoknak való megfelelés vizsgálata"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Tűzvédelmi ellenőrzések</h1>
                            <p className="subsection-content">
                                A tűzvédelmi ellenőrzések célja annak biztosítása, hogy egy adott létesítmény megfeleljen a tűzvédelmi előírásoknak és szabályoknak, továbbá az esetleges tűzveszélyeket időben felismerjék és kezeljék.
                            </p>
                            <p className="subsection-content">
                                Ezek az ellenőrzések a következő területeket érinthetik:
                            </p>
                            <ul className="custom-list" aria-label="Tűzvédelmi ellenőrzések területei">
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzvédelmi berendezések és eszközök ellenőrzése:</strong> A tűzoltó készülékek, tűzcsapok, tűzjelző rendszerek, vészvilágítás és más tűzvédelmi eszközök megfelelő működésének vizsgálata és karbantartása.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Menekülési útvonalak és kijáratok felülvizsgálata:</strong> A menekülési útvonalak és vészkijáratok akadálymentességének és jól láthatóságának biztosítása, valamint az ezekhez kapcsolódó jelzések ellenőrzése.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzvédelmi dokumentáció vizsgálata:</strong> A tűzvédelmi szabályzatok, evakuálási tervek és egyéb tűzvédelmi dokumentumok naprakészségének és megfelelőségének ellenőrzése.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Tűzveszélyes anyagok kezelése:</strong> A gyúlékony és veszélyes anyagok tárolásának és kezelésének ellenőrzése a megfelelő biztonsági előírások betartása érdekében.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Oktatási és képzési nyilvántartások áttekintése:</strong> Az alkalmazottak tűzvédelmi oktatásának és gyakorlatainak nyilvántartásának ellenőrzése annak biztosítására, hogy mindenki megfelelően felkészült legyen egy esetleges tűzhelyzetre.</li>
                                <li><IoCheckmarkCircle className="check-icon" /><strong>Épület szerkezeti vizsgálata:</strong> Az épület tűzvédelmi szempontból kritikus szerkezeti elemeinek, például tűzgátló ajtók és falak állapotának ellenőrzése.</li>
                            </ul>
                            <p className="subsection-content">
                                A rendszeres tűzvédelmi ellenőrzések hozzájárulnak a tűzvédelmi szint folyamatos fenntartásához és a tűz esetén a gyors és hatékony reagálás biztosításához.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default TuzvedelmiEllenorzesek