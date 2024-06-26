import React from "react";

const MunkavedelmiEllenorzesek = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={"/src/assets/munkavedelmi-ell.jpg"}
                                alt="Munkavédelmi Ellenőrzések"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Munkavédelmi Ellenőrzések</h1>
                            <p className="subsection-content">
                                A munkabalesetek megelőzésének egyik fontos eleme a rendszeres
                                munkavédelmi szemlék, bejárások tartása, mely során feltárásra
                                kerülnek a potenciális veszélyforrások és intézkedni tudunk azok
                                ütemezett elhárítására. A biztonságot fejlesztő intézkedések
                                nyomonkövetése is szükséges, hogy a biztonságtechnikai hiányosságok
                                a közösen meghatározott határidőre elvégzésre kerüljenek.
                            </p>
                            <p className="subsection-content">
                                Természetesen a Munkavédelmi Hatósági ellenőrzések során is jelen
                                vagyunk és képviseljük ügyfeleink érdekeit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MunkavedelmiEllenorzesek;