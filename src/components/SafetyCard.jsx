import React from "react";
import "../css/SafetyCard.css"

const SafetyCard = (props) => {

    return (
        <div className="safety-card">
            <img className="card-img" src={props.img} alt="" />
            <div>
                <h2 className="safety-h2" >
                    {props.head}
                </h2>
                <p className="safety-a" >
                    Tudjon meg többet
                </p>
            </div>
        </div>
    )
}

export default SafetyCard