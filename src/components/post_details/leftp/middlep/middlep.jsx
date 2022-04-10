import * as React from "react";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import classes from "./middlep.module.css";
import {
    postComment,
    getCommentsData,
} from "../../../../requests/postDetail.request";
const Middlep = (props) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(props.comments);
    const addCommentHandler = async (event) => {
        // comment handler from leftp component
        event.preventDefault();
        if (comment === "") {
            return;
        }
        const result = await postComment(props.data._id, comment);
        const data = await getCommentsData(props.data._id);
        setComment("");
        setComments(data);
    };
     console.log(props.data);

    const publishedDate = new Date(props.data.published_date)
    const date = publishedDate.getUTCDate()
    const month = publishedDate.getUTCMonth() + 1
    const year = publishedDate.getUTCFullYear()
    

    return (
        <div
            style={{
                backgroundColor: "white",
                marginTop: "1em",
                marginBottom: "1em",
                padding: "0.5em",
                borderRadius: "8px",
            }}
            className="shadow"
        >
            <div>
                <div style={{ padding: "1em" }}>
                    <img src={"alt"} alt="none" width="800px" height="248px" />
                </div>
                <div>
                    <div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-1">
                                    <div>
                                        <Avatar />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <b>{props.data.author}</b>
                                    <br />
                                    Posted on <b>{`${date}/${month}/${year}`}</b>
                                    <br /> <br />
                                </div>
                                <div className="col-12">
                                    <b>
                                        <h3
                                            style={{
                                                size: "25px",
                                                font: "Roboto",
                                                width: "754px",
                                            }}
                                        >
                                            <b>{props.data.title}</b>
                                        </h3>
                                    </b>
                                    <hr />
                                </div>
                                <div>
                                    <p className="mb-2 mt-2">
                                        {props.data.summary}
                                    </p>
                                    {props.data.cells.map((val) => {
                                        // itterating all the data from the post and showing it
                                        if (val.type === "text") {
                                            return (
                                                <p className="mb-2 mt-2">
                                                    {val.value}
                                                </p>
                                            );
                                        } else {
                                            return (
                                                <div className="mb-2 mt-2">
                                                    <img
                                                        src={val.value}
                                                        alt=""
                                                        width="760px"
                                                        height="187px"
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>

                                <hr />

                                <div ref={props.theRef}>
                                    <h2>
                                        <b>Comments</b>
                                    </h2>
                                    <form onSubmit={addCommentHandler}>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-1">
                                                    <Avatar />
                                                </div>
                                                <div className="col-11">
                                                    {/* <p>Hi</p> */}
                                                    <TextField
                                                        fullWidth
                                                        value={comment}
                                                        onChange={(e) =>
                                                            setComment(
                                                                e.target.value
                                                            )
                                                        }
                                                        helperText=" "
                                                        id="description_posts"
                                                        label={`Comment publicly as ${props.userName}`}
                                                        multiline
                                                        rows={3}
                                                        size="small"
                                                    />
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                    >
                                                        Submit
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <br />
                                    <br />
                                    <div>
                                        {comments.map((comment) => (
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <Avatar />
                                                    </div>
                                                    <div className="col-11">
                                                        <Box
                                                            height="71px"
                                                            width="715px"
                                                            style={{
                                                                border: "2px solid #c4c4c4",
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    classes.commentsp
                                                                }
                                                            >
                                                                {comment.text}
                                                            </div>
                                                        </Box>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middlep;
