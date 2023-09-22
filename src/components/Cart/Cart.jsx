import React, {useContext} from "react";
import classes from "./Cart.module.css";
import MealContext from "../store/meal-context";
import CartItem from "./CartItem";

const Cart = () => {
    const ctx = useContext(MealContext);

    //get the cart items from the ctx here
    return (
        <React.Fragment>
            <ul className={classes["cart-items"]}>
                <CartItem />
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ctx.getTotalPrice.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={() => {ctx.showOverlay(false)}}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            
        </React.Fragment>
    );
}

export default Cart;