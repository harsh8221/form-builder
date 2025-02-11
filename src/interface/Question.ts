import { QuestionTypes } from '@constants/QuestionTypes';
import { NumberTypes } from '@constants/NumberTypes';

export interface Question {
  questionTitle: string;
  questionType: QuestionTypes;
  helperText: string;
  isRequired: boolean;
  isParagraph?: boolean;
  numberType?: NumberTypes;
  numberMin?: number;
  numberMax?: number;
  DateMin?: string;
  DateMax?: string;
}