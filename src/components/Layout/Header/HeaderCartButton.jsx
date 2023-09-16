import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";


const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <CartIcon />
            Your Cart
            <p className={`${classes.badge} ${classes.bump}`}>0</p> 
        </button>

    );
}

export default HeaderCartButton;