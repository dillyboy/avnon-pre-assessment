export default interface QuestionTypeInterface {
  question: string;
  questionType: 'checkbox' | 'textarea';
  answer?: string;
  options?: any;
}
