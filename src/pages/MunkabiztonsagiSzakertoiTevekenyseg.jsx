import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import "../css/Occupational.css"
import "../css/Cards.css"


const MunkabiztonsagiSzakertoiTevekenyseg = () => {

  return (
    <div className="container">
      <section className="section">
        <div className="subsection">
          <div className="content-wrapper">
            <div className="image-container">
              <img src={"/src/assets/MunkabiztonsagiSzakertoiTevekenyseg.jpg"} alt="Image description" className="image" />
            </div>
            <div className="text-container">
              <h1>Munkabiztonsági Szakértői tevékenység</h1>
              <p className="subsection-content-c">
                A Magyar Mérnöki Kamara által jóváhagyott szakértői területek:
              </p>
              <p className="subsection-content">
                <strong>
                  Mb2-SZ – Anyagmozgatás technológiája és eszközeinek biztonsága
                </strong>
              </p>
              <p className="subsection-content-b">
                A szakértő tevékenységei ezen a területen:
              </p>
              <ul className="custom-list">
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
              <p className="subsection-content">
                <strong>
                  Mb5-SZ – Emelőgép technológiája és eszközeinek biztonsága
                </strong>
              </p>
              <p className="subsection-content-b">
                Ezen a szakterületen a munkabiztonsági szakértő feladatai:
              </p>
              <ul className="custom-list">
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
              <p className="subsection-content">
                <strong>
                  Mb24-SZ – Üzem és munkaszervezés
                </strong>
              </p>
              <p className="subsection-content-b">
                A szakértő tevékenységei üzem- és munkaszervezési szakterületen:
              </p>
              <ul className="custom-list">
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
      </section>
    </div>
  );
}

export default MunkabiztonsagiSzakertoiTevekenyseg