import React from 'react';

import { FormControlLabel, Switch } from '@mui/material';

import style from './style.module.css';

interface QuestionRequiredSwitchProps {
  isRequired: boolean,
  onChange: (field: string, value: boolean) => void,
}

const QuestionRequiredSwitch: React.FC<QuestionRequiredSwitchProps> = (props: QuestionRequiredSwitchProps) => {

  const { isRequired, onChange } = props;

  const handleChange = () => {
      onChange('isRequired', !isRequired);
  }

  return (
    <FormControlLabel
      className={style.container}
      required
      control={<Switch checked={isRequired} onChange={handleChange} />}
      label='Required'
    />
  );
}

export default QuestionRequiredSwitch