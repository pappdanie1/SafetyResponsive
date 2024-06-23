import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const MunkavedelmiKockazatertekeles = () => {

    return (
        <div className="container" >
            <div className="subsection">
                <h2>Munkavédelmi kockázatértékelés</h2>
                <p className="subsection-content">
                    A Munkavédelmi kockázatértékelés egy folyamat, amely során azonosítjuk, elemezzük és értékeljük a potenciális kockázatokat egy adott tevékenység vagy projekt során. Célja a kockázatok megelőzése vagy minimalizálása, hogy a szervezet biztonságosan és hatékonyan működhessen. Ennek során figyelembe vesszük a lehetséges veszélyeket, azok bekövetkezési valószínűségét és a potenciális hatásukat. A kockázatértékelés eredményei alapján tervezhetők meg a megfelelő kockázatkezelési stratégiák és intézkedések.
                </p>
                <p className="subsection-content">
                    A kockázatértékeléseink tartalmazzák a következőket:
                </p>
                <ul className="custom-list">
                    <li><IoCheckmarkCircle className="check-icon" />A munkahely, munkakörnyezet vizsgálata</li>
                    <li><IoCheckmarkCircle className="check-icon" />Gépek, berendezések kockázatértékelése</li>
                    <li><IoCheckmarkCircle className="check-icon" />Vegyi anyagok és készítmények kockázatértékelése</li>
                    <li><IoCheckmarkCircle className="check-icon" />Képernyős munkahelyek kockázatértékelése</li>
                    <li><IoCheckmarkCircle className="check-icon" />A jellemző munkakörök pszichoszociális kockázatértékelése</li>
                    <li><IoCheckmarkCircle className="check-icon" />Kézi anyagmozgatás kockázatértékelése</li>
                </ul>
            </div>
        </div>
    )
}

export default MunkavedelmiKockazatertekeles;