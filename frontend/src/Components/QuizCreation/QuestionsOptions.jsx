import InputBox from "./InputBox.jsx"; 

const QuestionOptions = ({ index, question, onQuestionChange }) => {
  // This function handles changes to question text or options
  const handleChange = (e) => {
    const updatedQuestion = {
      ...question,
      [e.target.name]: e.target.value, 
    };
    onQuestionChange(index, updatedQuestion); 
  };

  const inputs = [
    { label: "Question", placeholder: "Write your question", name: "question", value: question.question },
    { label: "Option 1", placeholder: "Write option 1", name: "option1", value: question.options[0] },
    { label: "Option 2", placeholder: "Write option 2", name: "option2", value: question.options[1] },
    { label: "Option 3", placeholder: "Write option 3", name: "option3", value: question.options[2] },
    { label: "Option 4", placeholder: "Write option 4", name: "option4", value: question.options[3] },
    { label: "Correct Answer", placeholder: "Correct answer", name: "correctAnswer", value: question.correctAnswer },
  ];

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4 bg-white rounded-lg shadow-md w-full">
      {inputs.map((input, idx) => (
        <div key={idx} className="flex flex-col">
          <InputBox
            id={input.name}
            label={input.label}
            placeholder={input.placeholder}
            type="text"
            value={input.value}
            name={input.name} 
            onChange={handleChange} // Use the handleChange to update state when an input is modified
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionOptions;
