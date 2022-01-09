import { useSelector } from "react-redux";
import QuestionCard from "../home/cards/QuestionCard";

const Questionscard = (props) => {
  
  const quesdata = useSelector((state)=> state.questions)
  console.log(quesdata)
  
  const quesid = useSelector((state)=> state.profile.questionIds)
  console.log(quesid)
  console.log(props.questionsData);
  
  return <div>

    <div class="container-fluid" style={{
      height: "535px", overflowY: "scroll",
      borderLeft: '1px solid #b1b1b1',
      borderRight: '1px solid #b1b1b1',
      borderBottom: '1px solid #b1b1b1',
      backgroundColor: '#edf5e1',
    }}>
      {props.curUser ? quesdata.map((question) => (<QuestionCard
         key={question.questionId}
         id={question.questionId}
         votes={question.likes}
         answers={question.comments.length}
         question={question.question}
         details={question.description}
         userId = {question.userId}
         publishedDate={question.publishedDate}
        />
      )) : props.questionsData.map((question) => (<QuestionCard
        key={question.questionId}
        id={question.questionId}
        votes={question.likes}
        answers={question.comments.length}
        question={question.question}
        details={question.description}
        userId = {question.userId}
        publishedDate={question.publishedDate}
       />
     ))}
    </div>
  </div>

}

export default Questionscard