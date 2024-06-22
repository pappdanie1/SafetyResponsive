import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const Uzembehelyezesek = () => {

    return (
        <div className="container" >
            <div className="subsection">
                <h2>Üzembehelyezések</h2>
                <p className="subsection-content">
                    Munkaeszközt üzembe helyezni, valamint használatba venni csak abban az esetben szabad, ha az egészséget nem veszélyeztető és biztonságos munkavégzés követelményeit kielégíti, és rendelkezik az adott munkaeszközre, mint termékre, külön jogszabályban meghatározott gyártói megfelelőségi nyilatkozattal, illetve a megfelelőséget tanúsító egyéb dokumentummal.
                </p>
                <p className="subsection-content">
                    Az üzembehelyezési eljárás során a következőket biztosítjuk:
                </p>
                <ul className="custom-list">
                    <li><IoCheckmarkCircle className="check-icon" />Munkavédelmi szempontú előzetes vizsgálat és az üzembe helyezés elrendelése</li>
                    <li><IoCheckmarkCircle className="check-icon" />Üzembe helyezés előtti kockázatértékelés a berendezésre/folyamatra kockázatcsökkentő intézkedések meghatározásával</li>
                </ul>
            </div>
        </div>
    )
}

export default Uzembehelyezesek;