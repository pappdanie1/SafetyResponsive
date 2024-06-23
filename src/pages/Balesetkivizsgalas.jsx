import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const Balesetkivizsgalas = () => {

    return (
        <div className="container" >
            <div className="subsection">
                <h2>Balesetkivizsgálás</h2>
                <p className="subsection-content">
                    Fontos mindannyiónk számára, hogy minden baleset kivizsgálásra kerüljön, még azon események is, amelyek nem jártak sérüléssel. Részletes kivizsgálással meghatározhatóak a gyökérokok, amelyek elhárításával elkerülhetőek az esetlegesen súlyos balesetek is. 
                    Természetesen a munkaidő kieséssel járó balesetekkel, kapcsolatos hatósági ügyintézést is végezzük kompletten.
                </p>
                <p className="subsection-content">
                    Balesetek, amelyeket kivizsgálunk:
                </p>
                <ul className="custom-list">
                    <li><IoCheckmarkCircle className="check-icon" />Súlyos munkabaleset</li>
                    <li><IoCheckmarkCircle className="check-icon" />3 munkanapot meghaladó munkaidő kieséssel járó baleset</li>
                    <li><IoCheckmarkCircle className="check-icon" />1-3 munkanapot meghaladó munkaidő kieséssel járó baleset</li>
                    <li><IoCheckmarkCircle className="check-icon" />Elsősegély-nyújtással járó baleset</li>
                    <li><IoCheckmarkCircle className="check-icon" />Kvázi baleset</li>
                    <li><IoCheckmarkCircle className="check-icon" />Úti balesetek</li>
                </ul>
            </div>
        </div>
    )
}

export default Balesetkivizsgalas;