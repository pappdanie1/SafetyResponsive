import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const MunkavedelmiTervek = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src="/src/assets/m-tervek.jpg" 
                                alt="Munkavédelmi tervek"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h2>Munkavédelmi tervek</h2>
                            <p className="subsection-content">
                                A munkavédelmi tervek olyan dokumentumok, amelyek részletesen leírják a munkahelyi egészségvédelem és biztonság biztosítására irányuló intézkedéseket és eljárásokat. Ezek a tervek tartalmazzák a potenciális veszélyek azonosítását, a kockázatok értékelését és a megelőző intézkedések meghatározását. A munkavédelmi terv magában foglalja a munkavállalók képzését, a szükséges védőfelszerelések használatát, a vészhelyzeti eljárásokat és a biztonsági ellenőrzések rendszerét. A terv célja, hogy biztosítsa a munkavállalók egészségét és biztonságát, csökkentse a balesetek kockázatát, valamint megfeleljen a jogi és szabályozási követelményeknek.
                            </p>
                            <p className="subsection-content">
                                A következő munkavédelmi tervek készítését vállaljuk:
                            </p>
                            <ul className="custom-list">
                                <li><IoCheckmarkCircle className="check-icon" />Mentési terv elkészítése</li>
                                <li><IoCheckmarkCircle className="check-icon" />Egységes és átfogó megelőzési stratégia kialakítása</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MunkavedelmiTervek;