import React from "react";
import Card from "../UI/Card/Card";
import classes from "./MealsSummary.module.css";


const MealsSummary = () => {
    return (
        <Card styles={classes.summary}>
            <h2>
                Delicious Food, Delivered To You
            </h2>
            <div>
                <p>
                    Choose your favorite meal from our broad selection of available meals and
                    enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and 
                    of course by experience chefs!
                </p>
            </div>

        </Card>
    );
}

export default MealsSummary;