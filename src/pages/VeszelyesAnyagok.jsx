import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import veszelyes from '/src/assets/veszelyes-a.jpg'
import { Helmet } from "react-helmet-async";

const VeszelyesAnyagok = () => {

    return (
        <>
            <Helmet>
                <title>Veszélyes anyagok nyilvántartása - EHS Szolgáltatás</title>
                <meta name="description" content="Veszélyes anyagok nyilvántartása: anyagok azonosítása, mennyiségi adatok, tárolási hely, biztonsági adatlapok, készletmozgások nyomon követése." />
                <meta property="og:image" content={new URL(veszelyes, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Veszélyes anyagok nyilvántartása",
                        "description": "Veszélyes anyagok nyilvántartása: anyagok azonosítása, mennyiségi adatok, tárolási hely, biztonsági adatlapok, készletmozgások nyomon követése.",
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
                                src={veszelyes}
                                alt="Veszélyes anyagok nyilvántartása – jogszabályi megfelelés és biztonsági dokumentáció"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Veszélyes anyagok nyilvántartása</h1>
                            <p className="subsection-content">
                                A veszélyes anyagok nyilvántartása egy fontos folyamat, amelynek célja a veszélyes anyagok beszerzésének, tárolásának, felhasználásának és megsemmisítésének pontos dokumentálása és nyomon követése. Ez a nyilvántartás segít biztosítani, hogy a veszélyes anyagok kezelése megfeleljen a jogszabályi előírásoknak és a biztonsági követelményeknek, valamint minimalizálja a környezeti és egészségügyi kockázatokat.
                            </p>
                            <h2 className="subsection-content-h2">
                                A veszélyes anyagok nyilvántartása a következő információkat tartalmazza:
                            </h2>
                            <ul className="custom-list" aria-label="Veszélyes anyagok nyilvántartásának tartalma">
                                <li><IoCheckmarkCircle className="check-icon" />Anyagok azonosítása</li>
                                <li><IoCheckmarkCircle className="check-icon" />Mennyiségi adatok</li>
                                <li><IoCheckmarkCircle className="check-icon" />Tárolási hely</li>
                                <li><IoCheckmarkCircle className="check-icon" />Biztonsági adatlapok (MSDS)</li>
                                <li><IoCheckmarkCircle className="check-icon" />Készletmozgások nyomon követése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Személyi felelősség</li>
                            </ul>
                            <p className="subsection-content">
                                A veszélyes anyagok nyilvántartása nemcsak a jogszabályi megfelelést szolgálja, hanem hozzájárul a munkahelyi biztonság növeléséhez és a környezeti kockázatok csökkentéséhez is. Rendszeres felülvizsgálata és aktualizálása elengedhetetlen a hatékony kockázatkezelés érdekében.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default VeszelyesAnyagok;