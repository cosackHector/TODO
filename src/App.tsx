import React, { useState } from 'react';
import './App.css';
import { Todo, TaskType } from './components/Todo';

function App() {
  let initTask = [
    {id: 1, title: "HTML", isDone: false},
    {id: 2, title: "CSS", isDone: false},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "React", isDone: false},
  ]

  let [tasks, setTacks] = useState(initTask)

  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTacks(filteredTasks)
  }
  const checkedClick = (id: number) => {
    let filteredTasks = tasks.map(task => {
      if(task.id == id) {
        task.isDone = !task.isDone
      return task
      } return task
        })
        setTacks(filteredTasks)
  }
  const allTasks = () => {
    setTacks(initTask)
  }
  const activeTasks = () => {
    let filteredTasks = tasks.filter(task => task.isDone)
    setTacks(filteredTasks)
  }

  return (
    <div className="App">
      <Todo title={'What to learn?'} tasks={tasks}
      onRemoveTask={removeTask} onCheckedClick={checkedClick} onAllTasks={allTasks} onActiveTasks={activeTasks}/>
      {/* <Todo title={'Movie'} tasks={tasks} onRemoveTask={removeTask} onCheckedClick={checkedClick}/> */}
      {/* <Todo title={'Songs'} tasks={task1}/> */}
    </div>
  )
};

export default App;
