import { TextField } from '@mui/material';
import React from 'react'

interface QuestionNumberTextFieldProps {
  error: boolean;
  value: number | undefined;
  fieldKey: string;
  onChange: (field: string, value: string | number) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
}

const QuestionNumberTextField: React.FC<QuestionNumberTextFieldProps> = (props: QuestionNumberTextFieldProps) => {

  const {
    value,
    onChange,
    error,
    label = 'Number',
    placeholder = 'Enter a number',
    helperText = 'Number is required',
    fieldKey = 'number',
  } = props;

  return (
    <TextField
      type='number'
      fullWidth
      required
      error={error}
      variant='outlined'
      label={label}
      placeholder={placeholder}
      onChange={(event) => onChange(fieldKey, event.target.value)}
      value={value}
      helperText={error ? helperText : ''}
    />
  )
}

export default QuestionNumberTextField