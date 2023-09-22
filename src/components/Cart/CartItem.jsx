import React, {useContext, useEffect} from "react";
import classes from "./CartItem.module.css";
import MealContext from "../store/meal-context";

const CartItem = () => {

    const ctx = useContext(MealContext);
    useEffect(() => {
        
    }, [ctx.getCartList]);
    //use useEffect to detect changes to array
    var foodArr = [];
    for(var key in ctx.getCartList){
        foodArr.push(ctx.getCartList[key]);
    }

    const increaseQuantityHandler = (order) => {
        ctx.increaseQuantity(order);
    }

    const decreaseQuantityHandler = (order) => {
        ctx.decreaseQuantity(order);
    }



    return (
        <React.Fragment>
            {foodArr.map((order) => (
                <li key={order.id} className={classes["cart-item"]}>
                    <div>
                        <h2>{order.food.name}</h2>
                        <div className={classes.summary}>
                            <span className={classes.price}>{order.food.price}</span>
                            <span className={classes.amount}>x {order.quantity}</span>
                        </div>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={() => decreaseQuantityHandler(order)}>-</button>
                        <button onClick={() => increaseQuantityHandler(order)}>+</button>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );

}

export default CartItem;