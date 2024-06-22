import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const MunkavedelmiOktatas = () => {

    return (
        <div className="container" >
            <div className="subsection">
                <h2>Munkavédelmi oktatás</h2>
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
                    <li><IoCheckmarkCircle className="check-icon" />Időszakos munkavédelmi oktatás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Éves ismétlődő oktatás emelőgépkezelők részére</li>
                    <li><IoCheckmarkCircle className="check-icon" />Elsősegélynyújtó képzés</li>
                </ul>
            </div>
        </div>
    )
}

export default MunkavedelmiOktatas;