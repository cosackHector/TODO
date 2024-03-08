import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button, TextField, IconButton} from '@mui/material';
import { ControlPoint } from '@mui/icons-material';

// TYPES
type ItemPropsType = {
  addItem: (title: string) => void
}

// COMPONENT
export const AddItemForm = (props: ItemPropsType) => {

// STATES
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

// EVENT FUNCTIONS
  const onPresKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (value.trim() !== '' && e.key === 'Enter' ) {
      props.addItem(value.trim())
      setValue('')
    } else {
    setError('Invalid importance')
    }
  };
  const onAddTask = () => {
    if (value.trim() !== '') {
    props.addItem(value.trim())
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
      <TextField 
        label="text"
        error={!!error}
        value={value}
        helperText={error}
        onChange={onChangeText}
        onKeyDown={onPresKey}/>
      <IconButton 
        aria-label='add'
        color='primary'
        onClick={onAddTask} >
          <ControlPoint />
        </IconButton>
    </div>
  )
};

