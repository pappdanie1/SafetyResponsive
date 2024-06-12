import React from 'react';
import '../css/About.css'

const About = () => {
    return (
        <div className="about-section">
            <h2 className="about-section__title">Rólunk</h2>
            <p className="about-section__text">
                A [Cégnév] egy dinamikusan fejlődő vállalat, amely [céged tevékenysége] területén nyújt szolgáltatásokat. Célunk, hogy [céged célja] a [célközönség] számára. Csapatunk [csapatod leírása], akik elkötelezettek amellett, hogy [értékeid].
            </p>
                <div className="about-section__services">
                    <div className="about-section__service">
                        <h3>Munkahelyi Biztonság</h3>
                        <p>Szakértő csapatunk segít a munkahelyi balesetek megelőzésében és a biztonságos munkakörnyezet kialakításában.</p>
                    </div>
                    <div className="about-section__service">
                        <h3>Tűzvédelem</h3>
                        <p>Tűzvédelmi tanácsadást, kockázatértékelést, tűzoltórendszerek telepítését és karbantartását végezzük.</p>
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