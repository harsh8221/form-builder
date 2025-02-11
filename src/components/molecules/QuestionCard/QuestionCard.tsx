import React from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from '@mui/material';
import { ExpandMore, Delete as DeleteIcon } from '@mui/icons-material';

import { QuestionTypes, QuestionTypeLabels } from '@constants/QuestionTypes';

import QuestionTextField from '@components/atoms/QuestionTextField';
import QuestionTypeTextField from '@components/atoms/QuestionTypeTextField';
import QuestionRequiredSwitch from '@components/atoms/QuestionRequiredSwitch';
import QuestionHelperTextField from '@components/atoms/QuestionHelperTextField';

import { Question } from '@interface/Question';

import style from './style.module.css';
import QuestionNumberFields from '../QuestionNumberFields';

interface QuestionCardProps {
  expanded: boolean;
  question: Question;
  questionNumber: number;
  onChange: (question: Question) => void;
  toggleExpanded: (index: number) => void;
  onDelete: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = (
  props: QuestionCardProps
) => {
  const {
    expanded,
    question,
    questionNumber,
    onChange,
    toggleExpanded,
    onDelete,
  } = props;

  const [questionNameError, setQuestionNameError] = React.useState(false);
  const [questionTypeError, setQuestionTypeError] = React.useState(false);

  const handleChanges = (
    field: string,
    value: string | number | boolean | QuestionTypes
  ) => {
    console.log('Hello: ', field, value);

    if (field === 'questionTitle') {
      if (value === '') {
        setQuestionNameError(true);
      } else {
        setQuestionNameError(false);
      }
    } else if (field === 'questionType') {
      if (value === QuestionTypes.NONE) {
        setQuestionTypeError(true);
      } else {
        setQuestionTypeError(false);
      }
    }

    onChange({
      ...question,
      [field]: value,
    });
  };

  const handleDelete = () => {
    onDelete(questionNumber);
  };

  const handleAccordionToggle = () => {
    toggleExpanded(questionNumber);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleAccordionToggle}>
        <AccordionSummary
          classes={{ content: style.accordionSummary }}
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
            error={questionNameError}
            question={question.questionTitle}
            onChange={handleChanges}
          />
          <div className={style.questionTypeContainer}>
            <QuestionTypeTextField
              error={questionTypeError}
              questionType={question.questionType}
              onChange={handleChanges}
              options={QuestionTypeLabels}
              fieldKey='questionType'
            />
            <QuestionRequiredSwitch
              fieldKey='isRequired'
              toggled={question.isRequired}
              onChange={handleChanges}
              label='Required'
            />
          </div>
          <QuestionHelperTextField
            helperText={question.helperText}
            onChange={handleChanges}
          />

          {question.questionType === QuestionTypes.TEXT && (
            <QuestionRequiredSwitch
              fieldKey='isParagraph'
              toggled={question.isParagraph}
              onChange={handleChanges}
              label='isParagraph'
            />
          )}

          {question.questionType === QuestionTypes.NUMBER && (
            <QuestionNumberFields
              numberType={question.numberType}
              numberMin={question.numberMin}
              numberMax={question.numberMax}
              onChange={handleChanges}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuestionCard