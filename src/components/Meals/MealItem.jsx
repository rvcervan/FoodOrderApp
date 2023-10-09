import React, { useEffect, useState } from "react";
import classes from "./MealItem.module.css";
import DUMMY_MEALS from "../../assets/DummyMeals/dummy-meals.jsx";
import MealItemForm from "./MealItemForm";
import Card from "../UI/Card/Card";

const MealItem = (props) => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    async function fetchMealsHandler() {
        setIsLoading(true);
        const response = await fetch('https://localhost:7171/api/FoodItems',{
            'content-type': 'application/json',
            method: 'GET',
            redirect: 'follow'
        });

        if(!response.ok){
            throw new Error('Something went wrong.');
        }

        const data = await response.json();

        const transformedFood = data.map((foodData) => {
            return {
                id: foodData.id,
                name: foodData.name,
                description: foodData.description,
                price: foodData.price
            };
        });

        setMeals(transformedFood);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchMealsHandler().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });
        
            
        
        
        console.log("Meals Loaded");
        
    }, []);


    if(isLoading){
        return <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if(httpError){
        return <section className={classes.MealsError}>
            <p>{httpError}</p>
        </section>
    }


    return (
        <React.Fragment>
            {
                meals.map((meal) => 
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