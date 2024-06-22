import React from "react";
import "../css/Occupational.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import SafetyCard from "../components/SafetyCard";

const OccupationalSafety = () => {
    
    return (
        <div className="container">
            <SafetyCard head={"asd"} text={"something"} img={"/src/assets/logo.png"}/>
            <SafetyCard head={"lofasz"} text={"asd"} img={"/src/assets/img1.jpg"}/>
            <SafetyCard head={"asd"} text={"something"} img={"/src/assets/logo.png"}/>
            <section className="section">
                <h1>Munkavédelem</h1>
                <div className="subsection">
                    <h2>1. Munkavédelmi Szabályzat</h2>
                    <p className="subsection-content">
                        A munkáltatók jogszabályokban meghatározott kötelezettségeinek
                        teljesítése érdekében javasolt egységes szerkezetű munkavédelmi
                        dokumentum, Munkavédelmi Szabályzat készítése, amely meghatározza a
                        munkavédelemmel kapcsolatos belső szabályokat.A munkáltatók jogszabályokban meghatározott kötelezettségeinek teljesítése érdekében javasolt egységes szerkezetű munkavédelmi dokumentum, Munkavédelmi Szabályzat készítése, amely meghatározza a munkavédelemmel kapcsolatos belső szabályokat.
                        Munkavédelmi Szabályzat rögzíti a munkáltatók és a munkavállalók részére:
                    </p>
                    <p className="subsection-content">
                        Munkavédelmi Szabályzat rögzíti a munkáltatók és a munkavállalók részére:
                    </p>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />A munkavédelmi feladatokat</li>
                        <li><IoCheckmarkCircle className="check-icon" />Az oktatás rendjét</li>
                        <li><IoCheckmarkCircle className="check-icon" />A munkavédelmi eljárások rendjét</li>
                        <li><IoCheckmarkCircle className="check-icon" />A munkavégzésre vonatkozó általános szabályokat és a munkavédelmi eljárások menetét</li>
                        <li><IoCheckmarkCircle className="check-icon" />Az egyéni védőeszköz juttatás előírásait</li>
                        <li><IoCheckmarkCircle className="check-icon" />A foglalkozás-egészségügyi vizsgálat rendjét</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>2. Munkavédelmi ellenőrzések</h2>
                    <p className="subsection-content">
                        A munkabalesetek megelőzésének egyik fontos eleme a rendszeres munkavédelmi szemlék, bejárások tartása, mely során a potenciális veszélyforrások feltárásra kerülhetnek és intézkedni tudunk azok ütemezett elhárítására. A szükséges intézkedések nyomonkövetése fontos, hogy a közösen meghatározott határidőre elvégzésre kerüljenek biztonságtechnikai hiányosságok.
                    </p>
                    <p className="subsection-content">
                        Természetesen Munkavédelmi Hatósági ellenőrzések során is jelen vagyunk és képviseljük ügyfeleink érdekeit.
                    </p>
                </div>
                <div className="subsection">
                    <h2>3. Időszakos felülvizsgálatok</h2>
                    <p className="subsection-content">
                        Jogszabályokban és szabványokban meghatározott időnközönként időszakos felülvizsgálatok elvégzése szükséges, amely biztosítja a gépek, berendezések, eszközök biztonságos állapotát és a jogszabályi megfelelőséget.
                    </p>
                    <p className="subsection-content">
                        Időszakos munkavédelmi felülvizsgálatok, amelyeket körültekintően nyilvántartunk és elvégzünk:
                    </p>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Létrák időszakos felülvizsgálata, dokumentálása</li>
                        <li><IoCheckmarkCircle className="check-icon" />Tároló polcrendszerek időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Elektromos berendezések érintésvédeli felülvizsgálata (hordozható, helyhez kötött)</li>
                        <li><IoCheckmarkCircle className="check-icon" />Veszélyes berendezések időszakos biztonságtechnikai felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Nyomástartó berendezések időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Kazánok és hőkezelő berendezések műszaki időszakos felülvizsgálata</li>
                        <li><IoCheckmarkCircle className="check-icon" />Hegesztő berendezések (elektromos és gázhegesztő) időszakos felülvizsgálata</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>4. Balesetkivizsgálás</h2>
                    <p className="subsection-content">
                        Fontos mindannyiónk számára, hogy minden baleset kivizsgálásra kerüljön, még azon események is, amelyek nem jártak sérüléssel. Részletes kivizsgálással meghatározhatóak a gyökérokok, amelyek elhárításával elkerülhetőek az esetlegesen súlyos balesetek is.
                        Természetesen a munkaidő kieséssel járó balesetekkel, kapcsolatos hatósági ügyintézést is végezzük kompletten.
                    </p>
                    <p className="subsection-content">
                        Balesetek, amelyeket kivizsgálunk:
                    </p>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />Súlyos munkabaleset</li>
                        <li><IoCheckmarkCircle className="check-icon" />3 munkanapot meghaladó munkaidő kieséssel járó baleset</li>
                        <li><IoCheckmarkCircle className="check-icon" />1-3 munkanapot meghaladó munkaidő kieséssel járó baleset</li>
                        <li><IoCheckmarkCircle className="check-icon" />Elsősegély-nyújtással járó baleset</li>
                        <li><IoCheckmarkCircle className="check-icon" />Kvázi baleset</li>
                        <li><IoCheckmarkCircle className="check-icon" />Úti balesetek</li>
                    </ul>
                </div>
                <div className="subsection">
                    <h2>5. Üzembehelyezések</h2>
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
                <div className="subsection">
                    <h2>6. Munkavédelmi oktatás</h2>
                    <p className="subsection-content">
                        A jogszabályi követelmének alapján minden munkavállalót munkavédelmi oktatásban kell részesíteni, amely során megismeri az egészséget nem veszélyeztető, biztonságos munkavégzés feltételeit.
                    </p>
                    <p className="subsection-content">
                        Munkavédelmi oktatás, amelyeket hatékonyan elvégzünk:
                    </p>
                    <ul className="custom-list">
                        <li><IoCheckmarkCircle className="check-icon" />1. Előzetes munkavédelmi oktatás</li>
                        <li className="li-2" >•	Munkába álláskor</li>
                        <li className="li-2" >•	Munkahely vagy munkakör megváltozásakor, valamint az egészséget nem veszélyeztető és biztonságos munkavégzés követelményeinek változásakor</li>
                        <li className="li-2" >•	Munkaeszköz átalakításakor vagy új munkaeszköz üzembe helyezésekor</li>
                        <li className="li-2" >•	Új technológia bevezetésekor</li>
                        <li><IoCheckmarkCircle className="check-icon" />Kvázi baleset</li>
                        <li><IoCheckmarkCircle className="check-icon" />Úti balesetek</li>
                    </ul>
                </div>
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