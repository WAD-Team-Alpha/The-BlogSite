//import ThumbUp from "@mui/icons-material/ThumbUp";
import { Avatar } from "@mui/material";
import classes from "./last.module.css";
//import TimerIcon from "@mui/icons-material/Timer";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
//import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import CommentsSection from "./commentsSection";

const Last = (props) => {
    const [comment, setComment] = useState("");
    const profileData = props.profileData;
    const addCommentHandler = (event) => {
        // function to handle comments

        event.preventDefault();
        setComment("");
        if (comment === "") {
            return;
        }
        var today = new Date();
        const publishedDate = today.toLocaleDateString("en-US");
    };

    return (
        <div className={classes.answers}>
            <span style={{ fontSize: "30px" }}>
                <b ref={props.theRef}>Answers</b>
            </span>
            <div>
                        <CommentsSection
                            profileData={profileData}
                            commentsdata={[{}]}
                            comment={comment}
                        />
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
