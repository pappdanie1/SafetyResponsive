import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import hulladek from '/src/assets/hulladek.jpg'
import { Helmet } from "react-helmet-async";

const Hulladekkezeles = () => {

    return (
        <>
            <Helmet>
                <title>Hulladékkezelés és hulladékgazdálkodás - EHS Szolgáltatás</title>
                <meta name="description" content="Szakszerű hulladékkezelési szolgáltatások: hulladékkezelés optimalizálása, éves adatszolgáltatás készítése, hulladék nyilvántartás vezetése." />
                <meta property="og:image" content={new URL(hulladek, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Hulladékkezelés és hulladékgazdálkodás",
                        "description": "Szakszerű hulladékkezelési szolgáltatások: hulladékkezelés optimalizálása, éves adatszolgáltatás készítése, hulladék nyilvántartás vezetése.",
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
                                src={hulladek}
                                alt="Hulladékkezelés – ipari hulladék szétválogatása és nyilvántartása"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Hulladékkezelés</h1>
                            <p className="subsection-content">
                                A hulladékkezelés magában foglalja a hulladék keletkezésének minimalizálását, szétválasztását, gyűjtését, szállítását, újrahasznosítását és ártalmatlanítását. A hatékony hulladékkezelés csökkenti a környezeti terhelést és elősegíti az erőforrások fenntartható használatát. A vállalatok számára fontos, hogy betartsák a jogszabályi előírásokat és olyan technológiákat alkalmazzanak, amelyek minimalizálják a hulladék mennyiségét és maximalizálják az újrahasznosítást.
                            </p>
                            <h2 className="subsection-content-h2">Hulladékkezeléssel kapcsolatos szolgáltatásaink:</h2>
                            <ul className="custom-list" aria-label="Hulladékkezelési szolgáltatások">
                                <li><IoCheckmarkCircle className="check-icon" />Javaslatok készítése a hulladékkezelés optimalizálására</li>
                                <li><IoCheckmarkCircle className="check-icon" />Az éves hulladékos adatszolgáltatás elkészítése, hatósághoz történő benyújtása</li>
                                <li><IoCheckmarkCircle className="check-icon" />Hulladék nyilvántartás vezetése</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Hulladekkezeles;