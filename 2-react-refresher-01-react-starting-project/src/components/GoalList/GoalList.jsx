import React from 'react';
import './GoalList.css';

const GoalList = (props) => {
  console.log(props.goals);
  return (
    <ul className="goal-list">
      {/* <li>Finish the course</li>
      <li>Learn all about the Course Main Topic</li>
      <li>help other students in the course Q&A</li> */}
      {
        props.goals.map(goal => {
          return <li key={goal.id}>{goal.text}</li>;
        })
      }
    </ul>
  );
};

export default GoalList;

// HOw we can output a list
// of data dynamically in jsx

// We can't output plain vanilla js objects in jsx, instead we need to map every object into a jsx equavilant, so into a renderable element.
