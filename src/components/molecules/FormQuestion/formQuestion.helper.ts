import { QuestionTypes } from '@constants/QuestionTypes'
import { Question } from '@interface/Question'
export const getType = (question: Question) => {

  if(question.questionType === QuestionTypes.TEXT){
    return 'text';
  } else if (question.questionType === QuestionTypes.NUMBER) {
    return 'number';
  }

  return 'text';
}