import React from "react";
import classes from "./MealItem.module.css";
import dummy from "../../assets/DummyMeals/dummy-meals.jsx";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    return (
        <div className={classes.meal}>
            <h3>food name</h3>
            <span>food description</span>
            <span>food price</span>
            <MealItemForm />
        </div>
    );
}

export default MealItem;