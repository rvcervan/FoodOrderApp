import React, {useContext, useState} from "react";
import classes from "./Cart.module.css";
import MealContext from "../store/meal-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
    const ctx = useContext(MealContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    //get the cart items from the ctx here

    const orderHandler = () => {
        setIsCheckout(prevState => {
            return !prevState;
        });
    }
    
    const submitOrderHandler = async (userData) => { //TODO
        setIsSubmitting(true);
        await fetch('',{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: ctx.getCartList
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        ctx.clearCart();
    };

    const cartModalConstant = (
        <React.Fragment>
            <ul className={classes["cart-items"]}>
                <CartItem />
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ctx.getTotalPrice.toFixed(2)}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={orderHandler}/> }
            <div className={classes.actions}>
                {!isCheckout && <button className={classes['button--alt']} onClick={() => {ctx.showOverlay(false)}}>Close</button>}
                {!isCheckout && <button onClick={orderHandler} className={classes.button}>Order</button>}\
            </div>
            
        </React.Fragment>
    )

    const isSubmittingModalcontent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={() => ctx.showOverlay(false)}>Close</button>
            </div>
        </React.Fragment>
    )
    
    

    return (
        <React.Fragment>
            {!isSubmitting && !didSubmit && cartModalConstant}
            {isSubmitting && didSubmit && isSubmittingModalcontent}
            {didSubmit && didSubmitModalContent}
        </React.Fragment>
    );
}

export default Cart;