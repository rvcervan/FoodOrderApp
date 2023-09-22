import React, { useContext, useState, useEffect } from "react";
import DUMMY_MEALS from "../../assets/DummyMeals/dummy-meals.jsx";

const MealContext = React.createContext({
    overlayState: false,
    showOverlay: () => {},
    getCartList: [],
    getTotalPrice: 0.00,
    getCartQuantity: 0,
    addToCart: (order) => {},
    removeFromCart: () => {},
    increaseQuantity: (order) => {},
    decreaseQuantity: (order) => {}

});
//maipulate meal list, and whats in cart with this
export const MealContextProvider = (props) => {
    const [cartQuantity, setCartQuantity] = useState(0);//quantity to show for cart numbers
    const [listCart, setListCart] = useState({});//create a state for cart data
    const [totalPrice, setTotalPrice] = useState(0.00);//create a state for total price
    const [overlayState, setOverlayState] = useState(false);

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

        setCartQuantity(prevState => {return prevState += Number(order.quantity)})
    }

    const removeFromCartHandler = (meal, price, quantity) => {
        //remove item from cart if you set the quantity to 0 for an item.
    }

    const increaseQuantityHandler = (order) => {

        setListCart((prevState) => {
            if(order.id in prevState){
                //update the cart with the new quantity
                prevState[order.id].quantity+=1;
            }
            
            return prevState
        })

        setTotalPrice((prevState) => {
            return prevState += Number(order.food.price);
        })

        setCartQuantity(prevState => {return prevState+= 1})     
    }

    const decreaseQuantityHandler = (order) => {

        setListCart((prevState) => {
            
            if(prevState[order.id].quantity === 1){
                var result = delete prevState[order.id];
                
            }else{
                prevState[order.id].quantity-=1;
            }

            
            return prevState
        })

        setTotalPrice((prevState) => {
            var result = prevState -= Number(order.food.price);
            if(result < 0){
                result = 0;
                return result;
            }
            return result;
        })

        setCartQuantity(prevState => {return prevState-= 1})     
    }

    return <MealContext.Provider 
        value={{
            overlayState: overlayState,
            showOverlay: setOverlayState,
            getCartList: listCart,
            getCartQuantity: cartQuantity,
            getTotalPrice: totalPrice,
            addToCart: addToCartHandler,
            removeFromCart: removeFromCartHandler,
            increaseQuantity: increaseQuantityHandler,
            decreaseQuantity: decreaseQuantityHandler
        }}
    >{props.children}</MealContext.Provider>
}

export default MealContext;