import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import kockazat from '/src/assets/kockazat.jpg'
import { Helmet } from "react-helmet-async";


const MunkavedelmiKockazatertekeles = () => {

    return (
        <>
            <Helmet>
                <title>Munkavédelmi kockázatértékelés | EHS Szolgáltatás</title>
                <meta name="description" content="Munkavédelmi kockázatértékelés: azonosítás, elemzés és értékelés a biztonságos munkavégzés érdekében." />
                <meta property="og:image" content={new URL(kockazat, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Munkavédelmi kockázatértékelés",
                        "description": "Munkavédelmi kockázatértékelés: azonosítás, elemzés és értékelés a biztonságos munkavégzés érdekében.",
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
                                    src={kockazat}
                                    alt="Munkavédelmi kockázatértékelés – potenciális kockázatok azonosítása és értékelése"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Munkavédelmi kockázatértékelés</h1>
                                <p className="subsection-content">
                                    A Munkavédelmi kockázatértékelés egy folyamat, amely során
                                    azonosítjuk, elemezzük és értékeljük a potenciális kockázatokat egy
                                    adott tevékenység vagy projekt során. Célja a kockázatok megelőzése
                                    vagy minimalizálása, hogy a szervezet biztonságosan és hatékonyan
                                    működhessen. Ennek során figyelembe vesszük a lehetséges veszélyeket,
                                    azok bekövetkezési valószínűségét és a potenciális hatásukat. A
                                    kockázatértékelés eredményei alapján tervezhetők meg a megfelelő
                                    kockázatkezelési stratégiák és intézkedések.
                                </p>
                                <p className="subsection-content">
                                    A kockázatértékeléseink tartalmazzák a következőket:
                                </p>
                                <ul className="custom-list" aria-label="Munkavédelmi kockázatértékelés területei">
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        A munkahely, munkakörnyezet vizsgálata
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Gépek, berendezések kockázatértékelése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Vegyi anyagok és készítmények kockázatértékelése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Képernyős munkahelyek kockázatértékelése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        A jellemző munkakörök pszichoszociális kockázatértékelése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Kézi anyagmozgatás kockázatértékelése
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

export default MunkavedelmiKockazatertekeles;