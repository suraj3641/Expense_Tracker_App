
import React,{useContext} from 'react';
import { GlobalContext } from './Context/GloblaState';


export const Transaction = ({transaction}) => {
const {deleteTransaction}= useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (

       <li >{transaction.text}
    <span style={{marginLeft:"100px",}}>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">delete</button>
   </li>
 
  );
}


