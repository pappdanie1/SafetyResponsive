import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ell from '/src/assets/k-ell.jpg'
import { Helmet } from "react-helmet-async";

const KornyezetvedelmiEll = () => {

    return (
        <>
            <Helmet>
                <title>Környezetvédelmi ellenőrzések - EHS Szolgáltatás</title>
                <meta name="description" content="Környezetvédelmi ellenőrzések elvégzése: jogszabályok betartása, környezeti hatások felmérése, hulladékgazdálkodás, erőforrás-gazdálkodás, szennyezésmegelőzés." />
                <meta property="og:image" content={new URL(ell, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Környezetvédelmi ellenőrzések",
                        "description": "Környezetvédelmi ellenőrzések: jogszabályok betartása, környezeti hatások felmérése, hulladékgazdálkodás, erőforrás-gazdálkodás, szennyezésmegelőzés.",
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
                                src={ell}
                                alt="Környezetvédelmi ellenőrzések – vállalati környezeti megfelelőség vizsgálata"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Környezetvédelmi ellenőrzések</h1>
                            <p className="subsection-content">
                                A környezetvédelmi ellenőrzések olyan folyamatok, amelyek célja a szervezetek környezetvédelmi előírásoknak való megfelelésének biztosítása és a környezeti hatások minimalizálása.
                            </p>
                            <h2>Az ellenőrzések az alábbiakra terjednek ki:</h2>
                            <ul className="custom-list" aria-label="Környezetvédelmi ellenőrzések területei">
                                <li><IoCheckmarkCircle className="check-icon" />Környezetvédelmi szabályozások betartása</li>
                                <li><IoCheckmarkCircle className="check-icon" />Környezeti hatások felmérése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Hulladékgazdálkodás</li>
                                <li><IoCheckmarkCircle className="check-icon" />Erőforrás-gazdálkodás (energia- és vízfelhasználás hatékonysága)</li>
                                <li><IoCheckmarkCircle className="check-icon" />Szennyezésmegelőzés és kockázatkezelés</li>
                                <li><IoCheckmarkCircle className="check-icon" />Dokumentációk és nyilvántartások</li>
                            </ul>
                            <p className="subsection-content">
                                A környezetvédelmi ellenőrzések eredményei alapján javaslatokat teszünk a szükséges fejlesztésekre és intézkedésekre, hogy a szervezetek környezetvédelmi teljesítményét javítsuk és hozzájáruljunk a fenntarthatósághoz.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default KornyezetvedelmiEll;