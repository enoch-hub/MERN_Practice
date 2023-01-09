import React from 'react';
import './NewGoal.css';

const NewGoal = () => {

  const addGoalHandler = event =>  {
    event.preventDefault();

  const newGoal = {
    id: Math.floor(Math.random()*50-2).toString(),
    text: 'Test text'
  };

  console.log(newGoal);
  };

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
        <input type="text" />
        <button type='submit'>Add Goal</button>
    </form>
  )
}

export default NewGoal 