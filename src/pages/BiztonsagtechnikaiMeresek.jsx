import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import bmeresek from '/src/assets/b-meresek.jpg'
import { Helmet } from "react-helmet-async";

const BiztonsagtechnikaiMeresek = () => {

    return (
        <>
            <Helmet>
                <title>Biztonságtechnikai mérések | EHS Szolgáltatás</title>
                <meta name="description" content="Biztonságtechnikai mérések: munkahelyi zajmérés, rezgésmérés, légtérmérés és megvilágításmérés a biztonságos munkavégzés érdekében." />
                <meta property="og:image" content={new URL(bmeresek, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Biztonságtechnikai mérések",
                        "description": "Munkahelyi zajmérés, rezgésmérés, légtérmérés és megvilágításmérés a biztonságos munkavégzés érdekében.",
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
                                    src={bmeresek}
                                    alt="Biztonságtechnikai mérések – munkahelyi zajmérés és légtérmérés"
                                    className="image"
                                    width="600"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Biztonságtechnikai mérések</h1>
                                <p className="subsection-content">
                                    A biztonságtechnikai mérések olyan eljárások és műszeres
                                    vizsgálatok, amelyek célja a munkahelyi környezet biztonsági
                                    állapotának felmérése és javítása. A mérések eredményei alapján
                                    azonosíthatók a potenciális veszélyforrások és meghatározhatók a
                                    szükséges védelmi intézkedések, amelyek hozzájárulnak a
                                    munkavállalók egészségének és biztonságának védelméhez. A
                                    rendszeres biztonságtechnikai mérések fontos részét képezik a
                                    munkavédelmi előírások betartásának és a munkahelyi balesetek
                                    megelőzésének.
                                </p>
                                <h2 className="subsection-content-h2">
                                    A következő méréseket végezzük szakértő kollégákkal:
                                </h2>
                                <ul className="custom-list" aria-label="Biztonságtechnikai mérések típusai">
                                    <li><IoCheckmarkCircle className="check-icon" />Munkahelyi zajmérés</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Munkahelyi rezgésmérés</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Munkahelyi légtérmérés</li>
                                    <li><IoCheckmarkCircle className="check-icon" />Megvilágításmérés</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default BiztonsagtechnikaiMeresek;