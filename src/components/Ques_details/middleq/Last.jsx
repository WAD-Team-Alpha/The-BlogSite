//import ThumbUp from "@mui/icons-material/ThumbUp";
import { Avatar } from "@mui/material";
import classes from "./last.module.css";
//import TimerIcon from "@mui/icons-material/Timer";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
//import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import CommentsSection from "./commentsSection";
import { getAnswersData, postAnswer } from "../../../requests/questionDetail.request";
const Last = (props) => {
    console.log(props)
    const [comment, setComment] = useState("");
    // const data = props.data;
    const [comments, setComments] = useState(props.comments);
    const [submit, setSubmit] = useState(true);
    const addCommentHandler = async (event) => {
        // function to handle comments
        setSubmit(true);
        event.preventDefault();
        setComment("");
        if (comment === "") {
            return;
        }
        const result = await postAnswer(props.data._id, comment)
        const data = await getAnswersData(props.data._id);
        setComments(data);

    };
    

    return (
        <div className={classes.answers}>
            <span style={{ fontSize: "30px" }}>
                <b ref={props.theRef}>Answers</b>
            </span>
            <div>
                {comments.map((comment)=><CommentsSection
                    data={comment}
                    key={comment._id}
                />)}
                {/* <CommentsSection
                    data={data}
                /> */}
                <div>
                    <br />
                    <form onSubmit={addCommentHandler}>
                        {" "}
                        {/* adding comment onsubmit */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-1">
                                    <Avatar />
                                </div>
                                <div className="col-11">
                                    <TextField
                                        value={comment}
                                        fullWidth
                                        width="500px"
                                        helperText=" "
                                        id="ques_answer"
                                        label="Add an answer"
                                        onChange={(e) =>
                                            setComment(e.target.value)
                                        }
                                        multiline
                                        rows={3}
                                        size="small"
                                    />
                                    <Button variant="contained" type="submit">
                                        Submit
                                    </Button>
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
