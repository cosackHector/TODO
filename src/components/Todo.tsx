import { TypeForFilterTasks } from '../App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

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
};

  // TASKS LIST MAP
const tasks = props.tasks.map((task: any, i: number) => {
  const onRemove = () => props.removeTask(task.id, props.id)
  const onChangeStatus = () => props.changeStatus(task.id, props.id)
  const onChangeInputTitle = (newTitle: string) => {
    props.changeTitleInput(newTitle, task.id, props.id)
  }
  return (
    <div 
      key={task.id}
      className={ task.isDone ? 'is_done' : '' }>
      <Checkbox color="secondary" 
        onChange={onChangeStatus}
        checked={task.isDone}/>
      <EditableSpan 
        title={task.title}
        onChangeInputTitle={onChangeInputTitle}/>
        <IconButton onClick={onRemove} aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
    </div>)
  });

  return  (
    <div className='Todo'>
      <h3> 
        <EditableSpan 
          title={props.title}
          onChangeInputTitle={onChangeTitleTodoList}/>
        <IconButton onClick={onRemoveTodoLIst} aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </h3>
      <AddItemForm addItem={addTask}/>
      <div className='container__tasks-lists'>
        {tasks}
      </div>
      <div className='container__buttons-filters'>
        <Button
          variant={props.filter === 'all' ? 'contained' : 'text'} 
          onClick={onAllFilter}>All</Button>
        <Button 
          color={'primary'}
          variant={props.filter === 'active' ? 'contained' : 'text'} 
          onClick={onActiveFilter}>Active</Button>
        <Button 
          color={'secondary'}
          variant={props.filter === 'completed' ? 'contained' : 'text'}
          onClick={onCompletedFilter}>Completed</Button>
      </div>
    </div>
  )
};


