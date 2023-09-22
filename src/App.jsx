import React, { useContext } from 'react';
import './App.css'
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Modal from './components/UI/Modal/Modal';
import MealContext from './components/store/meal-context';

function App() {

  const ctx = useContext(MealContext);

  return (
    <React.Fragment>
      {ctx.overlayState && <Modal />}
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default App
