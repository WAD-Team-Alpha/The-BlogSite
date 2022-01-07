import React, { useState } from "react";
import ImageInputBox from "./ImageInputBox/ImageInputBox";
import TextInputBox from "./TextInputBox/TextInputBox";
import classes from "./Form.module.css";
import { sendQuestionData } from "../../store/question-actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { profileActions } from "../../store/profile";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../auth/LoadingSpinner";
const QuestionForm = () => {
  const auth = useSelector((state) => state.auth);
  const about = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate()

  const imageHandler = (value) => {
    setImage(value);
  };

  const questionHandler = (value) => {
    setQuestion(value);
  };

  const descriptionHandler = (value) => {
    setDescription(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const questionId = uuidv4();
    var today = new Date();
    const publishedDate = today.toLocaleDateString("en-US");
    console.log({ question, description, image });
    setSubmit(true)
    dispatch(
      sendQuestionData(
        {
          question,
          description,
          imageUrl: "https://picsum.photos/200",
          questionId,
          publishedDate,
          userId: auth.localId,
          comments: [],
          likes: 0,
          bookmarks : 0,
          status : "active"
        },
        questionId
      )
    ).then((result) => {
      const questionIds = [...about.questionIds, questionId]
      dispatch(profileActions.update({ ...about, questionIds: questionIds }));
      setSubmit(false)
      navigate("/profile", {replace: true})
    });
  };

  return (
    submit ? <LoadingSpinner/> : <>
      <div className={"container-fluid " + classes.questionform}>
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form
              className={"container " + classes.form}
              onSubmit={onSubmitHandler}
            >
              <br />
              <h1>
                <b>Step 1: </b> Open the thread
              </h1>
              <br />
              <TextInputBox
                inputname={"Question"}
                isAdded={false}
                onChange={questionHandler}
              />
              <br />
              <TextInputBox
                inputname={"Description"}
                height={"100px"}
                isAdded={false}
                onChange={descriptionHandler}
              />
              <br />
              <ImageInputBox
                height={"30vh"}
                isAdded={false}
                onChange={imageHandler}
                inputname={"Attach image"}
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginBottom: "1em" }}
              >
                Publish post
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
