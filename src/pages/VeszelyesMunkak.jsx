import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import veszelyes from '/src/assets/veszelyes-m.jpg'
import { Helmet } from "react-helmet-async";


const VeszelyesMunkak = () => {

    return (
        <>
            <Helmet>
                <title>Veszélyes munkák - EHS Szolgáltatás</title>
                <meta name="description" content="Veszélyes munkák engedélyezése, kockázatértékelése és biztonsági intézkedések meghatározása a munkavállalók védelme érdekében." />
                <meta property="og:image" content={new URL(veszelyes, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Veszélyes munkák",
                        "description": "Veszélyes munkák engedélyezése, kockázatértékelése és biztonsági intézkedések meghatározása a munkavállalók védelme érdekében.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "EHS Szolgáltatás",
                            "url": "https://ehs-szolgaltatas.com"
                        },
                        "areaServed": "HU",
                        "serviceType": "Munkavédelem"
                    }
                `}</script>
            </Helmet>
            <main className="container">
                <article className="section">
                    <div className="subsection">
                        <div className="content-wrapper">
                            <div className="image-container">
                                <img
                                    src={veszelyes}
                                    alt="Veszélyes munkák – zárt térben és magasban történő munkavégzés engedélyezése"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Veszélyes munkák</h1>
                                <p className="subsection-content">
                                    A veszélyes munkák engedélyezése egy szabályozott
                                    folyamat, amely során biztosítjuk, hogy a munkavégzés
                                    megfeleljen a biztonsági előírásoknak és minimalizálja a
                                    kockázatokat. Ez a folyamat magában foglalja a
                                    munkavégzés kockázatainak előzetes felmérését, a szükséges
                                    biztonsági intézkedések meghatározását és azok betartásának
                                    ellenőrzését. Az engedélyezés részeként írásos engedélyek
                                    kerülnek kibocsátásra, amelyek rögzítik a munkavégzés
                                    feltételeit, a szükséges védőfelszereléseket és a biztonsági
                                    eljárásokat. Ezzel biztosítjuk, hogy a munkavállalók tisztában
                                    legyenek a veszélyekkel és a megelőző intézkedésekkel, így
                                    csökkentve a balesetek és egészségkárosodások kockázatát.
                                </p>
                                <p className="subsection-content">
                                    Engedélyezési eljárások:
                                </p>
                                <ul className="custom-list" aria-label="Veszélyes munkák engedélyezési eljárásai">
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Zárt térben történő munkavégzés engedélyezése, feltételeinek
                                        meghatározása
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Magasban történő munkavégzés engedélyezése, feltételeinek
                                        meghatározása
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        LOTO (kiszakaszolási eljárás) eljárás, bevezetése, alkalmazása
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default VeszelyesMunkak;