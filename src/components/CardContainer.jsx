import React from "react";
import { FaHelmetSafety, FaFireExtinguisher } from "react-icons/fa6";
import { MdNaturePeople, MdEnergySavingsLeaf } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import '../css/CardContainer.css'

const CardContainer = () => {
    const navigate = useNavigate();

    return (
        <div className="card-container">

            <div className="card" onClick={() => navigate("/munkavedelem")}>
                <FaHelmetSafety className="icon" />
                <h1 className="title-h1">Munkavédelem</h1>
                <ul>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/munkabiztonsagi-szakertoi-tevekenyseg" onClick={e => e.stopPropagation()}>Munkabiztonsági Szakértői tevékenység</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/munkavedelmi-szabalyzat" onClick={e => e.stopPropagation()}>Munkavédelmi Szabályzat</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/munkavedelmi-ellenorzesek" onClick={e => e.stopPropagation()}>Munkavédelmi ellenőrzések</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/idoszakos-felulvizsgalatok" onClick={e => e.stopPropagation()}>Időszakos felülvizsgálatok</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/balesetkivizsgalas" onClick={e => e.stopPropagation()}>Balesetkivizsgálás</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/uzembehelyezesek" onClick={e => e.stopPropagation()}>Üzembehelyezések</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/munkavedelmi-oktatas" onClick={e => e.stopPropagation()}>Munkavédelmi oktatás</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/munkavedelmi-kockazatertekeles" onClick={e => e.stopPropagation()}>Munkavédelmi kockázatértékelés</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/biztonsagtechnikai-meresek" onClick={e => e.stopPropagation()}>Biztonságtechnikai mérések</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/veszelyes-munkak" onClick={e => e.stopPropagation()}>Veszélyes munkák</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/ISO-45001-MEBIR" onClick={e => e.stopPropagation()}>ISO45001 MEBIR</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/emelogep-ugyintezes" onClick={e => e.stopPropagation()}>Emelőgép ügyintézés</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/munkavedelmi-tervek" onClick={e => e.stopPropagation()}>Munkavédelmi tervek</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/epitesi-munkahelyek-munkavedelmi-feladatai" onClick={e => e.stopPropagation()}>Építési munkahelyek munkavédelmi feladatai</Link></li>
                </ul>
            </div>

            <div className="card" onClick={() => navigate("/tuzvedelem")}>
                <FaFireExtinguisher className="icon" />
                <h1 className="title-h1">Tűzvédelem</h1>
                <ul className="align-left">
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/tuzvedelmi-szabalyzat" onClick={e => e.stopPropagation()}>Tűzvédelmi szabályzat</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/tuzvedelmi-ellenorzesek" onClick={e => e.stopPropagation()}>Tűzvédelmi ellenőrzések</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/idoszakos-felulvizsgalatok-tuzvedelem" onClick={e => e.stopPropagation()}>Időszakos felülvizsgálatok</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/tuzvedelmi-oktatas" onClick={e => e.stopPropagation()}>Tűzvédelmi oktatás</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/katasztrofavedelem" onClick={e => e.stopPropagation()}>Katasztrófavédelem</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/tuzveszelyes-tevelenyseg" onClick={e => e.stopPropagation()}>Tűzveszélyes tevékenység</Link></li>
                </ul>
            </div>

            <div className="card" onClick={() => navigate("/kornyezetvedelem")}>
                <MdNaturePeople className="icon" />
                <h1 className="title-h1">Környezetvédelem</h1>
                <ul>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/ISO14001" onClick={e => e.stopPropagation()}>ISO14001 Környezetközpontú Irányítási Rendszerek</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/kornyezetvedelmi-ellenorzesek" onClick={e => e.stopPropagation()}>Környezetvédelmi ellenőrzések</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/talaj-vedelem" onClick={e => e.stopPropagation()}>Talaj védelem</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/veszelyes-anyagok-nyilvantartasa" onClick={e => e.stopPropagation()}>Veszélyes anyagok nyilvántartása</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/levegotisztasag-vedelem" onClick={e => e.stopPropagation()}>Levegőtisztaság védelem</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/kornyezetvedelmi-oktatas" onClick={e => e.stopPropagation()}>Környezetvédelmi oktatás</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/hulladekkezeles" onClick={e => e.stopPropagation()}>Hulladékkezelés</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/kornyezetvedelmi-termekdij-bevallas" onClick={e => e.stopPropagation()}>Környezetvédelmi termékdíj bevallás</Link></li>
                    <li><IoCheckmarkCircle className="check-icon" />Környezeti zaj</li>
                    <li><IoCheckmarkCircle className="check-icon" /><Link to="/epr-gyartoi-termekfelelossegi-dij-bevallas" onClick={e => e.stopPropagation()}>EPR gyártói termékfelelőségi díj bevallás</Link></li>
                </ul>
            </div>

            <div className="card" onClick={() => navigate("/energiahatekonysag")}>
                <MdEnergySavingsLeaf className="icon" />
                <h1 className="title-h1">Energiahatékonyság</h1>
                <ul>
                    <li><IoCheckmarkCircle className="check-icon" />Energetikai szakreferensi szolgáltatás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Energiafelhasználás követése, jelentések készítése</li>
                    <li><IoCheckmarkCircle className="check-icon" />Almérők adatainak nyilvántartása</li>
                    <li><IoCheckmarkCircle className="check-icon" />Auditálásban való részvétel</li>
                    <li><IoCheckmarkCircle className="check-icon" />EN ISO 50001 tanácsadás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Üzemeltetési és fejlesztési javaslatok</li>
                    <li><IoCheckmarkCircle className="check-icon" />Energiamegtakarítás kimutatása</li>
                    <li><IoCheckmarkCircle className="check-icon" />Havi és éves fogyasztási jelentések</li>
                    <li><IoCheckmarkCircle className="check-icon" />Energiabeszerzési feladatok</li>
                    <li><IoCheckmarkCircle className="check-icon" />Mérőeszközökre vonatkozó javaslatok</li>
                </ul>
            </div>

        </div>
    )
}

export default CardContainer