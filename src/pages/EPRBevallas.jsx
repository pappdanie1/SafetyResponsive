import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


const EPRBevallas = () => {

    return (
        <div className="container">
            <div className="subsection">
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={"/src/assets/epr.jpg"}
                            alt="Example Image 5"
                            className="image"
                        />
                    </div>
                    <div className="text-container">
                        <h2>EPR gyártói termékfelelőségi díj bevallás</h2>
                        <p className="subsection-content">
                            Az EPR (Extended Producer Responsibility, kiterjesztett gyártói felelősség) termékfelelőségi díj olyan környezetvédelmi díj, amelyet a gyártók és forgalmazók kötelesek fizetni a termékeik életciklusának végén keletkező hulladék kezelésére. Az EPR rendszer célja, hogy a gyártók viseljék a felelősséget a termékeik által okozott környezeti hatásokért, különösen a hulladékkezelésért és újrahasznosításért.
                        </p>
                        <p className="subsection-content">
                            Az EPR rendszer keretében a következő termékkategóriákra vonatkozhatnak díjak:
                        </p>
                        <ul className="custom-list">
                            <li><IoCheckmarkCircle className="check-icon" />Csomagolások</li>
                            <li><IoCheckmarkCircle className="check-icon" />Egyes egyszer használatos műanyag termékek</li>
                            <li><IoCheckmarkCircle className="check-icon" />Elektromos és elektronikus berendezések</li>
                            <li><IoCheckmarkCircle className="check-icon" />Elemek és akkumulátorok</li>
                            <li><IoCheckmarkCircle className="check-icon" />Gépjárművek</li>
                            <li><IoCheckmarkCircle className="check-icon" />Gumiabroncs</li>
                            <li><IoCheckmarkCircle className="check-icon" />Reklámhordozó és irodai papír</li>
                            <li><IoCheckmarkCircle className="check-icon" />Sütőolaj és -zsír</li>
                            <li><IoCheckmarkCircle className="check-icon" />Textil termékek</li>
                            <li><IoCheckmarkCircle className="check-icon" />Fából készült bútorok</li>
                        </ul>
                        <p className="subsection-content">
                            A gyártóknak és forgalmazóknak be kell jelentkezniük a hatóságnál, és jelenteniük kell az EPR rendszer hatálya alá tartozó termékeik mennyiségét és típusát.
                        </p>
                        <p className="subsection-content">
                            A hatóság felé kell megtenni az előző negyedéves kibocsátásra vonatkozó mennyiségi adatszolgáltatást a jogszabályban megadott körforgásos termékkód logika szerint, mely mennyiségi adatokat a koncessziós társaság a hatóságtól kapja meg. Minden negyedévet követő hónap 20-a a adatszolgáltatási határidő.
                        </p>
                        <p className="subsection-content">
                            A hatóság felé megadott mennyiségi adatszolgáltatást a MOHU a hatóságtól kapja meg. Figyelembe véve a miniszteri rendeletben az adott évre kihirdetett EPR díjakat, a MOHU kiállítja az adott gyártó részére az általa forgalomba hozott körforgásos termék kategóriákra és mennyiségekre vonatkozóan a számlát a negyedéves gyártói felelősségi díjról, melynek összegét a gyártó a számla kézhezvételétől számított 15 napon belül fizeti meg a koncessziós társaság részére.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EPRBevallas;