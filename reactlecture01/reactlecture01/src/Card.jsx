import React from "react";

const Card = (props) => {
    console.log(JSON.stringify(props));
    return (
        <div className="card">
            <h1> {props.value}</h1>
        </div>

    )
}

export default Card;