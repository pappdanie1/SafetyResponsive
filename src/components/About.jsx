import React from 'react';
import '../css/About.css'

const About = () => {
    return (
        <div className="about-section">
            <h2 className="about-section__title">Rólunk</h2>
            <p className="about-section__text">
                Az <strong>EHS szolgáltatást</strong> nyújtó cégünk egy dinamikusan fejlődő vállalkozás, amely <strong>Munkavédelem,
                Tűzvédelem és a Környezetvédelem</strong> területén nyújt szaktanácsadást, valamint szolgáltatást.<br></br>
                Célunk, hogy <strong>Biztonságos és Környezettudatos</strong> tevékenységgel támogassuk a <strong>Cégek hosszútávú
                Sikerét</strong>.<br></br>
                30 éves szakmai tapasztalattal és felsőfokú felkészültséggel rendelkezünk, amely szilárd alapot teremt a jogi szabályozásoknak való maradéktalan megfelelés biztosításához.<br></br>
                Továbbá elkötelezettek vagyunk amellett, hogy közös együttműködéssel hozzájáruljunk a Cége folyamatos fejlődéshez.
            </p>
                <div className="about-section__services">
                    <div className="about-section__service">
                        <h3>Munkahelyi Biztonság</h3>
                        <p>Szakértő csapatunk segít a munkahelyi balesetek megelőzésében és a biztonságos munkakörnyezet kialakításában.</p>
                    </div>
                    <div className="about-section__service">
                        <h3>Tűzvédelem</h3>
                        <p>Tűzvédelmi tanácsadást végzünk és a tűzvédelmi feladatok ellátásban nyújtunk támogatást.</p>
                    </div>
                    <div className="about-section__service">
                        <h3>Környezetvédelem</h3>
                        <p>Szakértői tanácsadást nyújtunk környezetvédelmi kérdésekben, és segítünk a környezetvédelmi szabályoknak való megfelelésben.</p>
                    </div>
                    <img src="/src/assets/about.jpg" alt="Cégnév logója" className="about-section__image" />
            </div>
        </div>
    );
};

export default About;