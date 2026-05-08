import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import okt from '/src/assets/k-okt.jpg'
import { Helmet } from "react-helmet-async";

const KornyezetvedelmiOktatas = () => {

    return (
        <>
            <Helmet>
                <title>Környezetvédelmi oktatás - EHS Szolgáltatás</title>
                <meta name="description" content="Környezetvédelmi oktatás alkalmazottak részére: előzetes és időszakos környezetvédelmi képzések a környezettudatosság növelése érdekében." />
                <meta property="og:image" content={new URL(okt, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Környezetvédelmi oktatás",
                        "description": "Környezetvédelmi oktatás alkalmazottak részére: előzetes és időszakos képzések a környezettudatosság növelése érdekében.",
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
                                src={okt}
                                alt="Környezetvédelmi oktatás – alkalmazottak környezettudatossági képzése"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Környezetvédelmi oktatás</h1>
                            <p className="subsection-content">
                                A környezetvédelmi oktatás kulcsfontosságú szerepet játszik a fenntartható jövő biztosításában. Célja, hogy növelje az alkalmazottak környezettudatosságát, valamint tudást és készségeket nyújtson a környezet védelméhez.
                            </p>
                            <h2>A következő oktatásokat biztosítjuk ügyfeleink számára:</h2>
                            <ul className="custom-list" aria-label="Környezetvédelmi oktatások típusai">
                                <li><IoCheckmarkCircle className="check-icon" />Előzetes környezetvédelmi oktatás</li>
                                <li><IoCheckmarkCircle className="check-icon" />Időszakos környezetvédelmi oktatás</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default KornyezetvedelmiOktatas;