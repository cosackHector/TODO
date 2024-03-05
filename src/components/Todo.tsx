import React, { useState } from 'react';

export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
};

type PropsType = {
  title: string
  tasks: Array<TaskType>
  onRemoveTask: Function
  onCheckedClick: Function
  onAllTasks: Function
  onActiveTasks: Function
};

export const Todo = (props: PropsType) => {
  const tasks = props.tasks
    .map((task: any, i: number) => {
      return (
        <li key={i}>
          <input
            onChange={()=>props.onCheckedClick(task.id)} 
            checked={task.isDone} 
            type="checkbox" />
          <span>{task.title}</span>
          <button onClick={()=>props.onRemoveTask(task.id)}>done</button>
        </li>)
        });

  return  (
    <div className='Todo'>
      <h3>{props.title}</h3>
      <input />
      <button>+</button>
      <ul>
        {tasks}
      </ul>
      <div>
        <button onClick={()=>props.onAllTasks()}>All</button>
        <button onClick={()=>props.onActiveTasks()}>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
};

