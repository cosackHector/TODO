import { useState, ChangeEvent } from 'react';
import { TaskType } from './Todo';

// TYPES
type PropsType = {
  title: string
  onChangeInputTitle: (newTitle: string) => void
}

// COMPONENT
export const EditableSpan = (props: PropsType) => {

// STATES
const [editMode, setEditMode] = useState(true)
const [title, setTitle] = useState('')

// EVENT FUNCTIONS
const activateEditMode = () => {
  setEditMode(false)
  setTitle(props.title)
}
const activateViewMode = () => {
  setEditMode(true)
  props.onChangeInputTitle(title)
}
const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
  const title = e.target.value
  setTitle(title)
}

  return  (
    editMode 
    ? <span onDoubleClick={activateEditMode}>{props.title}</span>
    : <input 
        autoFocus type='text' value={title}  
        onChange={onChangeInputText} onBlur={activateViewMode} />
  )
};


