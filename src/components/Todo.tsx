import { TypeForFilterTasks } from '../App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';

// TYPES
export type TaskType = {
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
  removeTodoList: (id: string) => void
  changeTitleInput: (newTitle: string, taskId: string, todoListId: string) => void
  changeTodoListTitle: (newTitle: string, todoListId: string) => void
};

// COMPONENT
export const Todo = (props: PropsType) => {

  // EVENT FUNCTIONS
const onAllFilter = () => props.filteredTasks('all', props.id);
const onActiveFilter = () => props.filteredTasks('active', props.id);
const onCompletedFilter = () => props.filteredTasks('completed', props.id);
const onRemoveTodoLIst = () => props.removeTodoList(props.id);
const addTask = (title: string) => {
  props.addTask(title, props.id)
};
const onChangeTitleTodoList = (newTitle: string,) => {
  props.changeTodoListTitle(newTitle, props.id)
}


  // TASKS LIST MAP
const tasks = props.tasks.map((task: any, i: number) => {
  const onRemove = () => props.removeTask(task.id, props.id)
  const onChangeStatus = () => props.changeStatus(task.id, props.id)
  const onChangeInputTitle = (newTitle: string) => {
    props.changeTitleInput(newTitle, task.id, props.id)
  }
  return (
    <li 
      key={task.id}
      className={ task.isDone ? 'is_done' : '' }>
      <input
        onChange={onChangeStatus}
        checked={task.isDone} 
        type="checkbox" />
      <EditableSpan 
        title={task.title}
        onChangeInputTitle={onChangeInputTitle}/>
      <button onClick={onRemove}>Выполнено</button>
    </li>)
  });

  return  (
    <div className='Todo'>
      <h3> 
        <EditableSpan 
          title={props.title}
          onChangeInputTitle={onChangeTitleTodoList}/>
          <button onClick={onRemoveTodoLIst}>Remove list</button>
        </h3>
      <AddItemForm addItem={addTask}/>
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


