import React from 'react';

import { FormControlLabel, Switch } from '@mui/material';

import style from './style.module.css';

interface QuestionRequiredSwitchProps {
  toggled: boolean | undefined;
  fieldKey: string;
  label: string;
  required?: boolean | undefined;
  onChange: (field: string, value: boolean) => void;
}

const QuestionRequiredSwitch: React.FC<QuestionRequiredSwitchProps> = (
  props: QuestionRequiredSwitchProps
) => {
  const {
    toggled,
    onChange,
    fieldKey = 'isRequired',
    label,
    required = false,
  } = props;

  const handleChange = () => {
    onChange(fieldKey, !toggled);
  };

  return (
    <FormControlLabel
      className={style.container}
      required={required}
      control={<Switch checked={toggled} onChange={handleChange} />}
      label={label}
    />
  );
};

export default QuestionRequiredSwitch