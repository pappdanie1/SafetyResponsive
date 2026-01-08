import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import energiahatekonysag from '/src/assets/energiahatekonysag.jpg'


const Energiahatekonysag = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={energiahatekonysag}
                                alt="Energiahatekonysag"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h2>Energiahatékonyság</h2>
                            <p className="subsection-content">
                                Az energiahatékonyság hozzájárul ahhoz, hogy kevesebb energiát használunk ugyanazon feladat
                                elvégzésére, ezáltal csökkentve a pazarlást és a környezeti terhelést. Ez elérhető például modern,
                                alacsony fogyasztású gépek, LED világítás vagy hőszigetelés alkalmazásával. Az energiahatékonyság
                                nemcsak az energiaköltségeket csökkenti, hanem hozzájárul a fenntarthatóbb jövőhöz is.
                            </p>
                            <h2 className="subsection-content">
                                Energetikai Szakreferensi tevékenységük során a következőket biztosítjuk:
                            </h2>
                            <ul className="custom-list">
                                <li><strong>2015. évi LVII. törvény alapján az alábbi tevékenységek elvégzése:</strong></li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Figyelemmel kísérése a Megbízó energiafelhasználásának változásainak, valamint az energiahatékonysági intézkedések megvalósításának.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    A berendezések, technológiai folyamatok vonatkozásában az energetikai folyamatok, megtakarítások nyomon követése érdekében alkalmazott almérők mérési adatainak nyilvántartása és azoknak a jelentésben való feltüntetése.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    A tevékenységéről a törvény végrehajtására kiadott kormányrendeletben meghatározott tartalmú és rendszerességű jelentés adása a Megbízó számára.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Közreműködés a törvény 22/C. §-a szerinti jelentés elkészítésében.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Részvétel a gazdálkodó szervezet alkalmazottai energiahatékonysági szemléletének kialakításában.
                                </li>
                            </ul>
                            
                            <ul className="custom-list">
                                <li><strong>A 122/2015. (V. 26.) Korm. rendelet alapján:</strong></li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Szakmai megfigyelőként és tanácsadóként részvétel a rendszeres energetikai auditálás lefolytatásában, valamint az EN ISO 50001 szabvány szerinti energiagazdálkodási rendszer kialakításában és működésének figyelemmel kísérésében.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Javaslatok megfogalmazása energiahatékony üzemeltetési megoldásokkal, energiahatékonysági fejlesztési lehetőségekkel kapcsolatban.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Gondoskodás a végrehajtott energiahatékonysági fejlesztések, alkalmazott üzemeltetési megoldások által elért energiamegtakarítási eredmények kimutatásáról.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    A Megbízó számára havi jelentés készítése a tevékenységről, a Megbízó tárgyhavi energiafogyasztásának mértékéről és annak értékeléséről a korábbi fogyasztási adatok, beruházások, fejlesztések, valamint egyéb körülmények tükrében.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Összefoglaló éves jelentést készítése a Megbízó számára készített havi jelentések alapján a havi jelentésekkel érintett évet követő év május 15-ig a végrehajtott energiahatékonysági fejlesztések, alkalmazott üzemeltetési megoldások által elért energiamegtakarítási eredményekről, amelyet a Megbízó május 31-ig honlapján közzétesz.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Ellátása az energia beszerzéssel, energiabiztonsággal, energiahatékonysággal kapcsolatos, hatáskörébe utalt feladatoknak.
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Értékelése az energiafelhasználás mérésének, és – ha energiahatékonysági szempontból indokolt – javaslat tétele ideiglenes vagy végleges jelleggel telepítendő mérőeszközök, almérők felszerelésére, mérés-felügyeleti rendszer bevezetésére, továbbá, ha energiahatékonysági szempontból indokolt, mérési terv készítése.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Energiahatekonysag;