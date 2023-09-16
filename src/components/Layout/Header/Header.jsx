import React from "react";
import classes from "./Header.module.css";
import food from "../../../assets/Images/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
    <React.Fragment>
        <header className={classes.header}>
            <h1>Food App</h1>
            <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
            <img src={food} alt="Table of Food" />
        </div>
        
        
    </React.Fragment>
        
    );
}

export default Header;