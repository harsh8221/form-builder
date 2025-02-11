import React from 'react';

import { TextField } from '@mui/material';

import { QuestionTypes, QuestionTypeLabels } from '@constants/QuestionTypes';

import style from './style.module.css';

interface QuestionTypeTextFieldProps {
  questionType: QuestionTypes,
  onChange: (field: string, value: QuestionTypes ) => void,
}

const QuestionTypeTextField: React.FC<QuestionTypeTextFieldProps> = (props: QuestionTypeTextFieldProps) => {

  const { questionType, onChange } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange('questionType', event.target.value as QuestionTypes)
  }

  return (
    <TextField
      select
      fullWidth
      required
      variant='outlined'
      label='Question Type'
      placeholder='Select a question type'
      onChange={handleChange}
      value={questionType}
      inputProps={{
        className: style.input,
      }}
    >
      {Object.entries(QuestionTypeLabels).map(([key, value]) => (
        <option className={style.option} key={key} value={key}>
          {value}
        </option>
      ))}
    </TextField>
  );
}

export default QuestionTypeTextField