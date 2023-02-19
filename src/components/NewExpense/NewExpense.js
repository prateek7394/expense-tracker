import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);


    const formSubmitHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
        //  Add a new parameter id
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

      return (
        <div className='new-expense'>
          {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
          )}
          {isEditing && (
            <ExpenseForm
              onFormSubmit={formSubmitHandler}
              onCancel={stopEditingHandler}
            />
          )}
        </div>
      );
    };

export default NewExpense;
// Data(props) is passed from child to parent component in following way:
// Here onFormSubmit acts as a pointer to formSubmitHandler function 
// which is used in ExpenseForm.js inside submitHandler function to pass data to 
// NewExpense.js and execute formSubmitHandler so as to add an id to the enteredData
// In the same way data is passes from NewExpense.js to app.js