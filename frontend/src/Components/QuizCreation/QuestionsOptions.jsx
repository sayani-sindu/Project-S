import InputBox from "./InputBox.jsx";

const QuestionOptions = () => {
    const inputs = [
        { label: "Question", placeholder: "Write your question", type: "text" },
        { label: "Option 1", placeholder: "Write option 1", type: "text" },
        { label: "Option 2", placeholder: "Write option 2", type: "text" },
        { label: "Option 3", placeholder: "Write option 3", type: "text" },
        { label: "Option 4", placeholder: "Write option 4", type: "text" },
        { label: "Correct Answer", placeholder: "Correct answer", type: "text" },
    ];

    return (
        <div className="max-w-lg mx-auto p-4 space-y-4 bg-white rounded-lg shadow-md w-full">
            {inputs.map((input, index) => (
                <div key={index} className="flex flex-col">
                   
                    <InputBox
                        id={input.label}
                        label={input.label}
                        placeholder={input.placeholder}
                        type={input.type}
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            ))}
        </div>
    );
};

export default QuestionOptions;
