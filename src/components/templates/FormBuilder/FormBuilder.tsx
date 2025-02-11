import React, { useEffect } from 'react';

import { Typography } from '@mui/material';

import QuestionCards from '@components/organisms/QuestionCards';
import { Question } from '@interface/Question';

import { debounce } from '@utils/debounce';

import { getFormQuestions, setFormQuestions } from './formBuilder.helper';

import style from './style.module.css';

const setFormQuestionsDebounced = debounce(setFormQuestions, 500);

const FormBuilder: React.FC = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);

  useEffect(() => {
    getFormQuestions(setQuestions);
  }, []);

  const handleUpdateQuestion = (questions: Question[]) => {
    setQuestions(questions);
    setFormQuestionsDebounced(questions, setQuestions);
  };

  return (
    <div className={style.container}>
      <Typography className={style.titleContainer} variant='h4'>
        Form Builder
      </Typography>
      <QuestionCards data={questions} onUpdate={handleUpdateQuestion} />
    </div>
  );
};

export default FormBuilder;
