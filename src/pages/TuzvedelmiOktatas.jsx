import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import okt from '/src/assets/t-okt.jpg'
import { Helmet } from "react-helmet-async";

const TuzvedelmiOktatas = () => {

    return (
        <>
            <Helmet>
                <title>Tűzvédelmi oktatás - EHS Szolgáltatás</title>
                <meta name="description" content="Tűzvédelmi oktatás és képzés: előzetes és időszakos tűzvédelmi oktatás, tűzriadó gyakorlatok bonyolítása képzett kollégáink által." />
                <meta property="og:image" content={new URL(okt, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Tűzvédelmi oktatás",
                        "description": "Tűzvédelmi oktatás és képzés: előzetes és időszakos tűzvédelmi oktatás, tűzriadó gyakorlatok bonyolítása képzett kollégáink által.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "EHS Szolgáltatás",
                            "url": "https://ehs-szolgaltatas.com"
                        },
                        "areaServed": "HU",
                        "serviceType": "Tűzvédelem"
                    }
                `}</script>
            </Helmet>
            <main className="container">
                <article className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={okt}
                                alt="Tűzvédelmi oktatás – munkavállalók tűzmegelőzési és tűzoltási képzése"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Tűzvédelmi oktatás</h1>
                            <p className="subsection-content">
                                A tűzvédelmi oktatás célja, hogy felkészítse a munkavállalókat a tűzmegelőzés szabályaira, a tűzveszélyes helyzetek kezelésére és tűz esetén a helyes reakciókra. Az oktatás során részletesen bemutatjuk a tűzvédelmi előírásokat, a tűzvédelmi rendszereket és a tűzoltó eszközök helyes használatát. Az oktatásnak fontos része a gyakorlatok is, amelyek során a résztvevők megismerkednek a tűzoltó készülékekkel és az evakuációs eljárásokkal. Minden dolgozónak tisztában kell lenni a tűzvédelmi ismeretekkel, hogy megelőzhetőek legyenek a tűzesetek és tűz keletkezése esetén hatékony beavatkozás történjen.
                            </p>
                            <h2 className="subsection-content-h2">
                                Tűzvédelmi oktatások képzett kollégáink által:
                            </h2>
                            <ul className="custom-list" aria-label="Tűzvédelmi oktatások típusai">
                                <li><IoCheckmarkCircle className="check-icon" />Előzetes tűzvédelmi oktatás</li>
                                <li><IoCheckmarkCircle className="check-icon" />Időszakos tűzvédelmi oktatás</li>
                                <li><IoCheckmarkCircle className="check-icon" />Tűzriadó gyakorlatok bonyolítása</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default TuzvedelmiOktatas;