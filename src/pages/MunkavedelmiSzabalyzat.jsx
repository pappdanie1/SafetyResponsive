import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import "../css/Occupational.css"


const MunkavedelmiSzabalyzat = () => {

    return (
        <div className="container">
            <section className="section" >
                <div className="subsection">
                    <h1>Munkavédelmi Szabályzat</h1>
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
            </section>
        </div>
    )
}

export default MunkavedelmiSzabalyzat