import './App.css';
import { useState } from 'react';
import { Todo } from './components/Todo';
import { v1 } from 'uuid';

export type TypeForFilterTasks = 'all' | 'active' | 'completed'

function App() {
  let initTask = [
    {id: v1(), title: "HTML", isDone: true},
    {id: v1(), title: "CSS", isDone: false},
    {id: v1(), title: "React", isDone: true},
    {id: v1(), title: "React", isDone: false},
  ]

  let [tasks, setTacks] = useState(initTask)
  let [filter, setFilter] = useState<TypeForFilterTasks>('all')

  const removeTask = (id: string) => {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTacks(filteredTasks)
  }
  const addTask = (title: string) => {
    const newTask = {
      id: v1(), 
      title: title, 
      isDone: false
    }
    const newTasks = [newTask, ...tasks]
    setTacks(newTasks)
  }
  const filteredTasks = (type: TypeForFilterTasks) => {
    setFilter(type)
  }

  let tasksForTodo = tasks
  if(filter == 'active') {
    tasksForTodo = tasks.filter(task => !task.isDone)
  } 
  if(filter == 'completed') {
    tasksForTodo = tasks.filter(task => task.isDone)
  }


  return (
    <div className="App">
      <Todo 
        title={'What to learn?'} 
        tasks={tasksForTodo}
        onRemoveTask={removeTask} 
        filteredTasks={filteredTasks} 
        addTask={addTask}/>
    </div>
  )
};

export default App;
