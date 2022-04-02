import * as React from "react";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import classes from "./middlep.module.css";
const Middlep = (props) => {
    const [comment, setComment] = useState("");
    const profileData = props.profileData;

    const addCommentHandler = (event) => {
        // comment handler from leftp component
        event.preventDefault();
        if (comment === "") {
            return;
        }
    };
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
                    <img
                        src={"alt"}
                        alt="none"
                        width="800px"
                        height="248px"
                    />
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
                                    <b>
                                        {profileData.firstName +
                                            " " +
                                            profileData.lastName}
                                    </b>
                                    <br />
                                    Posted on <b>{"25th march"}</b>
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
                                            <b>{"Vatashi ga kita"}</b>
                                        </h3>
                                    </b>
                                    <hr />
                                </div>
                                <div>
                                    <p>{"This is lmao"}</p>
                                                <p className="mb-2 mt-2">
                                                    "Henlo"
                                                </p>
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
                                                        label={`Comment publicly as ${profileData.firstName}`}
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
                                                                    "Henloo"
                                                                </div>
                                                            </Box>
                                                        </div>
                                                    </div>
                                                </div>
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
