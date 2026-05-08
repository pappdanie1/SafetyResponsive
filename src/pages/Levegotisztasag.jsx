import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import levego from '/src/assets/levego.jpg'
import { Helmet } from "react-helmet-async";

const Levegotisztasag = () => {

    return (
        <>
            <Helmet>
                <title>Levegőtisztaság védelem - EHS Szolgáltatás</title>
                <meta name="description" content="Levegőtisztasági védelem: pontforrások engedélyeztetése, légszennyező kibocsátások mérése, éves bevallás, levegőterhelési díj analitika." />
                <meta property="og:image" content={new URL(levego, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Levegőtisztaság védelem",
                        "description": "Levegőtisztasági védelem: pontforrások engedélyeztetése, légszennyező kibocsátások mérése, éves bevallás, levegőterhelési díj analitika.",
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
                                src={levego}
                                alt="Levegőtisztaság védelem – ipari kémény füstje"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Levegőtisztaság védelem</h1>
                            <p className="subsection-content">
                                A levegőtisztasági védelem célja a légszennyezés csökkentése és a levegő minőségének javítása. Ez különösen fontos az emberi egészség védelme, az ökoszisztémák megőrzése és a klímaváltozás hatásainak mérséklése érdekében.
                            </p>
                            <p className="subsection-content">
                                A levegőtisztasági védelemmel kapcsolatban a jogszabályi követelmények teljesítése érdekében a következő szolgáltatásokat biztosítjuk:
                            </p>
                            <ul className="custom-list" aria-label="Levegőtisztasági szolgáltatások">
                                <li><IoCheckmarkCircle className="check-icon" />Pontforrások engedélyeztetése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Légszennyező pontforrás kibocsátások mérése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Éves bevallás elkészítése és beküldése a hatóság felé</li>
                                <li><IoCheckmarkCircle className="check-icon" />Levegőterhelési díj analitika</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Levegotisztasag;