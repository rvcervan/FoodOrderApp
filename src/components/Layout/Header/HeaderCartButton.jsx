import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import MealContext from "../../store/meal-context";

const HeaderCartButton = () => {
    const ctx = useContext(MealContext);

    return (
        <button className={classes.button} onClick={()=>{ctx.showOverlay(true)}}>
            <CartIcon />
            Your Cart
            <p className={`${classes.badge} ${classes.bump}`}>{ctx.getCartQuantity}</p> 
        </button>

    );
}

export default HeaderCartButton;