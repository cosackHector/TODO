import { ChangeEvent, KeyboardEvent, useState } from 'react';

// TYPES
type ItemPropsType = {
  id: string
  addTask: (title: string,  todoListId: string) => void
}

// COMPONENT
export const AddItemForm = (props: ItemPropsType) => {

// STATES
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

// EVENT FUNCTIONS
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
  return  (
    <div className='form_input'>
      <input 
        className={ error ? 'error' : '' }
        value={value}
        onChange={onChangeText}
        onKeyDown={onPresKey}  />
      <button onClick={onAddTask}>+</button>
      { error && <div className='error_message'>{error}</div> }
    </div>
  )
};

