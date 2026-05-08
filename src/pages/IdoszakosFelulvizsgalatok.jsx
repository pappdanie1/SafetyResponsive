import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import munkavedelmi from '/src/assets/munkavedelmi-felul.jpg'
import { Helmet } from "react-helmet-async";

const IdoszakosFelulvizsgalatok = () => {

    return (
        <>
            <Helmet>
                <title>Időszakos Felülvizsgálatok - EHS Szolgáltatás</title>
                <meta
                    name="description"
                    content="Időszakos felülvizsgálatok elvégzése a gépek, berendezések és eszközök biztonságos állapotának biztosítása érdekében. Jogszabályi megfelelőség és biztonságos munkakörnyezet."
                />
                <meta property="og:image" content={new URL(munkavedelmi, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Időszakos Felülvizsgálatok",
                        "description": "Időszakos felülvizsgálatok elvégzése a gépek, berendezések és eszközök biztonságos állapotának biztosítása érdekében.",
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
                                    src={munkavedelmi}
                                    alt="Időszakos munkavédelmi felülvizsgálatok – gépek és berendezések ellenőrzése"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Időszakos Felülvizsgálatok</h1>
                                <p className="subsection-content">
                                    A Jogszabályokban és szabványokban meghatározott időnközönként
                                    időszakos felülvizsgálatok elvégzése szükséges, amely biztosítja
                                    a gépek, berendezések, eszközök biztonságos állapotát és a
                                    jogszabályi megfelelőséget.
                                </p>
                                <p className="subsection-content">
                                    Időszakos munkavédelmi felülvizsgálatok, amelyeket körültekintően
                                    nyilvántartunk és elvégzünk:
                                </p>
                                <ul className="custom-list" aria-label="Időszakos munkavédelmi felülvizsgálatok listája">
                                    <li><IoCheckmarkCircle className="check-icon" />Emelőgépek időszakos vizsgálatai (Fővizsgálat, Szerkezeti vizsgálat, Időszakos Biztonsági vizsgálat)</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Létrák időszakos felülvizsgálata, dokumentálása</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Tároló polcrendszerek időszakos felülvizsgálata</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Elektromos berendezések érintésvédelmi felülvizsgálata (hordozható, helyhez kötött)</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Veszélyes berendezések időszakos biztonságtechnikai felülvizsgálata</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Nyomástartó berendezések időszakos felülvizsgálata</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Kazánok és hőkezelő berendezések műszaki időszakos felülvizsgálata</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Hegesztő berendezések (elektromos és gázhegesztő) időszakos felülvizsgálata</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default IdoszakosFelulvizsgalatok;