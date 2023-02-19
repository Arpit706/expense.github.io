import React from 'react'
import Header from "./components/Header";
import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactionlist from './components/Transactionlist';
import Addtransaction from './components/Addtransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    
    <GlobalProvider>
     <Header/>
     <div className="container">
       <Balance/>
       <IncomeExpenses/>
   <Transactionlist/>
   <Addtransaction/>
   </div>

</GlobalProvider>

  );
}

export default App;
