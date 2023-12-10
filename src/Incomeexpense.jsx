import React,{useContext} from 'react';
import { GlobalContext } from './Context/GloblaState';


export const Incomeexpense = () => {
  const {transactions}=useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

  return (
    <div className='income' >
    <div style={{color:"green"}}>
      <h4>Income</h4>
      <p >{income}</p>
    </div>
    <div style={{color:"red"}}>
      <h4>Expense</h4>
      <p>{expense}</p>
    </div>
  </div>
  );
}

export default Incomeexpense
