import classes from "./question.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "@mui/material";

const Questionscard = () => {

  const ques = ["Question1", "Question2", "Question3", "Question4"]
  return <div>

    <div class="container-fluid" style={{
      height: "535px", overflowY: "scroll",
      borderLeft: '1px solid #b1b1b1',
      borderRight: '1px solid #b1b1b1',
      borderBottom: '1px solid #b1b1b1',
      backgroundColor: '#edf5e1',
    }}>
      {ques.map((question) => (
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
                  <b> {question}</b>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className={classes.quesinfo}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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