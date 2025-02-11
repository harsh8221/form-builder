import React from 'react';

import { TextField, MenuItem } from '@mui/material';

import style from './style.module.css';

interface QuestionTypeTextFieldProps {
  error: boolean;
  questionType: string;
  onChange: (field: string, value: string) => void;
  fieldKey: string;
  options: {
    [key: string]: string;
  };
  label?: string;
  placeholder?: string;
  helperText?: string;
}

const QuestionTypeTextField: React.FC<QuestionTypeTextFieldProps> = (
  props: QuestionTypeTextFieldProps
) => {
  const {
    questionType,
    onChange,
    error,
    label = 'Question Type',
    placeholder = 'Select a question type',
    helperText = 'Question type is required',
    options,
    fieldKey = 'questionType',
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(fieldKey, event.target.value);
  };

  return (
    <TextField
      select
      fullWidth
      required
      error={error}
      variant='outlined'
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
      value={questionType}
      helperText={error ? helperText : ''}
      inputProps={{
        className: style.input,
      }}>
      {Object.entries(options).map(([key, value]) => (
        <MenuItem key={key} value={key} className={style.option}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default QuestionTypeTextField