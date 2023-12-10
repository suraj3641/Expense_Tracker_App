
import React,{useState,useContext} from 'react';
import { GlobalContext } from './Context/GloblaState';


const Addtransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState();
    const {addTransaction}= useContext(GlobalContext);

    const onSubmit =e=>{
      e.preventDefault();

      const newTransaction={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
    
      addTransaction(newTransaction);

    }

  return (
    <>
       <h3 style={{marginRight:"90px"}}>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div style={{marginRight:"55px"}}>
          <label>Text</label>
          <input type="text"  value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div >
          <br></br>
          <label style={{marginRight:"200px"}}>Amount- </label><br></br>
            (negative - expense, positive - income)
          <br></br>
          <input style={{marginRight:"25px"}} type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div><br></br>
        <button style={{marginRight:"93px"}} class="btn">Add transaction</button>
      </form>
    </>
  );
}

export default Addtransaction
