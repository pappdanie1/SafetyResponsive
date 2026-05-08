import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import "../css/Occupational.css"
import "../css/Cards.css"
import munkab from '/src/assets/MunkabiztonsagiSzakertoiTevekenyseg.jpg'
import { Helmet } from "react-helmet-async";

const MunkabiztonsagiSzakertoiTevekenyseg = () => {

  return (
    <>
      <Helmet>
        <title>Munkabiztonsági Szakértői tevékenység - EHS Szolgáltatás</title>
        <meta name="description" content="Magyar Mérnöki Kamara által jóváhagyott munkabiztonsági szakértői tevékenység: anyagmozgatás biztonsága, építményigazolványi eljárások, munkavédelmi vizsgálatok." />
        <meta property="og:image" content={new URL(munkab, "https://ehs-szolgaltatas.com").href} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Munkabiztonsági Szakértői tevékenység",
            "description": "Magyar Mérnöki Kamara által jóváhagyott munkabiztonsági szakértői tevékenység: anyagmozgatás biztonsága, emelőgép-technológia, üzem- és munkaszervezés.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "EHS Szolgáltatás",
              "url": "https://ehs-szolgaltatas.com"
            },
            "areaServed": "HU",
            "serviceType": "Munkavédelem"
          }
        `}</script>
      </Helmet>
      <main className="container">
        <article className="section">
          <div className="subsection">
            <div className="content-wrapper">
              <div className="image-container">
                <img
                  src={munkab}
                  alt="Munkabiztonsági Szakértői tevékenység – Magyar Mérnöki Kamara jóváhagyott szakértő"
                  className="image"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="text-container">
                <h1>Munkabiztonsági Szakértői tevékenység</h1>
                <p className="subsection-content-c">
                  A Magyar Mérnöki Kamara által jóváhagyott szakértői területek:
                </p>
                <h2 className="subsection-content-h2">
                  <strong>
                    Mb2-SZ – Anyagmozgatás technológiája és eszközeinek biztonsága
                  </strong>
                </h2>
                <p className="subsection-content-c">
                  A szakértő tevékenységei ezen a területen:
                </p>
                <ul className="custom-list" aria-label="Anyagmozgatás biztonságtechnikai feladatok">
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Anyagmozgatási technológiák biztonságtechnikai elemzése (kézi, gépi, automatizált
                    anyagmozgatás)
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Anyagmozgató eszközök (pl. targoncák, szállítópályák, raklapemelők) munkavédelmi
                    megfelelőségének vizsgálata
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Rakodási, tárolási és szállítási folyamatok kockázatértékelése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Anyagmozgatással kapcsolatos munkautasítások, szabályzatok készítése és
                    véleményezése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Közlekedési utak, rakodóterek biztonságos kialakításának ellenőrzése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Egyéni és kollektív védőintézkedések meghatározása
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Anyagmozgatással összefüggő munkabalesetek kivizsgálása
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Hatósági ellenőrzések szakmai támogatása
                  </li>
                </ul>
                <h2 className="subsection-content-h2">
                  <strong>
                    Mb5-SZ – Emelőgép technológiája és eszközeinek biztonsága
                  </strong>
                </h2>
                <p className="subsection-content-c">
                  Ezen a szakterületen a munkabiztonsági szakértő feladatai:
                </p>
                <ul className="custom-list" aria-label="Emelőgép biztonsági feladatok">
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Emelőgépek (targoncák, daruk, futódaruk, autódaruk, emelőasztalok stb.) időszakos
                    felülvizsgálata
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Emeléstechnológiai folyamatok kockázatelemzése és engedélyezése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Emelési tervek, emelési utasítások készítése és ellenőrzése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Emelőgéphez tartozó segédeszközök (láncok, hevederek, sodronykötelek stb.)
                    megfelelőségének vizsgálata
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Üzembe helyezési és időszakos vizsgálatok végzése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Emelőgép-kezelők munkavédelmi feltételeinek ellenőrzése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Veszélyes emelési műveletek (többgép-emelés, személyemelés) munkavédelmi kontrollja
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Emelőgépekkel kapcsolatos balesetek kivizsgálása
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Hatósági eljárásokban szakértői közreműködés
                  </li>
                </ul>
                <h2 className="subsection-content-h2">
                  <strong>
                    Mb24-SZ – Üzem és munkaszervezés
                  </strong>
                </h2>
                <p className="subsection-content-c">
                  A szakértő tevékenységei üzem- és munkaszervezési szakterületen:
                </p>
                <ul className="custom-list" aria-label="Üzem és munkaszervezési feladatok">
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Munkahelyek, munkahelyi elrendezések munkabiztonsági értékelése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Munkafolyamatok, technológiák biztonságos megszervezésének vizsgálata
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Veszélyes munkák (pl. karbantartás, javítás, tisztítás) munkaszervezési feltételeinek
                    meghatározása
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Üzemi rend, belső közlekedési rendszer biztonságos kialakításának ellenőrzése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Létszám, képesítési és alkalmassági követelmények meghatározása
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Munkavédelmi irányítási rendszer támogatása
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Rendkívüli események, üzemzavarok munkabiztonsági elemzése
                  </li>
                  <li>
                    <IoCheckmarkCircle className="check-icon" />
                    Vezetők és munkavállalók munkaszervezési tanácsadása
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default MunkabiztonsagiSzakertoiTevekenyseg;