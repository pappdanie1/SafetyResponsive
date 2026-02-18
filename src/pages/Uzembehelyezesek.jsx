import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import uzembeh from '/src/assets/uzembeh.jpg'
import { Helmet } from "react-helmet-async";


const Uzembehelyezesek = () => {

    return (
        <>
            <Helmet>
                <title>Üzembehelyezések - Munkaeszközök biztonságos üzembe helyezése | EHS Szolgáltatás</title>
                <meta
                name="description"
                content="Munkaeszközök üzembehelyezése: előzetes munkavédelmi vizsgálat, jogszabálykövető dokumentáció és kockázatértékelés. Biztonságos munkavégzés profi támogatással, 30 év szakértelemmel!"
                />
                <meta property="og:image" content={new URL(uzembeh, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <div className="container">
                <section className="section">
                    <div className="subsection">
                        <div className="content-wrapper">
                            <div className="image-container">
                                <img
                                    src={uzembeh}
                                    alt="Üzembehelyezések"
                                    className="image"
                                />
                            </div>
                            <div className="text-container">
                                <h1>Üzembehelyezések</h1>
                                <p className="subsection-content">
                                    Munkaeszközt üzembe helyezni, valamint használatba venni csak
                                    abban az esetben szabad, ha az egészséget nem veszélyeztető és
                                    biztonságos munkavégzés követelményeit kielégíti, és rendelkezik
                                    az adott munkaeszközre, mint termékre, külön jogszabályban
                                    meghatározott gyártói megfelelőségi nyilatkozattal, illetve a
                                    megfelelőséget tanúsító egyéb dokumentummal.
                                </p>
                                <p className="subsection-content">
                                    Az üzembehelyezési eljárás során a következőket biztosítjuk:
                                </p>
                                <ul className="custom-list">
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Munkavédelmi szempontú előzetes vizsgálat és az üzembe helyezés
                                        elrendelése
                                    </li>
                                    <li>
                                        <IoCheckmarkCircle className="check-icon" />
                                        Üzembe helyezés előtti kockázatértékelés a berendezésre/folyamatra
                                        kockázatcsökkentő intézkedések meghatározásával
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

export default Uzembehelyezesek;