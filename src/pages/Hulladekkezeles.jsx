import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import hulladek from '/src/assets/hulladek.jpg'


const Hulladekkezeles = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={hulladek}
                            alt="Example Image 3"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Hulladékkezelés</h2>
                        <p className="subsection-content">
                            A hulladékkezelés magában foglalja a hulladék keletkezésének minimalizálását, szétválasztását, gyűjtését, szállítását, újrahasznosítását és ártalmatlanítását. A hatékony hulladékkezelés csökkenti a környezeti terhelést és elősegíti az erőforrások fenntartható használatát. A vállalatok számára fontos, hogy betartsák a jogszabályi előírásokat és olyan technológiákat alkalmazzanak, amelyek minimalizálják a hulladék mennyiségét és maximalizálják az újrahasznosítást.
                        </p>
                        <p className="subsection-content">
                            Hulladékkezeléssel kapcsolatos szolgáltatásaink:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Javaslatok készítése a hulladékkezelés optimalizálására</li>
                            <li><IoCheckmarkCircle className="check-icon" />Az éves hulladékos adatszolgáltatás elkészítése, hatósághoz történő benyújtása</li>
                            <li><IoCheckmarkCircle className="check-icon" />Hulladék nyilvántartás vezetése</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hulladekkezeles;