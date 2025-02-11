import QuestionTypeTextField from '@components/atoms/QuestionTypeTextField';
import QuestionNumberTextField from '@components/atoms/QuestionNumberTextField';
import { NumberTypeLabels, NumberTypes } from '@constants/NumberTypes';
import React from 'react';

import style from './style.module.css';

interface QuestionNumberFieldsProps {
  
  numberType?: NumberTypes;
  numberMin?: number;
  numberMax?: number;
  onChange: (field: string, value: string | number) => void;
}

const QuestionNumberFields: React.FC<QuestionNumberFieldsProps> = (props: QuestionNumberFieldsProps) => {

  const {
    numberType = NumberTypes.NONE,
    numberMin,
    numberMax,
    onChange,
  } = props;

  const [numberTypeError, setNumberTypeError] = React.useState(false);
  const [numberMinError, setNumberMinError] = React.useState("");
  const [numberMaxError, setNumberMaxError] = React.useState("");

  const handleChange = (field: string, value: string | number) => {
  
    if(field === 'numberType') {
      if(value === NumberTypes.NONE) {
        setNumberTypeError(true);
      } else {
        setNumberTypeError(false);
      }
    } else if(field === 'numberMin') {
      if(value === '') {
        setNumberMinError("Minimum number is required");
      } else if(numberMax && Number(value) > Number(numberMax)) {
        setNumberMinError('Minimum number should be less than maximum number');
      } else {
        setNumberMinError("");
        if(numberMax && Number(value) < Number(numberMax)) {
          setNumberMaxError('');
        }
      }
    } else if(field === 'numberMax') {
      if(value === '') {
        setNumberMaxError("Maximum number is required");
      } else if(numberMin && Number(value) < Number(numberMin)) {
        setNumberMaxError('Maximum number should be greater than minimum number');
      } else {
        setNumberMaxError("");
        if(numberMin && Number(value) > Number(numberMin)) {
          setNumberMinError('');
        }
      }
    }

    onChange(field, value);
  };

  return (
    <div className={style.container}>
      <QuestionTypeTextField
        error={numberTypeError}
        questionType={numberType}
        onChange={handleChange}
        label='Number Type'
        placeholder='Select a number type'
        helperText='Number type is required'
        options={NumberTypeLabels}
        fieldKey={'numberType'}
      />
      <QuestionNumberTextField
        error={!!numberMinError}
        value={numberMin}
        onChange={handleChange}
        label='Minimum Number'
        placeholder='Enter minimum number'
        helperText={numberMinError}
        fieldKey={'numberMin'}
      />
      <QuestionNumberTextField
        error={!!numberMaxError}
        value={numberMax}
        onChange={handleChange}
        label='Maximum Number'
        placeholder='Enter maximum number'
        helperText={numberMaxError}
        fieldKey={'numberMax'}
      />
    </div>
  );
}

export default QuestionNumberFields