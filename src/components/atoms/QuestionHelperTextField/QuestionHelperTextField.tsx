import React from 'react';

import { TextField } from '@mui/material';

interface QuestionHelperTextFieldProps {
  helperText: string;
  onChange: (field: string, value: string) => void;
}

const QuestionHelperTextField: React.FC<QuestionHelperTextFieldProps> = (props: QuestionHelperTextFieldProps) => {

  const {
    helperText,
    onChange,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange('helperText', event.target.value);
  };

  return (
    <TextField
      label='Helper Text'
      placeholder='Enter helper text here'
      variant='outlined'
      fullWidth
      value={helperText}
      onChange={handleChange}
    />
  );
}

export default QuestionHelperTextField;