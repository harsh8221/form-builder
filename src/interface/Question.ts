import { QuestionTypes } from '@constants/QuestionTypes';

export interface Question {
  questionTitle: string;
  questionType: QuestionTypes;
  helperText: string;
  isRequired: boolean;
  isParagraph?: boolean;
}