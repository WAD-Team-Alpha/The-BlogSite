import { Avatar } from "@mui/material";
import classes from "./last.module.css";
import TimerIcon from "@mui/icons-material/Timer";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import { useState } from "react";
import { useSelector } from "react-redux";


const CommentsSection = (props) => {

    const commentsdata = useSelector((state)=>state.question)
    const [correctionstatus, setcorrectionstatus] = useState("Mark as correct");
    const [correctionicon,setCorrectionIcon] = useState(<TimerIcon />)
  
    const correctionHandler = (props) => {
          if (correctionstatus==="Mark as correct") {
              setcorrectionstatus("Marked")
              setCorrectionIcon(<DoneSharpIcon style={{color:"green"}}/>)
          } else {
              setcorrectionstatus("Mark as correct")
              setCorrectionIcon(<TimerIcon/>)
          }
    }
    return(
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
                <div className={classes.answersection}><b>{props.profileData.firstName}</b></div>
                <div className={classes.answertime}> Answerd on {commentsdata.publishedDate} </div>
              </div>
              <div class="col-4" style={{ paddingLeft: "4em", textAlign:"right" }}>
                <button class="btn shadow-none" onClick={correctionHandler}>
                  <b>{correctionstatus}</b>
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
                 {props.comment.text}
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div className={classes.timeicon} style={{textAlign:"right"}}>
                  {correctionicon}
                </div>
              </div>
            </div>
          </div>
    )
}

export default CommentsSection
