import React from 'react';
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const task1 = [
    {id: 1, title: "HTML", isDone: false},
    {id: 1, title: "CSS", isDone: false},
    {id: 1, title: "React", isDone: false},
  ]
  const initialValue = false

  return (
    <div className="App">
      <Todo title={'What to learn?'} tasks={task1}/>
      <Todo title={'Movie'} tasks={task1}/>
      {/* <Todo title={'Songs'} tasks={task1}/> */}
    </div>
  )
};

export default App;
