import { TypeForFilterTasks } from '../App';

export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
};

type PropsType = {
  title: string
  tasks: Array<TaskType>
  onRemoveTask: (id: number) => void
  filteredTasks: (type: TypeForFilterTasks) => void
};

export const Todo = (props: PropsType) => {
  const tasks = props.tasks
    .map((task: any, i: number) => {
      return (
        <li key={i}>
          <input
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
        <button onClick={()=>props.filteredTasks('all')}>All</button>
        <button onClick={()=>props.filteredTasks('active')}>Active</button>
        <button onClick={()=>props.filteredTasks('completed')}>Completed</button>
      </div>
    </div>
  )
};

