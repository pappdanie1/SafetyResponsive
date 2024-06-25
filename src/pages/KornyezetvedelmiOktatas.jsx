import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const KornyezetvedelmiOktatas = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/k-okt.jpg"}
                            alt="Example Image 2"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Környezetvédelmi oktatás</h2>
                        <p className="subsection-content">
                            A környezetvédelmi oktatás kulcsfontosságú szerepet játszik a fenntartható jövő biztosításában. Célja, hogy növelje az alkalmazottak környezettudatosságát, valamint tudást és készségeket nyújtson a környezet védelméhez.
                        </p>
                        <p className="subsection-content">
                            A következő oktatásokat biztosítjuk ügyfeleink számára:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Előzetes környezetvédelmi oktatás</li>
                            <li><IoCheckmarkCircle className="check-icon" />Időszakos környezetvédelmi oktatás</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KornyezetvedelmiOktatas;