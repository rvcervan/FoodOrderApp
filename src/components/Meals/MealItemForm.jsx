import React, { useContext, useState } from "react"
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
import MealContext from "../store/meal-context";

const MealItemForm = (props) => {
    const ctx = useContext(MealContext);
    const [quantity, setQuantity] = useState("1");

    const getQuantityHandler = (quan) => {
        setQuantity(quan);
    }

    const onClickHandler = (event) => {
        event.preventDefault();
        ctx.addToCart({id: props.id, food: props.order, quantity: Number(quantity)})
    }

    return (
            <form className={classes.form}>
                <Input label="Amount" getQuantity={getQuantityHandler} input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: quantity
                }}/>
                <button onClick={onClickHandler}>+ Add</button>
            </form>
    );
}

export default MealItemForm;