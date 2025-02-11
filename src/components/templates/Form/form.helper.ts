import { Question } from '@interface/Question';

import {
  getFormQuestions as getFormQuestionsService,
} from '@services/formQuestion.service';

export const getFormQuestions = async (
  setFormQuestions: (questions: Question[]) => void
): Promise<void> => {
  const response = await getFormQuestionsService();
  setFormQuestions(response);
};
