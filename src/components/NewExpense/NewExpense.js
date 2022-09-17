import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onExpensePush}) => {
  function onUpdateExpenseArray(data){
    console.log("from New Expense"+data.title)
    onExpensePush(data)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm updateExpenseArray={onUpdateExpenseArray}/>
    </div>
  );
};

export default NewExpense;