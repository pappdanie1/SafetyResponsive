import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import oktatas from '/src/assets/m-oktatas.jpg'
import { Helmet } from "react-helmet-async";


const MunkavedelmiOktatas = () => {

    return (
        <>
            <Helmet>
                <title>Munkavédelmi oktatás | EHS Szolgáltatás</title>
                <meta name="description" content="Munkavédelmi oktatás, amelyeket hatékonyan elvégzünk: előzetes és időszakos munkavédelmi oktatás, éves ismétlődő oktatás emelőgépkezelők részére, elsősegélynyújtó képzés." />
                <meta property="og:image" content={new URL(oktatas, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Munkavédelmi oktatás",
                        "description": "Munkavédelmi oktatás: előzetes és időszakos munkavédelmi oktatás, éves ismétlődő oktatás emelőgépkezelők részére, elsősegélynyújtó képzés.",
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
                                    src={oktatas}
                                    alt="Munkavédelmi oktatás – munkavállalók biztonságos munkavégzési képzése"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Munkavédelmi oktatás</h1>
                                <p className="subsection-content">
                                    A jogszabályi követelmények alapján minden munkavállalót
                                    munkavédelmi oktatásban kell részesíteni, amely során megismeri
                                    az egészséget nem veszélyeztető, biztonságos munkavégzés
                                    feltételeit.
                                </p>
                                <p className="subsection-content">
                                    Munkavédelmi oktatás, amelyeket hatékonyan elvégzünk:
                                </p>
                                <ul className="custom-list" aria-label="Munkavédelmi oktatások típusai">
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Előzetes munkavédelmi oktatás :
                                        <ul className="nested-list">
                                            <li className="li-2">Munkába álláskor</li>
                                            <li className="li-2">Munkahely vagy munkakör megváltozásakor, valamint az
                                                egészséget nem veszélyeztető és biztonságos munkavégzés
                                                követelményeinek változásakor</li>
                                            <li className="li-2">Munkaeszköz átalakításakor vagy új munkaeszköz
                                                üzembe helyezésekor</li>
                                            <li className="li-2">Új technológia bevezetésekor</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Időszakos munkavédelmi oktatás
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Éves ismétlődő oktatás emelőgépkezelők részére
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Elsősegélynyújtó képzés
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

export default MunkavedelmiOktatas;