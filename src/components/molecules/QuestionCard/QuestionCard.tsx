import React from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from '@mui/material';
import { ExpandMore, Delete as DeleteIcon } from '@mui/icons-material';

import { QuestionTypes } from '@constants/QuestionTypes';

import QuestionTextField from '@components/atoms/QuestionTextField';
import QuestionTypeTextField from '@components/atoms/QuestionTypeTextField';
import QuestionRequiredSwitch from '@components/atoms/QuestionRequiredSwitch';
import QuestionHelperTextField from '@components/atoms/QuestionHelperTextField';

import { Question } from '@interface/Question';

import style from './style.module.css';

interface QuestionCardProps {
  expanded: boolean;
  question: Question;
  questionNumber: number;
  onChange: (question: Question) => void;
  toggleExpanded: (index: number) => void;
  onDelete: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = (props: QuestionCardProps) => {
  const {
    expanded,
    question,
    questionNumber,
    onChange,
    toggleExpanded,
    onDelete,
  } = props;

  const handleChanges = (field: string, value: string | number | boolean | QuestionTypes) => {
    onChange({
      ...question,
      [field]: value,
    });
  }

  const handleDelete = () => {
    onDelete(questionNumber);
  }

  const handleAccordionToggle = () => {
    toggleExpanded(questionNumber);
  }

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleAccordionToggle}>
        <AccordionSummary
          classes={{ content: style.accordionSummary}}
          expandIcon={<ExpandMore />}>
          <Typography variant='h6'>
            Question {questionNumber + 1} {!expanded && ':'}{' '}
            {!expanded && question.questionTitle}
          </Typography>
          {!expanded && (
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </AccordionSummary>
        <AccordionDetails
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <QuestionTextField
            question={question.questionTitle}
            onChange={handleChanges}
          />
          <div className={style.questionTypeContainer}>
            <QuestionTypeTextField
              questionType={question.questionType}
              onChange={handleChanges}
            />
            <QuestionRequiredSwitch
              isRequired={question.isRequired}
              onChange={handleChanges}
            />
          </div>
          <QuestionHelperTextField
            helperText={question.helperText}
            onChange={handleChanges}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default QuestionCard