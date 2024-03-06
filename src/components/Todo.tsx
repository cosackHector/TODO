import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TypeForFilterTasks } from '../App';
import { title } from 'process';

type TaskType = {
  id: string,
  title: string,
  isDone: boolean
};
type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  filter: TypeForFilterTasks
  removeTask: (id: string, todoListId: string) => void
  filteredTasks: (type: TypeForFilterTasks, id: string) => void
  addTask: (title: string,  todoListId: string) => void
  changeStatus: (taskId: string,  todoListId: string) => void
};

export const Todo = (props: PropsType) => {

const [value, setValue] = useState('')
const [error, setError] = useState<string | null>(null)

const onPresKey = (e: KeyboardEvent<HTMLInputElement>) => {
  if (value.trim() !== '' && e.key === 'Enter' ) {
    props.addTask(value.trim(), props.id)
    setValue('')
  } else {
  setError('Invalid importance')
  }
};
const onAddTask = () => {
  if (value.trim() !== '') {
  props.addTask(value.trim(), props.id)
  setValue('')
  } else {
  setError('Invalid importance')
  }
};
const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
  setError(null)
};
const onAllFilter = () => props.filteredTasks('all', props.id);
const onActiveFilter = () => props.filteredTasks('active', props.id);
const onCompletedFilter = () => props.filteredTasks('completed', props.id);

const tasks = props.tasks.map((task: any, i: number) => {
  const onRemove = () => props.removeTask(task.id, props.id)
  const onChangeStatus = () => props.changeStatus(task.id, props.id)
  return (
    <li 
      key={task.id}
      className={ task.isDone ? 'is_done' : '' }>
      <input
        onChange={onChangeStatus}
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
        className={ error ? 'error' : '' }
        value={value}
        onChange={onChangeText}
        onKeyDown={onPresKey}  />
      <button onClick={onAddTask}>+</button>
      { error && <div className='error_message'>{error}</div> }
      <ul className='tasks_list'>
        {tasks}
      </ul>
      <div className='buttons_block'>
        <button 
          className={props.filter === 'all' ? 'active_filter' : ''} 
          onClick={onAllFilter}>All</button>
        <button 
          className={props.filter === 'active' ? 'active_filter' : ''} 
          onClick={onActiveFilter}>Active</button>
        <button 
          className={props.filter === 'completed' ? 'active_filter' : ''} 
          onClick={onCompletedFilter}>Completed</button>
      </div>
    </div>
  )
};

