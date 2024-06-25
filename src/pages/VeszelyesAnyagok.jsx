import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const VeszelyesAnyagok = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/veszelyes-a.jpg"}
                            alt="Veszélyes anyagok nyilvántartása"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>Veszélyes anyagok nyilvántartása</h2>
                        <p className="subsection-content">
                            A veszélyes anyagok nyilvántartása egy fontos folyamat, amelynek célja a veszélyes anyagok beszerzésének, tárolásának, felhasználásának és megsemmisítésének pontos dokumentálása és nyomon követése. Ez a nyilvántartás segít biztosítani, hogy a veszélyes anyagok kezelése megfeleljen a jogszabályi előírásoknak és a biztonsági követelményeknek, valamint minimalizálja a környezeti és egészségügyi kockázatokat.
                        </p>
                        <p className="subsection-content">
                            A veszélyes anyagok nyilvántartása a következő információkat tartalmazza:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Anyagok azonosítása</li>
                            <li><IoCheckmarkCircle className="check-icon" />Mennyiségi adatok</li>
                            <li><IoCheckmarkCircle className="check-icon" />Tárolási hely</li>
                            <li><IoCheckmarkCircle className="check-icon" />Biztonsági adatlapok (MSDS)</li>
                            <li><IoCheckmarkCircle className="check-icon" />Készletmozgások nyomon követése</li>
                            <li><IoCheckmarkCircle className="check-icon" />Személyi felelősség</li>
                        </ul>
                        <p className="subsection-content">
                            A veszélyes anyagok nyilvántartása nemcsak a jogszabályi megfelelést szolgálja, hanem hozzájárul a munkahelyi biztonság növeléséhez és a környezeti kockázatok csökkentéséhez is. Rendszeres felülvizsgálata és aktualizálása elengedhetetlen a hatékony kockázatkezelés érdekében.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VeszelyesAnyagok;