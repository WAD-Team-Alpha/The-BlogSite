import * as React from "react";
import { useState } from "react";
import banner_logo from "../../../../assets/images/banner_logo.png";
import { Avatar } from "@mui/material";
import india1 from "../../../../assets/images/india1.png";
import india2 from "../../../../assets/images/india2.jpg";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import classes from "./middlep.module.css";
import postData from "../../../../helpers/postData.json";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../../../../store/post";
import { sendPostData } from "../../../../store/post-actions";
const Middlep = (props) => {
  const dispatch = useDispatch();
  const data = postData.find((post) => post.id === parseInt(props.postID));
  const postdata = useSelector((state) => state.post);
  const authdata = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.profile);
  const [comment, setComment] = useState("");
  const profileData = props.profileData;
  const [comments, setComments] = useState(postdata.comments);
  const addCommentHandler = (event) => {
    event.preventDefault();
    console.log();
    if (comment === "") {
      return;
    }
    const newComments = [
      ...postdata.comments,
      { userId: authdata.localId, name: userData.firstName, text: comment },
    ];
    dispatch(postActions.add({ ...postdata, comments: newComments }));
    setComments((state) => {
      return [
        ...state,
        { userId: authdata.localId, name: userData.firstName, text: comment },
      ];
    });
    dispatch(sendPostData({ ...postdata, comments: newComments }, postdata.postId)).then((res) => {
      console.log("printing response", res);
    });
  };
  return (
    <>
      <div>
        <div style={{ padding: "1em" }}>
          <img
            src={postdata.imageUrl}
            alt="prathyush"
            width="800px"
            height="248px"
          />
        </div>
        <div>
          <div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-1">
                  <div>
                    <Avatar />
                  </div>
                </div>
                <div class="col-3">
                  {profileData.firstName + " " + profileData.lastName}
                  <br />
                  Posted on {postdata.publishedDate}
                  <br /> <br />
                </div>
                <div class="col-12">
                  <b>
                    <h3
                      style={{ size: "25px", font: "Roboto", width: "754px" }}
                    >
                      <b>{data.title}</b>
                    </h3>
                  </b>
                  <hr />
                </div>
                <div>
                  <p>{postdata.postSummary}</p>
                  {postdata.postData.map((val) => {
                    if (val.type === "text") {
                      return <p>{val.value}</p>;
                    } else {
                      return (
                        <div>
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

                <div>
                  <h2>
                    <b>Comments</b>
                  </h2>
                  <form onSubmit={addCommentHandler}>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-1">
                          <Avatar />
                        </div>
                        <div class="col-11">
                          {/* <p>Hi</p> */}
                          <TextField
                            fullWidth
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            helperText=" "
                            id="description_posts"
                            label={`Comment publicly as ${profileData.firstName}`}
                            multiline
                            rows={3}
                            size="small"
                          />
                          <Button type="submit" variant="contained">
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>

                  <br />
                  <br />
                  {comments.map((val) => (
                    <div>
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-1">
                            <Avatar />
                          </div>
                          <div class="col-11">
                            <Box
                              height="71px"
                              width="715px"
                              style={{ border: "2px solid #c4c4c4" }}
                            >
                              <div className={classes.commentsp}>
                                {val.text}
                              </div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middlep;
