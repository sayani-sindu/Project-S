const initialState = {
    quizName:'',
    questions:[]
}

const SET_QUIZ_NAME = 'SET_QUIZ_NAME';
const ADD_QUESTION ='ADD_QUESTION';
const REMOVE_QUESTION = 'REMOVE_QUESTION';
const SET_QUESTION_TEXT = 'SET_QUESTION_TEXT';
const SET_OPTION_TEXT = 'SET_OPTION_TEXT';
const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_QUIZ_NAME:
        state = { ...state, quizName: action.payload };
        break;
  
      case ADD_QUESTION:
        return {
          ...state,
          questions: [
            ...state.questions,
            { questionText: '', options: ['', '', '', ''], correctAnswer: '' },
          ],
        };
  
      case REMOVE_QUESTION:
        return {
          ...state,
          questions: state.questions.filter((_, index) => index !== action.payload.index),
        };
  
      case SET_QUESTION_TEXT:
        return {
          ...state,
          questions: state.questions.map((question, index) =>
            index === action.payload.index
              ? { ...question, questionText: action.payload.text }
              : question
          ),
        };
  
      case SET_OPTION_TEXT:
        return {
          ...state,
          questions: state.questions.map((question, index) => {
            if (index === action.payload.index) {
              const updatedOptions = [...question.options];
              updatedOptions[action.payload.optionIndex] = action.payload.text;
              return { ...question, options: updatedOptions };
            }
            return question;
          }),
        };
  
      case SET_CORRECT_ANSWER:
        return {
          ...state,
          questions: state.questions.map((question, index) =>
            index === action.payload.index
              ? { ...question, correctAnswer: action.payload.text }
              : question
          ),
        };
  
      default:
        return state;
    }
  };
  
  // Action creators
  export const setQuizName = (name) => ({
    type: SET_QUIZ_NAME,
    payload: name,
  });
  
  export const addQuestion = () => ({
    type: ADD_QUESTION,
  });
  
  export const removeQuestion = (index) => ({
    type: REMOVE_QUESTION,
    payload: { index },
  });
  
  export const setQuestionText = (index, text) => ({
    type: SET_QUESTION_TEXT,
    payload: { index, text },
  });
  
  export const setOptionText = (index, optionIndex, text) => ({
    type: SET_OPTION_TEXT,
    payload: { index, optionIndex, text },
  });
  
  export const setCorrectAnswer = (index, text) => ({
    type: SET_CORRECT_ANSWER,
    payload: { index, text },
  });
  
  export default quizReducer;