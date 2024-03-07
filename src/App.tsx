import './App.css';
import { v1 } from 'uuid';
import { TaskType } from './components/Todo';
import { useState } from 'react';
import { Todo } from './components/Todo';
import { AddItemForm } from './components/AddItemForm';

// TYPES
export type TypeForFilterTasks = 'all' | 'active' | 'completed'
type TodoListsType = {
  id: string
  title: string
  filter: TypeForFilterTasks
}
type TasksStateType = {
  [key: string]: Array<TaskType>
}

// COMPONENT
function App() {

// ID
  let todoListId1 = v1()
  let todoListId2 = v1()

// STATES
  let [tasksObj, setTacks] = useState<TasksStateType>({
    [todoListId1]: [
      {id: v1(), title: "HTML", isDone: true},
      {id: v1(), title: "CSS", isDone: false},
      {id: v1(), title: "React", isDone: true},
      {id: v1(), title: "React", isDone: false},
      ],
    [todoListId2]: [
      {id: v1(), title: "Milk", isDone: true},
      {id: v1(), title: "Melon", isDone: false},
      {id: v1(), title: "Lemon", isDone: true},
      {id: v1(), title: "Apple", isDone: false},
      ],
})
  let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
    {id: todoListId1, title: 'What to learn?', filter: 'all'},
    {id: todoListId2, title: 'What to byu?', filter: 'all'},
  ])

//  FUNCTIONS FOR EVENT
  const removeTask = (id: string, todoListId: string) => {
    const tasks = tasksObj[todoListId]
    let filteredTasks = tasks.filter(task => task.id !== id)
    tasksObj[todoListId] = filteredTasks
    setTacks({...tasksObj})
  }
  const addTask = (title: string, todoListId: string) => {
    const newTask = {id: v1(), title: title, isDone: false}
    const tasks = tasksObj[todoListId]
    const newTasks = [newTask, ...tasks]
    tasksObj[todoListId] = newTasks
    setTacks({...tasksObj})
  }
  const filteredTasks = (type: TypeForFilterTasks, todoListId: string) => {
    let todoList = todoLists.find(t => t.id === todoListId)
    if (todoList) {
      todoList.filter = type
    }
    setTodoLists([...todoLists])
  }
  const changeStatus = (taskId: string, todoListId: string) => {
    let task = tasksObj[todoListId].find( task => task.id === taskId)
    if (task)  {
      task.isDone = !task.isDone
      tasksObj[todoListId] = [...tasksObj[todoListId]]
      setTacks({...tasksObj})
    }
  }
  const removeTodoList = (todoListId: string) => {
    const filteredTodoList = todoLists.filter(tdl => tdl.id !== todoListId)
    setTodoLists(filteredTodoList)
    delete tasksObj[todoListId]
    setTacks({...tasksObj})
  }
  const addTodoList = (title: string) => {
    const todoList: TodoListsType = {
      id: v1(),
      title: title,
      filter: 'all'
    }
    setTodoLists([todoList, ...todoLists])
    setTacks({
      ...tasksObj,
      [todoList.id]: []
    })
  }
  const changeTitleInput = (newTitle: string, taskId: string, todoListId: string) => {
    const task = tasksObj[todoListId].find(t => t.id === taskId)
    if(task) {
    task.title = newTitle
    setTacks({...tasksObj})
    }
  }
  const changeTodoListTitle = (newTitle: string, todoListId: string) => {
    const todoList = todoLists.find(tdl => tdl.id === todoListId)
    if(todoList) {
    todoList.title = newTitle
    setTodoLists([...todoLists])
    }
  }

  return (
    <div className="App">
      <AddItemForm addItem={addTodoList}/>
        { 
          todoLists.map(tdl => {
            let tasksForTodo = tasksObj[tdl.id]
            if(tdl.filter == 'active') {
              tasksForTodo = tasksObj[tdl.id].filter(task => !task.isDone)
            } 
            if(tdl.filter == 'completed') {
              tasksForTodo = tasksObj[tdl.id].filter(task => task.isDone)
        }
        return <Todo 
          key={tdl.id}
          id={tdl.id}
          title={tdl.title} 
          tasks={tasksForTodo}
          filter={tdl.filter}
          removeTask={removeTask} 
          filteredTasks={filteredTasks} 
          addTask={addTask}
          changeStatus={changeStatus}
          removeTodoList={removeTodoList}
          changeTitleInput={changeTitleInput}
          changeTodoListTitle={changeTodoListTitle}/>
      })}
    </div>
  )
};

export default App
