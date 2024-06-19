import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [budget, setBudget] = useState(2000);
  const [expenses, setExpenses] = useState(() => {
    // Load expenses from local storage if available
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    // Save expenses to local storage whenever it changes
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleClick = () => {
    if (name && cost) {
      const newExpense = { name, cost: parseInt(cost) };
      setExpenses([...expenses, newExpense]);
      setName("");
      setCost("");
    }
  };

  const totalSpent = expenses.reduce((acc, expense) => acc + expense.cost, 0);
  const remainingBudget = budget - totalSpent;

  return (
    <div className="container">
      <h1 className="heading">My Budget Planner</h1>
      <div className="main">
        <div className="output">
          <h4>Budget Rs {budget}</h4>
          <h4>Remaining Rs {remainingBudget}</h4>
          <h4>Spent so far Rs {totalSpent}</h4>
        </div>
        <hr />
        <div className="result">
          <div className="heading">
            <h2>Expenses</h2>
          </div>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                <div className="results">
                  <div className="outputname">{expense.name}</div>
                  <div className="outputprice">Rs {expense.cost}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="datalist">
          <div className="list_heading">
            <h3>Add Data To List</h3>
          </div>
          <div className="form">
            <div className="name">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="cost">
              <span>Cost</span>
              <input
                type="number"
                placeholder="Enter Amount"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
          </div>
          <div className="btn">
            <button onClick={handleClick}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
