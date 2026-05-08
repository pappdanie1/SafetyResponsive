import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import numbers from '/src/assets/14001.jpg'
import { Helmet } from "react-helmet-async";

const ISO14001 = () => {

    return (
        <>
            <Helmet>
                <title>ISO 14001 Környezetközpontú Irányítási Rendszerek - EHS Szolgáltatás</title>
                <meta name="description" content="ISO 14001 szabvány alkalmazása és támogatás: rendszer kezelése, dokumentálása, auditok bonyolítása, vezetőségi átvizsgálás, jogszabály regiszter." />
                <meta property="og:image" content={new URL(numbers, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "ISO 14001 Környezetközpontú Irányítási Rendszerek",
                        "description": "ISO 14001 szabvány alkalmazása és támogatás: rendszer kezelése, dokumentálása, auditok bonyolítása, vezetőségi átvizsgálás, jogszabály regiszter.",
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
                                src={numbers}
                                alt="ISO 14001 Környezetközpontú Irányítási Rendszer tanúsítvány"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>ISO14001 Környezetközpontú Irányítási Rendszerek</h1>
                            <p className="subsection-content">
                                Az ISO 14001 szabvány egy nemzetközi szabvány, amely a környezetközpontú irányítási rendszerek (KIR) követelményeit határozza meg. Célja, hogy a szervezetek hatékonyan kezeljék környezeti felelősségeiket, csökkentsék környezeti hatásaikat és megfeleljenek a vonatkozó jogszabályoknak, előírásoknak. Az ISO 14001 szabvány alkalmazása segíti a szervezeteket abban, hogy környezetvédelmi teljesítményüket folyamatosan javítsák, csökkentsék a környezeti kockázatokat és elősegítsék a fenntartható fejlődést.
                            </p>
                            <h2>Támogatásaink a KIR alkalmazásával kapcsolatban:</h2>
                            <ul className="custom-list" aria-label="ISO 14001 KIR támogatási szolgáltatások">
                                <li><IoCheckmarkCircle className="check-icon" />Rendszer kezelése, dokumentálása</li>
                                <li><IoCheckmarkCircle className="check-icon" />Auditok bonyolítása</li>
                                <li><IoCheckmarkCircle className="check-icon" />Vezetőségi átvizsgálás</li>
                                <li><IoCheckmarkCircle className="check-icon" />Jogszabály regiszter</li>
                                <li><IoCheckmarkCircle className="check-icon" />Érdekelt felek elvárásai, stb.</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default ISO14001;