import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import style from './style.module.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <Typography className={style.title} variant='h4'>
        Home Page
      </Typography>
      <div className={style.buttons}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/form')}>
          Fill the Form
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/form-builder')}>
          Create a Form
        </Button>
      </div>
    </div>
  );
};

export default Home;
