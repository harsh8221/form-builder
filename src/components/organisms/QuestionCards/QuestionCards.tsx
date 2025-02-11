import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';

import QuestionCard from '@components/molecules/QuestionCard';
import NoQuestionView from '@components/molecules/NoQuestionView';

import { QuestionTypes } from '@constants/QuestionTypes';

import { Question } from '@interface/Question';

import { validateQuestion } from './questionCards.helpers';
import style from './style.module.css';

interface QuestionCardsProps {
  data: Question[];
  onUpdate: (questions: Question[]) => void;
}

const QuestionCards: React.FC<QuestionCardsProps> = (
  props: QuestionCardsProps
) => {
  const { data, onUpdate } = props;

  const [questions, setQuestions] = useState<Question[]>(data);
  const [expanded, setExpanded] = useState<number>(-1);

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      questionTitle: '',
      questionType: QuestionTypes.NONE,
      helperText: '',
      isRequired: false,
    };
    setQuestions((prevState) => {
      setExpanded(prevState.length);
      const newQuestions = [...prevState, newQuestion];
      return newQuestions;
    });
  };

  const handleSetExpanded = (index: number) => {
    setExpanded((prevState: number) => (prevState === index ? -1 : index));
  };

  const handleUpdateQuestion = (index: number, question: Question) => {
    setQuestions((prevState: Question[]) => {
      const newQuestions = [...prevState];
      newQuestions[index] = question;
      if (validateQuestion(question)) {
        onUpdate(newQuestions);
      }
      return newQuestions;
    });
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions((prevState: Question[]) => {
      const newQuestions = [...prevState];
      newQuestions.splice(index, 1);

      onUpdate(newQuestions);
      return newQuestions;
    });
  };

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  return (
    <div className={style.container}>
      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          expanded={expanded === index}
          onChange={(question) => handleUpdateQuestion(index, question)}
          questionNumber={index}
          question={question}
          toggleExpanded={handleSetExpanded}
          onDelete={handleDeleteQuestion}
        />
      ))}
      {!questions.length && <NoQuestionView />}
      <div className={style.buttonContainer}>
        <Button variant='contained' color='primary' onClick={handleAddQuestion}>
          Add Question
        </Button>
      </div>
    </div>
  );
};

export default QuestionCards;