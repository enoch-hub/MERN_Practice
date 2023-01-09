import React from 'react';
import './App.css';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'help other students in the course Q&A' },
    { id: 'cg4', text: 'help other students in the course Q&A' },
    { id: 'cg5', text: 'help other students in the course Q&A' },
    { id: 'cg6', text: 'help other students in the course Q&A' },
    { id: 'cg7', text: 'help other students in the course Q&A' },
    { id: 'cg8', text: 'help other students in the course Q&A' },
    { id: 'cg9', text: 'help other students in the course Q&A' },
    { id: 'cg10', text: 'help other students in the course Q&A' },
    { id: 'cg11', text: 'help other students in the course Q&A' },
    { id: 'cg12', text: 'help other students in the course Q&A' },
    { id: 'cg13', text: 'help other students in the course Q&A' },
  ];

  return (
    <div className="course-goals">
      <h2>...</h2>
      <NewGoal/>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
