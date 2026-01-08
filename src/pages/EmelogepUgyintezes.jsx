import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import emelogep from '/src/assets/emelogep.jpg'


const EmelogepUgyintezes = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={emelogep}
                                alt="Emelőgép ügyintézés"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h2>Emelőgép ügyintézés</h2>
                            <p className="subsection-content">
                                Az emelőgép ügyintézés magában foglalja az emelőgépek telepítésével, üzemeltetésével és karbantartásával kapcsolatos adminisztratív és jogi feladatok ellátását. Ez a folyamat tartalmazza az emelőgépek üzembehelyezését, rendszeres időszakos vizsgálatokat és az ezekhez kapcsolódó dokumentációk vezetését. Az ügyintézés során biztosítani kell, hogy az emelőgépek megfeleljenek a vonatkozó biztonsági és műszaki előírásoknak, valamint hogy a kezelők megfelelő képzésben részesüljenek és rendelkezzenek a szükséges képesítésekkel. A szakszerű ügyintézés hozzájárul a biztonságos üzemeltetéshez és a balesetek megelőzéséhez.
                            </p>
                            <p className="subsection-content">
                                Az emelőgép ügyintézés során általunk elvégzett feladatok:
                            </p>
                            <ul className="custom-list">
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Daruk, emelőeszközök időszakos felülvizsgálatának bonyolítása (szerkezeti vizsgálat, fővizsgálat, időszakos biztonsági vizsgálat) darugépkönyvek vezetése
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Targoncák (emelővillás, gyalog kíséretű, vezetőállásos, vontató, stb.) időszakos felülvizsgálatának bonyolítása (szerkezeti vizsgálat, fővizsgálat, időszakos biztonsági vizsgálat) Targoncagépkönyvek vezetése
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Teherfelvevő eszközök, függesztékek időszakos felülvizsgálata
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Gépkezelési jogosultságok ellenőrzése
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EmelogepUgyintezes;