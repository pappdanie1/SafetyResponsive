import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css'

const About = () => {
    return (
        <div className="about-section">
            <h2 className="about-section__title">Rólunk</h2>
            <p className="about-section__text">
                Az <strong>EHS szolgáltatást</strong> nyújtó cégünk egy dinamikusan fejlődő vállalkozás, amely{' '}
                <Link to="/munkavedelem"><strong>Munkavédelem</strong></Link>,{' '}
                <Link to="/tuzvedelem"><strong>Tűzvédelem</strong></Link>,{' '}
                <Link to="/kornyezetvedelem"><strong>Környezetvédelem</strong></Link>{' '}
                és az <Link to="/energiahatekonysag"><strong>Energiahatékonyság</strong></Link> területén nyújt szaktanácsadást, valamint szolgáltatást.<br></br>
                Célunk, hogy <strong>Biztonságos és Környezettudatos</strong> tevékenységgel támogassuk a <strong>Cégek hosszútávú
                    Sikerét</strong>.<br></br>
                30 éves szakmai tapasztalattal és felsőfokú felkészültséggel rendelkezünk, amely szilárd alapot teremt a jogi szabályozásoknak való maradéktalan megfelelés biztosításához.<br></br>
                Továbbá elkötelezettek vagyunk amellett, hogy közös együttműködéssel hozzájáruljunk a Cége folyamatos fejlődéshez.
            </p>
            <div className="about-section__services">
                <Link to="/munkavedelem" className="about-section__service">
                    <h3>Munkahelyi Biztonság</h3>
                    <p>Szakértő csapatunk segít a munkahelyi balesetek megelőzésében és a biztonságos munkakörnyezet kialakításában.</p>
                </Link>
                <Link to="/tuzvedelem" className="about-section__service">
                    <h3>Tűzvédelem</h3>
                    <p>Tűzvédelmi tanácsadást végzünk és a tűzvédelmi feladatok ellátásban nyújtunk támogatást.</p>
                </Link>
                <Link to="/kornyezetvedelem" className="about-section__service">
                    <h3>Környezetvédelem</h3>
                    <p>Szakértői tanácsadást nyújtunk környezetvédelmi kérdésekben, és segítünk a környezetvédelmi szabályoknak való megfelelésben.</p>
                </Link>
                <Link to="/energiahatekonysag" className="about-section__service">
                    <h3>Energiahatékonyság</h3>
                    <p>Szakértői tanácsadást nyújtunk az energiahatékonyság növelésére, segítve a költségek csökkentését és a fenntartható működés megvalósítását.</p>
                </Link>
            </div>
        </div>
    );
};

export default About;