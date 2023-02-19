import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () =>{
    // title = 'Changed!'
    // The title doesn't change as the component function(ExpenseItem) is not called again upon click
    //  i.e. even if Clickhandler() function is executed but it is not rendered

  //   setTitle('Updated!');
  //   console.log(title)
  // };

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>Rs. {props.amount}</div>
    </div>
    {/* <button onClick={clickHandler}>Change Title</button> */}
  </Card>
);
}
// firstly, data from App component is passed to ExpenseItem component via props
// Then, a piece of that data(namely date) from ExpenseItem is passed to ExpenseDate component via props.date
// ExpenseDate component is then imported into ExpenseItem and rendered from there
// In app.js, we are using Expenses
// In Expenses, we are using ExpenseItem
// In ExpenseItem we are using ExpenseDate
export default ExpenseItem;
