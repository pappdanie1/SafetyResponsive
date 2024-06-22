import React from "react";
import "../css/SafetyCard.css"

const SafetyCard = (props) => {

    return (
        <div class="safety-card">
            <img className="card-img" src={props.img} alt="" />
            <div class="safty-card-content">
                <h2 className="safety-h2" >
                    {props.head}
                </h2>
                <p className="safety-p" >
                    {props.text}
                </p>
                <a href="#" class="button" className="safety-a" >
                    Find out more
                    <span class="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </a>
            </div>
        </div>
    )
}

export default SafetyCard