import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import "../css/Occupational.css"
import "../css/Cards.css"
import szabalyzat from '/src/assets/munkavedelmi-szabalyzat.jpg'
import { Helmet } from "react-helmet-async";


const MunkavedelmiSzabalyzat = () => {
  return (
    <>
      <Helmet>
        <title>Munkavédelmi Szabályzat készítése | EHS Szolgáltatás</title>
        <meta
          name="description"
          content="Munkavédelmi Szabályzat készítése és aktualizálása vállalkozások számára. Jogszabálykövetés, teljes körű dokumentáció, 30 év tapasztalat - biztonságos munkakörnyezetért!"
        />
        <meta property="og:image" content={new URL(szabalyzat, "https://ehs-szolgaltatas.com").href} />
      </Helmet>
      <div className="container">
        <section className="section">
          <div className="subsection">
            <div className="content-wrapper">
              <div className="image-container">
                <img src={szabalyzat} alt="Munkavédelmi Szabályzat" className="image" />
              </div>
              <div className="text-container">
                <h1>Munkavédelmi Szabályzat</h1>
                <p className="subsection-content">
                  A munkáltatók jogszabályokban meghatározott kötelezettségeinek
                  teljesítése érdekében javasolt egységes szerkezetű
                  munkavédelmi dokumentum Munkavédelmi Szabályzat készítése, amely
                  meghatározza a munkavédelemmel kapcsolatos belső szabályokat.
                </p>
                <p className="subsection-content">
                  Munkavédelmi Szabályzat rögzíti a munkáltatók és a
                  munkavállalók részére:
                </p>
                <ul className="custom-list">
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    A munkavédelmi feladatokat
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Az oktatás rendjét
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    A munkavédelmi eljárások rendjét
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    A munkavégzésre vonatkozó általános szabályokat
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Az egyéni védőeszköz juttatás előírásait
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    A foglalkozás-egészségügyi vizsgálat rendjét
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MunkavedelmiSzabalyzat