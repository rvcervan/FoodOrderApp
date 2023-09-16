import React from "react"
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
    return (
        <React.Fragment>
            <form classes={classes.form}>
                <label>Amount</label>
                <input type="number"></input>
                <button>+ Add</button>
            </form>
        </React.Fragment>
    );
}

export default MealItemForm;