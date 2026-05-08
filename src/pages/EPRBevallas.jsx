import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import epr from '/src/assets/epr.jpg'
import { Helmet } from "react-helmet-async";

const EPRBevallas = () => {

    return (
        <>
            <Helmet>
                <title>EPR gyártói termékfelelőségi díj bevallás - EHS Szolgáltatás</title>
                <meta name="description" content="EPR kiterjesztett gyártói felelősség rendszerének szakértői támogatása. Csomagolások, műanyag termékek, elektromos berendezések és egyéb termékek bevallása." />
                <meta property="og:image" content={new URL(epr, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "EPR gyártói termékfelelőségi díj bevallás",
                        "description": "EPR kiterjesztett gyártói felelősség rendszerének szakértői támogatása. Csomagolások, műanyag termékek, elektromos berendezések és egyéb termékek bevallása.",
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
                                src={epr}
                                alt="EPR gyártói termékfelelőségi díj bevallás – kiterjesztett gyártói felelősség"
                                className="image"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-container">
                            <h1>EPR gyártói termékfelelőségi díj bevallás</h1>
                            <p className="subsection-content">
                                Az EPR (Extended Producer Responsibility, kiterjesztett gyártói felelősség) termékfelelőségi díj olyan környezetvédelmi díj, amelyet a gyártók és forgalmazók kötelesek fizetni a termékeik életciklusának végén keletkező hulladék kezelésére. Az EPR rendszer célja, hogy a gyártók viseljék a felelősséget a termékeik által okozott környezeti hatásokért, különösen a hulladékkezelésért és újrahasznosításért.
                            </p>
                            <h2 className="subsection-content-h2">Az EPR rendszer hatálya alá tartozó termékkategóriák:</h2>
                            <ul className="custom-list" aria-label="EPR hatálya alá tartozó termékek">
                                <li><IoCheckmarkCircle className="check-icon" />Csomagolások</li>
                                <li><IoCheckmarkCircle className="check-icon" />Egyes egyszer használatos műanyag termékek</li>
                                <li><IoCheckmarkCircle className="check-icon" />Elektromos és elektronikus berendezések</li>
                                <li><IoCheckmarkCircle className="check-icon" />Elemek és akkumulátorok</li>
                                <li><IoCheckmarkCircle className="check-icon" />Gépjárművek</li>
                                <li><IoCheckmarkCircle className="check-icon" />Gumiabroncs</li>
                                <li><IoCheckmarkCircle className="check-icon" />Reklámhordozó és irodai papír</li>
                                <li><IoCheckmarkCircle className="check-icon" />Sütőolaj és -zsír</li>
                                <li><IoCheckmarkCircle className="check-icon" />Textil termékek</li>
                                <li><IoCheckmarkCircle className="check-icon" />Fából készült bútorok</li>
                            </ul>
                            <p className="subsection-content">
                                A gyártóknak és forgalmazóknak be kell jelentkezniük a hatóságnál, és jelenteniük kell az EPR rendszer hatálya alá tartozó termékeik mennyiségét és típusát.
                            </p>
                            <p className="subsection-content">
                                A hatóság felé kell megtenni az előző negyedéves kibocsátásra vonatkozó mennyiségi adatszolgáltatást a jogszabályban megadott körforgásos termékkód logika szerint, mely mennyiségi adatokat a koncessziós társaság a hatóságtól kapja meg. Minden negyedévet követő hónap 20-a a adatszolgáltatási határidő.
                            </p>
                            <p className="subsection-content">
                                A hatóság felé megadott mennyiségi adatszolgáltatást a MOHU a hatóságtól kapja meg. Figyelembe véve a miniszteri rendeletben az adott évre kihirdetett EPR díjakat, a MOHU kiállítja az adott gyártó részére az általa forgalomba hozott körforgásos termék kategóriákra és mennyiségekre vonatkozóan a számlát a negyedéves gyártói felelősségi díjról, melynek összegét a gyártó a számla kézhezvételétől számított 15 napon belül fizeti meg a koncessziós társaság részére.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default EPRBevallas;