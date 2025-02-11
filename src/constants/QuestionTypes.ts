export enum QuestionTypes {
  NONE = '',
  NUMBER = 'NUMBER',
  TEXT = 'TEXT',
  // EMAIL = 'EMAIL',
  // PHONE = 'PHONE',
  // DATE = 'DATE',
  // TIME = 'TIME',
  // PARAGRAPH = 'PARAGRAPH',
}

export const QuestionTypeLabels = {
  [QuestionTypes.TEXT]: 'Text',
  [QuestionTypes.NUMBER]: 'Number',
  // [QuestionTypes.EMAIL]: 'Email',
  // [QuestionTypes.PHONE]: 'Phone',
  // [QuestionTypes.DATE]: 'Date',
  // [QuestionTypes.TIME]: 'Time',
  // [QuestionTypes.PARAGRAPH]: 'Paragraph',
};