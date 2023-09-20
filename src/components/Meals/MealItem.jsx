import React from "react";
import classes from "./MealItem.module.css";
import DUMMY_MEALS from "../../assets/DummyMeals/dummy-meals.jsx";
import MealItemForm from "./MealItemForm";
import Card from "../UI/Card/Card";

const MealItem = (props) => {
    


    return (
        <React.Fragment>
            {
                DUMMY_MEALS.map((meal) => 
                    <li key={meal.id} className={classes.meal}>
                        <div>
                            <h3>{meal.name}</h3>
                            <p className={classes.description}>{meal.description}</p>
                            <p className={classes.price}>${meal.price}</p>
                        </div>
                        <div>
                            <MealItemForm id={meal.id} order={meal}/>
                        </div>
                    </li>
                )
            }      
        </React.Fragment>
    );
}

export default MealItem;