import { Answer } from '@interface/Answer';
import { Question } from '@interface/Question';

export const checkRequiredAnswered = (questions: Question[], answers: {[key: number]: Answer}) => {
  let isAnswered = false;

  questions.forEach((question, index) => {
    if(question.isRequired && ( !answers[index])){
      isAnswered = true;
    } 
  })
  return isAnswered;
}