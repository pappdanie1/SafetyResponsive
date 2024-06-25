import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const ISO45001MEBIR = () => {

    return (
        <div className="container">
            <section className="section">
                <div className="subsection">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={"/src/assets/mebir.jpg"}
                                alt="ISO 45001 MEBIR"
                                className="image"
                            />
                        </div>
                        <div className="text-container">
                            <h1>ISO 45001 MEBIR</h1>
                            <p className="subsection-content">
                                Az ISO 45001 egy nemzetközi szabvány, amely a munkahelyi
                                egészségvédelem és biztonság irányítási rendszerére vonatkozik.
                                Célja, hogy segítse a szervezeteket a munkahelyi balesetek és
                                egészségkárosodások megelőzésében, valamint a munkavállalók
                                jólétének javításában. Az ISO 45001 szabvány követelményei közé
                                tartozik a kockázatok azonosítása és értékelése, a munkavállalói
                                részvétel biztosítása, valamint a jogi és egyéb követelmények
                                betartása. Az irányítási rendszer folyamatos fejlesztésére
                                összpontosít, elősegítve a biztonságos és egészséges
                                munkakörnyezet kialakítását. A szabvány bevezetése és tanúsítása
                                növeli a szervezet hitelességét és versenyképességét, valamint
                                csökkenti a munkahelyi balesetek és betegségek számát.
                            </p>
                            <p className="subsection-content">
                                Támogatásaink a MEBIR alkalmazásával kapcsolatban:
                            </p>
                            <ul className="custom-list">
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Rendszer kezelése, dokumentálása
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Auditok bonyolítása
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Vezetőségi átvizsgálás
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Jogszabály regiszter
                                </li>
                                <li>
                                    <IoCheckmarkCircle className="check-icon" />
                                    Érdekelt felek elvárásai, stb.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ISO45001MEBIR;