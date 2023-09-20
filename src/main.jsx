import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MealContextProvider } from './components/store/meal-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MealContextProvider>
    <App />
  </MealContextProvider>
  

)
