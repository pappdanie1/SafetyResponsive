import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import talaj from '/src/assets/talaj-v.jpg'
import { Helmet } from "react-helmet-async";

const TalajVedelem = () => {

    return (
        <>
            <Helmet>
                <title>Talajvédelem - EHS Szolgáltatás</title>
                <meta name="description" content="Talajvízfigyelő monitoring kút ellenőrzése: kút állapotának vizsgálata, mintavétel, laboratóriumi elemzés, jelentés készítése." />
                <meta property="og:image" content={new URL(talaj, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Talajvédelem",
                        "description": "Talajvízfigyelő monitoring kút ellenőrzése: kút állapotának vizsgálata, mintavétel, laboratóriumi elemzés, jelentés készítése.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "EHS Szolgáltatás",
                            "url": "https://ehs-szolgaltatas.com"
                        },
                        "areaServed": "HU",
                        "serviceType": "Környezetvédelem"
                    }
                `}</script>
            </Helmet>
            <main className="container">
                <article className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={talaj}
                                alt="Talajvédelem – talajvízfigyelő monitoring kút ellenőrzése"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Talaj védelem</h1>
                            <p className="subsection-content">
                                A talajvízfigyelő monitoring kút ellenőrzésének célja a talajvíz minőségének és szintjének rendszeres nyomon követése, hogy az esetleges szennyezéseket és változásokat időben felismerjük és kezeljük.
                            </p>
                            <p className="subsection-content">
                                Az ellenőrzés során a következő lépésekre kerül sor:
                            </p>
                            <ul className="custom-list" aria-label="Talajvízfigyelő monitoring kút ellenőrzési lépések">
                                <li><IoCheckmarkCircle className="check-icon" />Kút állapotának vizsgálata</li>
                                <li><IoCheckmarkCircle className="check-icon" />Mintavétel</li>
                                <li><IoCheckmarkCircle className="check-icon" />Laboratóriumi elemzés</li>
                                <li><IoCheckmarkCircle className="check-icon" />Adatok értékelése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Jelentés készítése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Következtetések és javaslatok</li>
                            </ul>
                            <p className="subsection-content">
                                Ezek az intézkedések biztosítják, hogy a talajvíz minősége megfelelő legyen és időben felismerjük a környezeti veszélyeket, így elősegítve a környezetvédelem hatékonyságát és fenntarthatóságát.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default TalajVedelem;