import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import kataszt from '/src/assets/kataszt.jpg'
import { Helmet } from "react-helmet-async";

const Katasztrofavedelem = () => {

    return (
        <>
            <Helmet>
                <title>Katasztrófavédelem - EHS Szolgáltatás</title>
                <meta name="description" content="Veszélyes ipari védelmi ügyintézés a 219/2011. Korm. rendelet alapján. Alsó és felső küszöbértékű veszélyes anyagokkal foglalkozó üzemek támogatása." />
                <meta property="og:image" content={new URL(kataszt, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Katasztrófavédelem",
                        "description": "Veszélyes ipari védelmi ügyintézés a 219/2011. Korm. rendelet alapján. Alsó és felső küszöbértékű veszélyes anyagokkal foglalkozó üzemek támogatása.",
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
                                src={kataszt}
                                alt="Katasztrófavédelem – veszélyes ipari üzem biztonsági ügyintézése"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Katasztrófavédelem</h1>
                            <p className="subsection-content">
                                A vonatkozó jogszabályok alapján (219/2011. (X. 20.) Korm. rendelet) az alsó és felső küszöbértékű veszélyes anyaggal foglalkozó üzem veszélyes ipari védelmi ügyintézőt köteles alkalmazni.
                            </p>
                            <h2>Ezen tevékenység keretein belül elvégezzük a következőket:</h2>
                            <ul className="custom-list" aria-label="Katasztrófavédelmi feladatok">
                                <li><IoCheckmarkCircle className="check-icon" />A veszélyes üzemeknél bekövetkezett súlyos balesetekkel kapcsolatos jelentési kötelezettséget</li>
                                <li><IoCheckmarkCircle className="check-icon" />Részt veszünk a hatósági ellenőrzéseken, helyszíni szemléken, gyakorlatokon</li>
                                <li><IoCheckmarkCircle className="check-icon" />Kapcsolatot tartunk az iparbiztonsági hatósággal</li>
                                <li><IoCheckmarkCircle className="check-icon" />Megszervezzük, dokumentáljuk a katasztrófavédelmi gyakorlatokat</li>
                                <li><IoCheckmarkCircle className="check-icon" />Súlyos baleset, üzemzavar esetén az eseménnyel kapcsolatos jelentést elkészítsük, ezt követően megküldjük az illetékes hatóság részére</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Katasztrofavedelem;