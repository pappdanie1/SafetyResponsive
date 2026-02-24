import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/SafetyCard.css"

const SafetyCard = (props) => {

    return (
        <div className="safety-card">
            <LazyLoadImage
                className="card-img"
                src={props.img}
                alt={props.head || ""}
                width="100%"
                height="100%"
                effect="blur"
                wrapperClassName="card-img-wrapper"
            />
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