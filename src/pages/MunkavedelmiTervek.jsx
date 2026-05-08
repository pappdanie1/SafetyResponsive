import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import tervek from '/src/assets/m-tervek.jpg'
import { Helmet } from "react-helmet-async";


const MunkavedelmiTervek = () => {

    return (
        <>
            <Helmet>
                <title>Munkavédelmi tervek - EHS Szolgáltatás</title>
                <meta name="description" content="A munkavédelmi tervek részletesen leírják a munkahelyi egészségvédelem és biztonság biztosítására irányuló intézkedéseket és eljárásokat." />
                <meta property="og:image" content={new URL(tervek, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Munkavédelmi tervek",
                        "description": "Munkavédelmi tervek készítése: mentési terv, egységes és átfogó megelőzési stratégia kialakítása a munkahelyi biztonság érdekében.",
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
                                    src={tervek}
                                    alt="Munkavédelmi tervek – munkahelyi egészségvédelem és biztonság intézkedései"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Munkavédelmi tervek</h1>
                                <p className="subsection-content">
                                    A munkavédelmi tervek olyan dokumentumok, amelyek részletesen leírják a munkahelyi egészségvédelem és biztonság biztosítására irányuló intézkedéseket és eljárásokat. Ezek a tervek tartalmazzák a potenciális veszélyek azonosítását, a kockázatok értékelését és a megelőző intézkedések meghatározását. A munkavédelmi terv magában foglalja a munkavállalók képzését, a szükséges védőfelszerelések használatát, a vészhelyzeti eljárásokat és a biztonsági ellenőrzések rendszerét. A terv célja, hogy biztosítsa a munkavállalók egészségét és biztonságát, csökkentse a balesetek kockázatát, valamint megfeleljen a jogi és szabályozási követelményeknek.
                                </p>
                                <h2 className="subsection-content-h2">
                                    A következő munkavédelmi tervek készítését vállaljuk:
                                </h2>
                                <ul className="custom-list" aria-label="Munkavédelmi tervek típusai">
                                    <li><IoCheckmarkCircle className="check-icon" />Mentési terv elkészítése</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Egységes és átfogó megelőzési stratégia kialakítása</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default MunkavedelmiTervek;