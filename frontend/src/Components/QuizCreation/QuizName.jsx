import InputBox from "./InputBox";
import { setQuizName } from "../../reducer/quizReducer";
import { useDispatch } from "react-redux";

const QuizName = () => {
    const dispatch = useDispatch();
    const onBlurHandler = (e) => {
        
        dispatch();
    }
            
          

   
      
    return(<>
     <InputBox type="text" onBlurHandler={onBlurHandler}  label="Quiz Title" placeholder="Enter The Quiz Name"/>
    </>)
}
export default QuizName;