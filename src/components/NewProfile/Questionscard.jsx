import classes from "./question.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchQuestionsData } from "../../store/question-actions";

const Questionscard = () => {

  const quesdata = useSelector((state)=> state.questions)
  console.log(quesdata)
  const quesid = useSelector((state)=> state.profile.questionIds)
  console.log(quesid)
  
  const ques = ["Question1", "Question2", "Question3", "Question4"]
  return <div>

    <div class="container-fluid" style={{
      height: "535px", overflowY: "scroll",
      borderLeft: '1px solid #b1b1b1',
      borderRight: '1px solid #b1b1b1',
      borderBottom: '1px solid #b1b1b1',
      backgroundColor: '#edf5e1',
    }}>
      {quesdata.map((question) => (
        <div class="row" style={{ border: "1px solid #c4c4c4", width: "675px", marginTop: "1em", marginBottom: "1em", backgroundColor: 'white' }}>
          <div class="col-2">
            <div class="row">
              <div class="col" style={{ paddingBottom: "1em" }}>
                <div className={classes.votenum}>
                  <span style={{ fontSize: "24px" }}><b>999</b></span>
                </div>
                <div>
                  <span className={classes.votes}>Votes</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col" style={{ paddingBottom: "1em" }}>
                <div className={classes.answernum}>
                  <span style={{ fontSize: "24px" }}><b>999</b></span>
                  <div className={classes.answers}>
                    Answers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-10">
            <div class="row">
              <div class="col">
                <div className={classes.questitle}>
                  <b> {question.question}</b>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className={classes.quesinfo}>
                 {question.description}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className={classes.quesfooter}>
                  <div class="row">
                    <div class="col-5">
                      <Link underline="none" color="black"> <VisibilityIcon /> {" "} View Question</Link>
                    </div>
                    <div class="col-7">
                      <div className={classes.postedname}>
                        Asked by Surya on 10/08/2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

}

export default Questionscard