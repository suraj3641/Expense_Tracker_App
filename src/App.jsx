
import Expense from "./Expensetracker";
import Balance from "./Balance";
import Incomeexpense from "./Incomeexpense";
import TransactionList from "./TransactionList";
import Addtransaction from "./Addtransaction";
import { GlobalProvider } from "./Context/GloblaState";
import "./App.css";


function App() {
  return (
    <GlobalProvider>
  <Expense/>
  <div className="container">
    <Balance/> 
    <Incomeexpense/>
    <TransactionList/>
    <Addtransaction/>
  </div>
    </GlobalProvider>
  );
}

export default App
