import React, { useState } from 'react';

type TaskType = {
  id: number,
  title: string,
  isDone: boolean
};

type PropsType = {
  title: string
  tasks: Array<TaskType>
};

const Todo = (props: PropsType) => {
  // const [isChecked, setIsChecked] = useState(false)
  // const handleClick = () => {
  //   return setIsChecked(!isChecked)
  // }
  const onHandleClick = (i: number) => {
    console.log(props.tasks[i].isDone);
    props.tasks[i].isDone = !props.tasks[i].isDone
  };

  const tasks = props.tasks
    .map((task: any, i: number) => {
      return (
        <li key={i}>
          <input 
            // onClick={()=>onHandleClick(i)}
            onChange={()=>onHandleClick(i)} 
            checked={task.isDone} 
            type="checkbox" />
          <span>{task.title}</span>
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
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
};

export default Todo;
