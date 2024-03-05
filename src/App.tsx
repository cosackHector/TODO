import React, { useState } from 'react';
import './App.css';
import { Todo, TaskType } from './components/Todo';

export type TypeForFilterTasks = 'all' | 'active' | 'completed'

function App() {
  let initTask = [
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: false},
    {id: 3, title: "React", isDone: true},
    {id: 4, title: "React", isDone: false},
  ]

  let [tasks, setTacks] = useState(initTask)
  let [filter, setFilter] = useState('active')

  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTacks(filteredTasks)
  }
  const filteredTasks = (type: TypeForFilterTasks) => {
    setFilter(type)
  }

  let tasksForTodo = tasks
  if(filter == 'active') {
    tasksForTodo = tasks.filter(task => task.isDone === true )
  } 
  if(filter == 'completed') {
    tasksForTodo = tasks.filter(task => task.isDone === false)
  }


  return (
    <div className="App">
      <Todo title={'What to learn?'} tasks={tasksForTodo}
      onRemoveTask={removeTask} filteredTasks={filteredTasks}/>
      {/* <Todo title={'Movie'} tasks={tasks} onRemoveTask={removeTask} onCheckedClick={checkedClick}/> */}
      {/* <Todo title={'Songs'} tasks={task1}/> */}
    </div>
  )
};

export default App;
