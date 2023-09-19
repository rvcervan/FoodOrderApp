import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";
import card_class from "../UI/Card/Card.module.css";



const AvailableMeals = () => {
    return (
        
        <Card styles={classes.meals}>
            <div className={classes}>
                <ul>
                    <MealItem />
                </ul>
            </div>
        </Card>
    );
}

export default AvailableMeals;