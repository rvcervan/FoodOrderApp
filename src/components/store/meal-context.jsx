import React, { useContext, useState, useEffect } from "react";
import DUMMY_MEALS from "../../assets/DummyMeals/dummy-meals.jsx";

const MealContext = React.createContext({
    getCartQuantity: 0,
    addToCart: (order) => {},
    removeFromCart: () => {}

});
//maipulate meal list, and whats in cart with this
export const MealContextProvider = (props) => {
    const [cartQuantity, setCartQuantity] = useState(0);//quantity to show for cart numbers
    const [listCart, setListCart] = useState({});//create a state for cart data
    const [totalPrice, setTotalPrice] = useState(0.00);//create a state for total price

    const addToCartHandler = (order) => {
        //add item to cart and update price
        /*
        {id: meal.id, food: {meal}, quantity: n}
        */
       
        setTotalPrice((prevState) => {
            return prevState + (order.food.price * order.quantity);
        })

        setListCart((prevState) => {
            if(order.id in prevState){
                //update the cart with the new quantity
                prevState[order.id].quantity += Number(order.quantity);
            }else{
                //add the new object to dictionary
                prevState[order.id] = order;
            }
            
            return prevState
        })

        console.log(totalPrice);

        setCartQuantity(prevState => {return prevState += Number(order.quantity)})
    }

    const removeFromCartHandler = (meal, price, quantity) => {
        //remove item from cart if you set the quantity to 0 for an item.
    }

    return <MealContext.Provider 
        value={{
            getCartQuantity: cartQuantity,
            addToCart: addToCartHandler,
            removeFromCart: removeFromCartHandler
        }}
    >{props.children}</MealContext.Provider>
}

export default MealContext;