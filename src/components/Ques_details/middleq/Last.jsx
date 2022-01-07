import ThumbUp from "@mui/icons-material/ThumbUp";
import { Avatar, Grid } from "@mui/material";
import classes from "./last.module.css";
import TimerIcon from "@mui/icons-material/Timer";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { questionActions } from "../../../store/question";
import { sendQuestionData } from "../../../store/question-actions";

const Last = (props) => {
  const dispatch = useDispatch()
  const authdata = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.profile);
  const [comment, setComment] = useState("");
  const profileData = props.profileData;
  const commentsdata = useSelector((state)=>state.question)
  const [comments, setComments] = useState(commentsdata.comments);
  console.log(profileData)
  const addCommentHandler = (event) => {
    
    event.preventDefault();
    console.log("this is comment handler");
    if (comment === "") {
      return;
    }
    const newComments = [
      ...commentsdata.comments,
      { userId: authdata.localId, name: userData.firstName, text: comment },
    ];
    dispatch(questionActions.add({ ...commentsdata, comments: newComments }));
    setComments((state) => {
      return [
        ...state,
        { userId: authdata.localId, name: userData.firstName, text: comment },
      ];
    });
    dispatch(sendQuestionData({ ...commentsdata, comments: newComments }, commentsdata.questionId)).then((res) => {
      console.log("printing response", res);
    });
  };
 
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
                <div className={classes.answersection}><b>{profileData.firstName}</b></div>
                <div className={classes.answertime}> Answerd on {commentsdata.publishedDate} </div>
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
                 {comment.text}
                </span>
              </div>
            </div>
            <div class="row">
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
          <form onSubmit={addCommentHandler}>
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
                  onChange={(e) => setComment(e.target.value)}
                  multiline
                  rows={3}
                  size="small"
                />
                <Button variant="contained" type="submit" >Submit</Button>
                <br />
                <br />
                
              </div>
            </div>
          </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Last;
