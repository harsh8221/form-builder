import { Question } from '@interface/Question';

import { 
  getFormQuestions as getFormQuestionsService,
  setFormQuestions as setFormQuestionsService
 } from '@services/formQuestion.service';

export const getFormQuestions = async (setFormQuestions: (questions: Question[]) => void) : Promise<void> => {

  const response = await getFormQuestionsService();
  setFormQuestions(response);
}

export const setFormQuestions = async (questions: Question[], setFormQuestions: (questions: Question[]) => void) : Promise<void> => {

  await setFormQuestionsService(questions);
  setFormQuestions(questions);
}