import React, { useEffect } from 'react';

import { Question } from '@interface/Question';

import FormUI from '@components/organisms/FormUI';

import { getFormQuestions } from './form.helper';
import style from './style.module.css';

const Form: React.FC = () => {
  const [form, setForm] = React.useState<Question[]>([]);

  useEffect(() => {
    getFormQuestions(setForm);
  }, []);

  return (
    <div className={style.container}>
      Fill the Form
      <FormUI form={form} />
    </div>
  );
};

export default Form;
