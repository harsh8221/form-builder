import React from 'react';

import { TextField } from '@mui/material';

interface QuestionTextFieldProps {
  question: string;
  error: boolean;
  onChange: (field: string, value: string) => void;
}

const QuestionTextField: React.FC<QuestionTextFieldProps> = (
  props: QuestionTextFieldProps
) => {
  const { question, error, onChange } = props;
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange('questionTitle', event.target.value);
  };

  return (
    <TextField
      fullWidth
      required
      error={error}
      value={question}
      onChange={handleChanges}
      label='Question Title'
      placeholder='Enter your question here'
      variant='outlined'
      helperText={error ? 'Question is required' : ''}
    />
  );
};

export default QuestionTextField