import React, { useState } from "react";
import classes from "./Form.module.css";
import AddIcon from "@mui/icons-material/Add";
import PostModal from "./PostModal";
import ImageInputBox from "./ImageInputBox/ImageInputBox";
import TextInputBox from "./TextInputBox/TextInputBox";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { profileActions } from "../../store/profile";
import { useSelector } from "react-redux";
import { sendPostData } from "../../store/post-actions";

const PostForm = () => {
  const auth = useSelector((state) => state.auth);
  const about = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [inputList, setInputList] = useState([]);
  const [banner, setBanner] = useState();
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();

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
    const finalData = inputList.map((input) => {
      if (input.type === "text") {
        input.value = input.value;
      }
      else{
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
        bookmarks:0,
        postTitle: title,
        imageUrl: "https://picsum.photos/200",
        postSummary:summary,
        postData: finalData,
        comments:[]
    }
    dispatch(sendPostData(postData, postId));
    var postIds = [...about.postIds, postId]
    dispatch(
      profileActions.update({ ...about, postIds: postIds })
    );
  };

  return (
    <div className={"col-md-8 " + classes.form}>
      <form className={"container"} onSubmit={onSubmitHandler}>
        <br />
        <div className="d-flex align-items-center justify-content-between">
          <h1>
            <b>Step 1: </b> Create the post
          </h1>
          <select class="form-select" aria-label="Default select example" style={{ width: '10em', backgroundColor: '#05386b', color: 'white', fontWeight: '600' }} required>
            <option selected disabled>Select genre</option>
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
          height={"30vh"}
          isAdded={false}
          onChange={bannerHandler}
          inputname={"Add banner image"}
        />
        <br />
        <TextInputBox
          inputname={"Title"}
          isAdded={false}
          onChange={titleHandler}
        />
        <br />
        <TextInputBox
          inputname={"Summary"}
          height={"100px"}
          isAdded={false}
          onChange={summaryHandler}
        />
        <br />
        {inputList.map((input, index) => {
          return input.type === "text" ? (
            <>
              <TextInputBox
                key={input.id}
                id={input.id}
                inputname={`Content cell ${index + 1}`}
                isAdded={true}
                onChange={inputChangeHandler}
                onDelete={deleteInputHandler}
              />
              <br />
            </>
          ) : (
            <>
              <ImageInputBox
                key={input.id}
                id={input.id}
                height={"20vh"}
                inputname={`Add image ${index + 1}`}
                isAdded={true}
                onChange={inputChangeHandler}
                onDelete={deleteInputHandler}
              />
              <br />
            </>
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
