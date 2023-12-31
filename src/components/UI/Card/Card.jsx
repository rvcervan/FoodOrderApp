import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={`${props.styles} ${classes.card}`}>
            {props.children}
        </div>
    );
}

export default Card;