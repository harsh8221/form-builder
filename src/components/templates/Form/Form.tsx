import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { Question } from '@interface/Question';

import FormUI from '@components/organisms/FormUI';

import { getFormQuestions } from './form.helper';
import style from './style.module.css';
import NoQuestionView from '@components/molecules/NoQuestionView';

const Form: React.FC = () => {
  const [form, setForm] = React.useState<Question[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFormQuestions(setForm);
  }, []);

  return (
    <div className={style.container}>
      <Typography className={style.titleContainer} variant='h4'>
        Fill the Form
      </Typography>
      {Object.entries(form).length === 0 && <NoQuestionView />}
      {Object.entries(form).length === 0 && (
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/form-builder')}>
          Create a Form
        </Button>
      )}
      {Object.entries(form).length !== 0 && <FormUI form={form} />}
    </div>
  );
};

export default Form;
