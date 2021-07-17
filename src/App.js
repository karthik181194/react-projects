import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
// import {Transaction} from './components/Transaction';
import {Addtransaction} from './components/Addtransaction';
import {Transactionlist} from './components/Transactionlist';
import {GlobalProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      {/* <Transaction /> */}
      <Transactionlist />
      <Addtransaction />
          </div>
          </GlobalProvider>
  );
}

export default App;
