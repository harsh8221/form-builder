import { storage } from '@utils/localStorage';
import { Question } from '@interface/Question';

export const getFormQuestions = async (): Promise<Question[]> => {

  try {
    const response = storage.get('formQuestions', [] as Question[]);
    return response;
  } catch (error) {
    console.error('Error fetching form questions:', error);
    return [] as Question[];
  }
}

export const setFormQuestions = async (questions: Question[]): Promise<void> => {
  try {
    await storage.set('formQuestions', questions);
  } catch (error) {
    console.error('Error saving form questions:', error);
  }
}