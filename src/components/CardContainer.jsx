import React from "react";
import { FaHelmetSafety, FaFireExtinguisher  } from "react-icons/fa6";
import { MdNaturePeople } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdEnergySavingsLeaf } from "react-icons/md";
import '../css/CardContainer.css'



const CardContainer = () => {
    const navigate = useNavigate();

    const handleWork = () => {
        navigate("/munkavedelem")
    }

    const handleFire = () => {
        navigate("/tuzvedelem")
    }

    const handleNature = () => {
        navigate("/kornyezetvedelem")
    }

    const handleEnergy = () => {
        navigate("/energiahatekonysag")
    }

    return (
        <div className="card-container" >
            <div className="card" onClick={handleWork}>
                <FaHelmetSafety className="icon" />
                <h2>Munkavédelem</h2>
                <ul>
                    <li><IoCheckmarkCircle className="check-icon" />Munkavédelmi Szabályzat</li>
                    <li><IoCheckmarkCircle className="check-icon" />Munkavédelmi ellenőrzések</li>
                    <li><IoCheckmarkCircle className="check-icon" />Időszakos felülvizsgálatok</li>
                    <li><IoCheckmarkCircle className="check-icon" />Balesetkivizsgálás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Üzembehelyezések</li>
                    <li><IoCheckmarkCircle className="check-icon" />Munkavédelmi oktatás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Munkavédelmi kockázatértékelés</li>
                    <li><IoCheckmarkCircle className="check-icon" />Biztonságtechnikai mérések</li>
                    <li><IoCheckmarkCircle className="check-icon" />Veszélyes munkák</li>
                    <li><IoCheckmarkCircle className="check-icon" />ISO45001 MEBIR</li>
                    <li><IoCheckmarkCircle className="check-icon" />Emelőgép ügyintézés</li>
                    <li><IoCheckmarkCircle className="check-icon" />Munkavédelmi tervek</li>
                    <li><IoCheckmarkCircle className="check-icon" />Építési munkahelyek munkavédelmi feladatai</li>
                </ul>
            </div>
            <div className="card" onClick={handleFire}>
                <FaFireExtinguisher className="icon" />
                <h2>Tűzvédelem</h2>
                <ul className="align-left">
                    <li><IoCheckmarkCircle className="check-icon" />Tűzvédelmi szabályzat</li>
                    <li><IoCheckmarkCircle className="check-icon" />Tűzvédelmi ellenőrzések</li>
                    <li><IoCheckmarkCircle className="check-icon" />Időszakos felülvizsgálatok</li>
                    <li><IoCheckmarkCircle className="check-icon" />Tűzvédelmi oktatás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Katasztrófavédelem</li>
                    <li><IoCheckmarkCircle className="check-icon" />Tűzveszélyes tevékenység</li>
                </ul>
            </div>
            <div className="card" onClick={handleNature}>
                <MdNaturePeople className="icon" />
                <h2>Környezetvédelem</h2>
                <ul>
                    <li><IoCheckmarkCircle className="check-icon" />ISO14001 Környezetközpontú Irányítási Rendszerek</li>
                    <li><IoCheckmarkCircle className="check-icon" />Környezetvédelmi ellenőrzések</li>
                    <li><IoCheckmarkCircle className="check-icon" />Talaj védelem</li>
                    <li><IoCheckmarkCircle className="check-icon" />Veszélyes anyagok nyilvántartása</li>
                    <li><IoCheckmarkCircle className="check-icon" />Levegőtisztaság védelem</li>
                    <li><IoCheckmarkCircle className="check-icon" />Környezetvédelmi oktatás</li>
                    <li><IoCheckmarkCircle className="check-icon" />Hulladékkezelés</li>
                    <li><IoCheckmarkCircle className="check-icon" />Környezeti zaj</li>
                    <li><IoCheckmarkCircle className="check-icon" />Környezetvédelmi termékdíj bevallás</li>
                    <li><IoCheckmarkCircle className="check-icon" />EPR gyártói termékfelelőségi díj bevallás</li>
                </ul>
            </div>
            <div className="card" onClick={handleEnergy}>
                <MdEnergySavingsLeaf className="icon" />
                <h2>Energiahatékonyság</h2>
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