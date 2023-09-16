import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";



const AvailableMeals = () => {
    return (
        <Card>
            <MealItem />
        </Card>
    );
}

export default AvailableMeals;