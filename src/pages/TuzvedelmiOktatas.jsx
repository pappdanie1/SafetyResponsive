import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const TuzvedelmiOktatas = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src="/src/assets/t-okt.jpg"
                            alt="Fire Safety Training"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Tűzvédelmi oktatás</h2>
                        <p className="subsection-content">
                            A tűzvédelmi oktatás célja, hogy felkészítse a munkavállalókat a tűzmegelőzés szabályaira, a tűzveszélyes helyzetek kezelésére és tűz esetén a helyes reakciókra. Az oktatás során részletesen bemutatjuk a tűzvédelmi előírásokat, a tűzvédelmi rendszereket és a tűzoltó eszközök helyes használatát. Az oktatásnak fontos része a gyakorlatok is, amelyek során a résztvevők megismerkednek a tűzoltó készülékekkel és az evakuációs eljárásokkal. Minden dolgozónak tisztában kell lenni a tűzvédelmi ismeretekkel, hogy megelőzhetőek legyenek a tűzesetek és tűz keletkezése esetén hatékony beavatkozás történjen.
                        </p>
                        <p className="subsection-content">
                            Tűzvédelmi oktatások képzett kollégáink által:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Előzetes tűzvédelmi oktatás</li>
                            <li><IoCheckmarkCircle className="check-icon" />Időszakos tűzvédelmi oktatás</li>
                            <li><IoCheckmarkCircle className="check-icon" />Tűzriadó gyakorlatok bonyolítása</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuzvedelmiOktatas;