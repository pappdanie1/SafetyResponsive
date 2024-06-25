import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const IdoszakosFelulvizsgalatok = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={"/src/assets/munkavedelmi-felul.jpg"}
                                alt="Időszakos felülvizsgálatok"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h1>Időszakos Felülvizsgálatok</h1>
                            <p className="subsection-content">
                                A Jogszabályokban és szabványokban meghatározott időnközönként
                                időszakos felülvizsgálatok elvégzése szükséges, amely biztosítja
                                a gépek, berendezések, eszközök biztonságos állapotát és a
                                jogszabályi megfelelőséget.
                            </p>
                            <p className="subsection-content">
                                Időszakos munkavédelmi felülvizsgálatok, amelyeket körültekintően
                                nyilvántartunk és elvégzünk:
                            </p>
                            <ul className="custom-list">
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Létrák időszakos felülvizsgálata, dokumentálása
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Tároló polcrendszerek időszakos felülvizsgálata
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Elektromos berendezések érintésvédelmi felülvizsgálata
                                    (hordozható, helyhez kötött)
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Veszélyes berendezések időszakos biztonságtechnikai
                                    felülvizsgálata
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Nyomástartó berendezések időszakos felülvizsgálata
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Kazánok és hőkezelő berendezések műszaki időszakos
                                    felülvizsgálata
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Hegesztő berendezések (elektromos és gázhegesztő)
                                    időszakos felülvizsgálata
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IdoszakosFelulvizsgalatok;