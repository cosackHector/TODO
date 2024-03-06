import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TypeForFilterTasks } from '../App';

type TaskType = {
  id: string,
  title: string,
  isDone: boolean
};
type PropsType = {
  title: string
  tasks: Array<TaskType>
  onRemoveTask: (id: string) => void
  filteredTasks: (type: TypeForFilterTasks) => void
  addTask: (title: string) => void
};

export const Todo = (props: PropsType) => {
const onPresKey = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' ) {
    props.addTask(value)
    setValue('')
  }
};
const onAddTask = () => {
  props.addTask(value)
  setValue('')
};
const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
const onAllFilter = () => props.filteredTasks('all');
const onActiveFilter = () => props.filteredTasks('active');
const onCompletedFilter = () => props.filteredTasks('completed');


  let [value, setValue] = useState('')
  const tasks = props.tasks
    .map((task: any, i: number) => {
      const onRemove = () => props.onRemoveTask(task.id)
      return (
        <li key={task.id}>
          <input
            readOnly
            checked={task.isDone} 
            type="checkbox" />
          <span>{task.title}</span>
          <button onClick={onRemove}>done</button>
        </li>)
        });

  return  (
    <div className='Todo'>
      <h3>{props.title}</h3>
      <input 
        value={value}
        onChange={onChangeText}
        onKeyDown={onPresKey}  />
      <button onClick={onAddTask}>+</button>
      <ul className='tasks_list'>
        {tasks}
      </ul>
      <div className='buttons_block'>
        <button onClick={onAllFilter}>All</button>
        <button onClick={onActiveFilter}>Active</button>
        <button onClick={onCompletedFilter}>Completed</button>
      </div>
    </div>
  )
};

