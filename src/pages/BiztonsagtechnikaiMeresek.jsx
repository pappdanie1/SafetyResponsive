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
            </Helmet>
            <div className="container">
                <section className="section">
                    <div className="subsection">
                        <div className="content-wrapper">
                            <div className="image-container">
                                <img
                                    src={bmeresek}
                                    alt="Biztonságtechnikai mérések"
                                    className="image"
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
                                <p className="subsection-content">
                                    A következő méréseket végezzük szakértő kollégákkal:
                                </p>
                                <ul className="custom-list">
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Munkahelyi zajmérés
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Munkahelyi rezgésmérés
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Munkahelyi légtérmérés
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Megvilágításmérés
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default BiztonsagtechnikaiMeresek;