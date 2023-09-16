import React from 'react';
import './App.css'
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {

  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default App
