import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../css/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Adatvédelmi Tájékoztató | EHS Szolgáltatás</title>
        <meta name="description" content="Az EHS Szolgáltatás adatvédelmi tájékoztatója: sütik, kapcsolatfelvétel során kezelt adatok és jogorvoslati lehetőségek." />
      </Helmet>
      <div className="privacy-container">
        <div className="privacy-content">
          <h1>Adatvédelmi Tájékoztató</h1>
        
        <section>
          <h2>1. Általános információk</h2>
          <p>
            Jelen adatvédelmi tájékoztató az EHS Szolgáltatás (ehs-szolgaltatas.com) 
            weboldalon történő adatkezelésről nyújt információt.
          </p>
          <p><strong>Adatkezelő:</strong> Papp Zsolt EHS Specialista</p>
          <p><strong>Elérhetőség:</strong> info@ehs-szolgaltatas.com</p>
        </section>

        <section>
          <h2>2. Sütik (Cookies) használata</h2>
          <p>
            Weboldalunk sütiket használ a felhasználói élmény javítása és a látogatói 
            statisztikák gyűjtése érdekében.
          </p>
          
          <h3>2.1 Analitikai sütik</h3>
          <p>
            Google Analytics segítségével anonim statisztikákat gyűjtünk arról, 
            hogy látogatóink hogyan használják weboldalunkat. Ezek az adatok:
          </p>
          <ul>
            <li>Oldalmegtekintések száma</li>
            <li>Látogatási idő</li>
            <li>Földrajzi elhelyezkedés (ország szintjén)</li>
            <li>Böngésző és eszköz típusa</li>
            <li>Honnan érkeztek a látogatók</li>
          </ul>
          <p>
            Ezek az adatok <strong>név nélkül, anonim módon</strong> kerülnek rögzítésre, 
            és kizárólag statisztikai célokat szolgálnak.
          </p>
        </section>

        <section>
          <h2>3. Kapcsolatfelvételi űrlap</h2>
          <p>
            Amikor üzenetet küld számunkra a kapcsolatfelvételi űrlapon keresztül, 
            az alábbi adatokat kezeljük:
          </p>
          <ul>
            <li>Név</li>
            <li>Email cím</li>
            <li>Üzenet tartalma</li>
          </ul>
          <p>
            Ezeket az adatokat kizárólag az Ön megkeresésére való válaszadás céljából 
            kezeljük, és harmadik félnek nem adjuk át.
          </p>
          <p><strong>Adatkezelés jogalapja:</strong> Az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont)</p>
          <p><strong>Adatkezelés időtartama:</strong> Az ügyintézés lezárultáig, illetve az esetleges jogi igények érvényesítéséhez szükséges ideig.</p>
        </section>

        <section>
          <h2>4. Az Ön jogai</h2>
          <p>Ön jogosult:</p>
          <ul>
            <li>Tájékoztatást kérni az általunk kezelt személyes adatairól</li>
            <li>Kérni adatai helyesbítését vagy törlését</li>
            <li>Tiltakozni az adatkezelés ellen</li>
            <li>Kérni adatai korlátozását</li>
            <li>Adathordozhatóságot kérni</li>
          </ul>
          <p>
            Jogai gyakorlásához vegye fel velünk a kapcsolatot az 
            <strong> info@ehs-szolgaltatas.com</strong> email címen.
          </p>
        </section>

        <section>
          <h2>5. Sütik kezelése</h2>
          <p>
            Bármikor módosíthatja süti beállításait a weboldal bal alsó sarkában 
            található süti ikon segítségével, vagy böngészője beállításaiban.
          </p>
        </section>

        <section>
          <h2>6. Jogorvoslati lehetőség</h2>
          <p>
            Adatvédelmi kérdésekben panasszal fordulhat a Nemzeti Adatvédelmi és 
            Információszabadság Hatósághoz (NAIH):
          </p>
          <p>
            <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.<br/>
            <strong>Telefon:</strong> +36 (1) 391-1400<br/>
            <strong>Email:</strong> ugyfelszolgalat@naih.hu<br/>
            <strong>Weboldal:</strong> <a href="https://naih.hu" target="_blank" rel="noopener noreferrer">www.naih.hu</a>
          </p>
        </section>

        <section>
          <h2>7. Módosítások</h2>
          <p>
            Fenntartjuk a jogot jelen adatvédelmi tájékoztató módosítására. 
            A módosításokról weboldalunkon keresztül értesítjük látogatóinkat.
          </p>
          <p><strong>Utolsó frissítés:</strong> 2025. február 16.</p>
        </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;