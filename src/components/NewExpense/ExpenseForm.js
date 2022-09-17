import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  

  function onSubmitClickHandler(e){
    e.preventDefault();
    console.log(enteredTitle,enteredAmount,enteredDate)
  }
  

  
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' 
          value={enteredTitle}
          onChange={(e)=>setEnteredTitle(e.target.value)} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={(e)=>{setEnteredAmount(e.target.value)}}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={(e)=>{setEnteredDate(e.target.value)}}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={onSubmitClickHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;