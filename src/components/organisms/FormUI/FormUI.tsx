import { useState } from 'react';

import { Button } from '@mui/material';

import { Answer } from '@interface/Answer';
import { Question } from '@interface/Question';

import FormQuestion from '@components/molecules/FormQuestion';

import style from './style.module.css';
import { checkRequiredAnswered } from './formUI.helpers';

interface FormUIProps {
  form: Question[];
}

const FormUI: React.FC<FormUIProps> = (props: FormUIProps) => {

  const { form } = props;

  const [answers, setAnswers] = useState<{[key: number]: Answer}>([]);

  const handleChange = (index:number, answer: string | number ) => {
    setAnswers(prevState => {
      return {
        ...prevState,
        [index]: {
          questionTitle: form[index].questionTitle,
          answer: answer
        } as Answer
      }
    });
  }

  const handleSubmit = () => {
    if (checkRequiredAnswered(form, answers)) {
      console.log(checkRequiredAnswered(form, answers));
      alert('All the required questions are not answered!!!, Please answer');
      return;
    }
    console.log("Answers: ", answers);
  }


  return (
    <div className={style.container}>
      <div className={style.questionContainer}>
        {form.map((question: Question, index) => (
          <FormQuestion
            index={index}
            question={question}
            onChange={handleChange}
          />
        ))}
      </div>
      <div>
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default FormUI