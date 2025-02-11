import { Question } from '@interface/Question';

import { QuestionTypes } from '@constants/QuestionTypes';
import { NumberTypes } from '@constants/NumberTypes';

export const validateQuestion = (question: Question): boolean => {

  if(question.questionTitle === '') {
    return false;
  } else if(question.questionType === QuestionTypes.NONE) {
    return false;
  } else if(question.questionType === QuestionTypes.NUMBER) {
    if(question.numberType === NumberTypes.NONE || question.numberType === undefined) {
      return false;
    } else if(question.numberType === NumberTypes.DEFAULT) {
      if(question.numberMin === undefined || question.numberMax === undefined) {
        return false;
      } else if(question.numberMin > question.numberMax) {
        return false;
      }
    }
  }

  return true;
};