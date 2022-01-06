import ThumbUp from "@mui/icons-material/ThumbUp";
import { Avatar, Grid } from "@mui/material";
import classes from "./last.module.css";
import TimerIcon from "@mui/icons-material/Timer";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

const Last = () => {
  
  const commentsdata = useSelector((state)=> state.question)
  console.log(commentsdata)
  // const users = [
  //   "Mahaboob",
  //   "Surya",
  //   "Sekhar",
  //   "Satyam",
  //   "Prathyush",
  //   "user1",
  //   "user2",
  // ];
  return (
    <div className={classes.answers}>
      <span style={{ fontSize: "30px" }}>
        <b>Answers</b>
      </span>
      <div>
        {commentsdata.comments.map((comment) => (
          <div className={classes.anscon}>
            <div class="row">
              <div
                class="col-2"
                style={{
                  paddingLeft: "2em",
                  paddingTop: "0.5em",
                  width: "80px",
                }}
              >
                <Avatar sx={{ width: "60px", height: "60px" }} />
              </div>
              <div
                class="col-6"
                style={{ paddingLeft: "1.5em" }}
              >
                <div className={classes.answersection}><b><b> User </b></b></div>
                <div className={classes.answertime}> Answerd on 10/08/2021 </div>
              </div>
              <div class="col-4" style={{ paddingLeft: "4em", textAlign:"right" }}>
                <button class="btn shadow-none">
                  <b>Mark as correct answer</b>
                </button>
              </div>
            </div>
            <div class="row">
              <div
                class="col"
                style={{ paddingLeft: "2em", paddingTop: "1em" }}
              >
                <span>
                  {" "}
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisq.
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div className={classes.likeicon}>
                  <ThumbUp /> 999
                </div>
              </div>
              <div class="col-4">
                <div className={classes.timeicon}>
                  <TimerIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <br />
          <div class="container-fluid">
            <div class="row">
              <div class="col-1">
                <Avatar />
              </div>
              <div class="col-11">
                <TextField
                  fullWidth
                  width="500px"
                  helperText=" "
                  id="ques_answer"
                  label="Add an answer"
                  multiline
                  rows={3}
                  size="small"
                />
                <Button variant="contained">Submit</Button>
                <br />
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
