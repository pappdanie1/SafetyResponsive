import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const Katasztrofavedelem = () => {

    return (
        <div className="container" >
            <div className="subsection">
                <h2>Katasztrófavédelem</h2>
                <p className="subsection-content">
                    A vonatkozó jogszabályok alapján (219/2011. (X. 20.) Korm. rendelet) az alsó és felső küszöbértékű veszélyes anyaggal foglalkozó üzem veszélyes ipari védelmi ügyintézőt köteles alkalmazni.  
                </p>
                <p className="subsection-content">
                    Ezen tevékenység kereti között elvégezzük a következőket:
                </p>
                <ul className="custom-list">
                    <li><IoCheckmarkCircle className="check-icon" />A veszélyes üzemeknél bekövetkezett súlyos balesetekkel kapcsolatos jelentési kötelezettséget</li>
                    <li><IoCheckmarkCircle className="check-icon" />Részt veszünk a hatósági ellenőrzéseken, helyszíni szemléken, gyakorlatokon</li>
                    <li><IoCheckmarkCircle className="check-icon" />Kapcsolatot tartunk az iparbiztonsági hatósággal</li>
                    <li><IoCheckmarkCircle className="check-icon" />Megszervezzük, dokumentáljuk a katasztrófavédelmi gyakorlatokat</li>
                    <li><IoCheckmarkCircle className="check-icon" />Súlyos baleset, üzemzavar esetén az eseménnyel kapcsolatos jelentést elkészítsük, ezt követően megküldjük az illetékes hatóság részére</li>
                </ul>
            </div>
        </div>
    )
}

export default Katasztrofavedelem;