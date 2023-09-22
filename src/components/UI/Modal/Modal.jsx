import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Card from "../Card/Card";
import Cart from "../../Cart/Cart";
import MealContext from "../../store/meal-context";

const Backdrop = props => {
    const ctx = useContext(MealContext);

    return <div className={classes.backdrop} onClick={() => {ctx.showOverlay(false)}} />
}

const ModalOverlay = props => {

    return (
        <Card styles={classes.modal}>
            <Cart />
        </Card>
    );
}

const Modal = () => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
        </React.Fragment>
    );
   
}

export default Modal;