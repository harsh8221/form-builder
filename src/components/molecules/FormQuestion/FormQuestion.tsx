import {useState} from 'react'

import { Input,FormHelperText, Typography, FormControl } from '@mui/material';

import { Question } from '@interface/Question';

import { getType } from './formQuestion.helper';
import style from './style.module.css';
import { QuestionTypes } from '@constants/QuestionTypes';

interface FormQuestionProps {
  question: Question;
  index: number,
  onChange: (index:number, answer: string | number) => void
}

const FormQuestion: React.FC<FormQuestionProps> = (props: FormQuestionProps) => {

  const {
    index,
    question,
    onChange, 
  } = props;

  const [error, setError] = useState("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(question.questionType === QuestionTypes.TEXT && question.isRequired) {
      if (event.target.value === "") {
        setError("Question must be answered");
        return;
      } else {
        setError("");
      }
    } else if (question.questionType === QuestionTypes.NUMBER) {
      if(event.target.value === ""){
        setError("Question must be answered")
        return;
      } else if(parseInt(event.target.value) > (question.numberMax || 0) || parseInt(event.target.value) < (question.numberMin || 0) ){
        setError(`Answer should be within Range of ${question.numberMin} and ${question.numberMax}`);
        return;
      } else {
        setError("");
      }
    }

    onChange(index, event.target.value);
  }

  return (
    <div className={style.container}>
      <Typography variant='h6'>
        {question.questionTitle}
        {question.isRequired && '*'}
      </Typography>
      <FormControl>
        <Input
          classes={{
            root: style.inputroot,
          }}
          onChange={handleChange}
          required={question.isRequired}
          multiline={question.isParagraph || false}
          type={getType(question)}
          id='my-input'
          aria-describedby='my-helper-text'
          placeholder='your answer'
          error={!!error}
        />
        <FormHelperText id='my-helper-text'>
          {question.helperText}
          {error}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default FormQuestion;