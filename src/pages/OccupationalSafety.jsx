import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import SafetyCard from "../components/SafetyCard";
import { Link } from "react-router-dom";

const OccupationalSafety = () => {
    
    return (
        <div className="cards-container">
            <Link to="/munkavedelmi-szabalyzat">
                <SafetyCard head={"Munkavédelmi Szabályzat"} img={"/src/assets/logo.png"} />
            </Link>
            <Link to="/munkavedelmi-ellenorzesek">
                <SafetyCard head={"Munkavédelmi ellenőrzések"} img={"/src/assets/logo.png"} />
            </Link>
            <Link to="/idoszakos-felulvizsgalatok">
                <SafetyCard head={"Időszakos felülvizsgálatok"} img={"/src/assets/logo.png"} />
            </Link>
            <Link to="/balesetkivizsgalas">
                <SafetyCard head={"Balesetkivizsgálás"} img={"/src/assets/logo.png"} />
            </Link>
            <Link to="/uzembehelyezesek">
                <SafetyCard head={"Üzembehelyezések"} img={"/src/assets/logo.png"} />
            </Link>
            <Link to="/munkavedelmi-oktatas">
                <SafetyCard head={"Munkavédelmi oktatás"} img={"/src/assets/logo.png"} />
            </Link>
            <section className="section" >
                <h1>Munkavédelem</h1>
                <div className="subsection">
                    <h2>7. Munkavédelmi kockázatértékelés</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />A munkahely, munkakörnyezet vizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Gépek, berendezések kockázatértékelése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Vegyi anyagok és készítmények kockázatértékelése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Képernyős munkahelyek kockázatértékelése</li>
                        <li><IoCheckmarkCircle className="check-icon" />A jellemző munkakörök pszichoszociális kockázatértékelése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Kézi anyagmozgatás kockázatértékelése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>8. Biztonságtechnikai mérések</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Munkahelyi zajmérés</li>
                        <li><IoCheckmarkCircle className="check-icon" />Munkahelyi rezgésmérés</li>
                        <li><IoCheckmarkCircle className="check-icon" />Munkahelyi légtérmérés</li>
                        <li><IoCheckmarkCircle className="check-icon" />Megvilágításmérés</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>9. Veszélyes munkák</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Zárt térben történő munkavégzés engedélyezése, feltételeinek meghatározása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Magasban történő munkavégzés engedélyezése, feltételeinek meghatározása</li>
                        <li><IoCheckmarkCircle className="check-icon" />LOTO (kiszakaszolási eljárás) eljárás, bevezetése, alkalmazása</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>10. ISO45001 szabvány szerinti Munkahelyi Egészségvédelem és Biztonság Irányítási Rendszer</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Rendszer kezelése, dokumentálása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Auditok bonyolítása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Vezetőségi átvizsgálás</li>
                        <li><IoCheckmarkCircle className="check-icon" />Jogszabály regiszter</li>
                        <li><IoCheckmarkCircle className="check-icon" />Érdekelt felek elvárásai, stb.</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>11.	Emelőgépek</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Daruk, emelőeszközök időszakos felülvizsgálatának bonyolítása (szerkezeti vizsgálat, fővizsgálat, időszakos biztonsági vizsgálat) darugépkönyvek vezetése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Targoncák (emelővillás, gyalog kíséretű, vezetőállásos, vontató, stb.) időszakos felülvizsgálatának bonyolítása (szerkezeti vizsgálat, fővizsgálat, időszakos biztonsági vizsgálat) Targoncagépkönyvek vezetése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Teherfelvevő eszközök, függesztékek időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Gépkezelési jogosultságok ellenőrzése</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>12.	Munkavédelmi tervek</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Mentési terv elkészítése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Egységes és átfogó megelőzési stratégia kialakítása</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>13.	Építési munkahelyek munkavédelmi feladatai</h2>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Biztonsági és egészségvédelmi koordinátori feladatok ellátása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Biztonsági és egészségvédelmi terv készítése</li>
                        <li><IoCheckmarkCircle className="check-icon" />Építési munkahelyek rendszeres munkavédelmi ellenőrzése</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default OccupationalSafety;