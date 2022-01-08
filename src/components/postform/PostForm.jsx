import React, { useState } from "react";
import classes from "./Form.module.css";
import AddIcon from "@mui/icons-material/Add";
import PostModal from "./PostModal";
import ImageInputBox from "./ImageInputBox/ImageInputBox";
import TextInputBox from "./TextInputBox/TextInputBox";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../store/profile";
import { sendPostData } from "../../store/post-actions";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../auth/LoadingSpinner";
import { postsActions } from "../../store/posts";
const PostForm = () => {
  const auth = useSelector((state) => state.auth);
  const about = useSelector((state) => state.profile);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [inputList, setInputList] = useState([]);
  const [banner, setBanner] = useState();
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [submit, setSubmit] = useState(false);
  const [genre, setGenre] = useState(false);
  const navigate = useNavigate();

  const bannerHandler = (value) => {
    setBanner(value);
  };

  const titleHandler = (value) => {
    setTitle(value);
  };

  const summaryHandler = (value) => {
    setSummary(value);
  };

  const addInputHandler = (type) => {
    setInputList((value) => [
      ...value,
      {
        id: uuidv4(),
        type: type,
        value: "",
      },
    ]);
    console.log(inputList);
  };

  const deleteInputHandler = (id) => {
    const values = [...inputList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputList(values);
  };

  const inputChangeHandler = (id, value) => {
    const newInputFields = inputList.map((input) => {
      if (input.id === id) {
        input.value = value;
      }
      return input;
    });

    setInputList(newInputFields);
  };

  const onSubmitHandler = (event) => {
    const postId = uuidv4();
    const uid = auth.localId;
    var today = new Date();
    const publishedDate = today.toLocaleDateString("en-US");
    event.preventDefault();
    if (genre === "" || summary === "" || title === "") {
      return;
    }
    const finalData = inputList.map((input) => {
      if (input.type === "text") {
        input.value = input.value;
      } else {
        input.value = "https://picsum.photos/200";
      }
      return input;
    });
    console.log({ banner, title, summary }, finalData);
    const postData = {
      postId: postId,
      likes: 0,
      uid: uid,
      publishedDate: publishedDate,
      bookmarks: 0,
      postTitle: title,
      imageUrl: "https://picsum.photos/200",
      postSummary: summary,
      postData: finalData,
      comments: [],
      genre: genre,
    };
    setSubmit(true);
    dispatch(sendPostData(postData, postId)).then((result) => {
      if (result === "success") {
        var postIds = [...about.postIds, postId];
        dispatch(profileActions.update({ ...about, postIds: postIds }));
        dispatch(postsActions.addPost(postData));
        setSubmit(false);

        navigate("/profile", { replace: true });
      }
    });
  };

  return submit ? (
    <LoadingSpinner />
  ) : (
    <div className={"col-md-8 " + classes.form}>
      <form className={"container"} onSubmit={onSubmitHandler}>
        <br />
        <div className="d-flex align-items-center justify-content-between">
          <h1>
            <b>Step 1: </b> Create the post
          </h1>
          <select
            onChange={(e) => {
              setGenre(e.target.value);
            }}
            class="form-select"
            aria-label="Default select example"
            style={{
              width: "10em",
              backgroundColor: "#05386b",
              color: "white",
              fontWeight: "600",
            }}
            required
          >
            <option value="" selected disabled>
              Select genre
            </option>
            <option value="tech">Technology</option>
            <option value="gadgets">Gadgets</option>
            <option value="coding">Coding</option>
            <option value="traveling">Traveling</option>
            <option value="movies">Movies</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>
        <br />
        <ImageInputBox
          id={"hello9"}
          height={"30vh"}
          isAdded={false}
          onChange={bannerHandler}
          inputname={"Add banner image"}
        />
        <br />
        <TextInputBox
          id={"hello0"}
          inputname={"Title"}
          isAdded={false}
          onChange={titleHandler}
        />
        <br />
        <TextInputBox
          id={"hello"}
          inputname={"Summary"}
          height={"100px"}
          isAdded={false}
          onChange={summaryHandler}
        />
        <br />
        {inputList.map((input, index) => {
          return input.type === "text" ? (
            <React.Fragment key={index}>
              <TextInputBox
                id={index}
                inputname={`Content cell ${index + 1}`}
                isAdded={true}
                onChange={inputChangeHandler}
                onDelete={deleteInputHandler}
              />
              <br />
            </React.Fragment>
          ) : (
            <React.Fragment  key={index}>
              <ImageInputBox
                id={index}
                height={"20vh"}
                inputname={`Add image ${index + 1}`}
                isAdded={true}
                onChange={inputChangeHandler}
                onDelete={deleteInputHandler}
              />
              <br />
            </React.Fragment>
          );
        })}
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginBottom: "1em" }}
        >
          Submit
        </button>
      </form>
      <button
        className={"btn btn-primary " + classes.floatingbutton}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <AddIcon />
      </button>
      <PostModal handler={addInputHandler} />
    </div>
  );
};

export default PostForm;
