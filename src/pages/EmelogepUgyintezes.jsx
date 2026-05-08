import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import emelogep from '/src/assets/emelogep.jpg'
import { Helmet } from "react-helmet-async";

const EmelogepUgyintezes = () => {

    return (
        <>
            <Helmet>
                <title>Emelőgép ügyintézés - EHS Szolgáltatás</title>
                <meta name="description" content="Az emelőgép ügyintézés magában foglalja az emelőgépek telepítésével, üzemeltetésével és karbantartásával kapcsolatos adminisztratív és jogi feladatok ellátását." />
                <meta property="og:image" content={new URL(emelogep, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Emelőgép ügyintézés",
                        "description": "Emelőgépek telepítésével, üzemeltetésével és karbantartásával kapcsolatos adminisztratív és jogi feladatok ellátása.",
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
                                    src={emelogep}
                                    alt="Emelőgép ügyintézés – daru és targonca időszakos felülvizsgálata"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Emelőgép ügyintézés</h1>
                                <p className="subsection-content">
                                    Az emelőgép ügyintézés magában foglalja az emelőgépek telepítésével, üzemeltetésével és karbantartásával kapcsolatos adminisztratív és jogi feladatok ellátását. Ez a folyamat tartalmazza az emelőgépek üzembehelyezését, rendszeres időszakos vizsgálatokat és az ezekhez kapcsolódó dokumentációk vezetését. Az ügyintézés során biztosítani kell, hogy az emelőgépek megfeleljenek a vonatkozó biztonsági és műszaki előírásoknak, valamint hogy a kezelők megfelelő képzésben részesüljenek és rendelkezzenek a szükséges képesítésekkel. A szakszerű ügyintézés hozzájárul a biztonságos üzemeltetéshez és a balesetek megelőzéséhez.
                                </p>
                                <h2 className="subsection-content-h2">
                                    Az emelőgép ügyintézés során általunk elvégzett feladatok:
                                </h2>
                                <ul className="custom-list" aria-label="Emelőgép ügyintézési feladatok">
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Daruk, emelőeszközök időszakos felülvizsgálatának bonyolítása (szerkezeti vizsgálat, fővizsgálat, időszakos biztonsági vizsgálat) darugépkönyvek vezetése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Targoncák (emelővillás, gyalog kíséretű, vezetőállásos, vontató, stb.) időszakos felülvizsgálatának bonyolítása (szerkezeti vizsgálat, fővizsgálat, időszakos biztonsági vizsgálat) Targoncagépkönyvek vezetése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Teherfelvevő eszközök, függesztékek időszakos felülvizsgálata
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Gépkezelési jogosultságok ellenőrzése
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

export default EmelogepUgyintezes;