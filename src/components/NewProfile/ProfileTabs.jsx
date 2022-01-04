import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";
import AddPost from "./addPost/AddPost";
import AddQuestion from "./addPost/AddQuestion";
import Postcard from "./Postcard";
import Questionscard from "./Questionscard";
import { Link } from "react-router-dom";


const ProfileTabs = () => {
  const [tab, setTab] = useState("posts");
  const [addPost, setAddPost] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const addPostHandler = () => {
    setAddPost((state) => !state);
  };
  const addQuestionHandler = () => {
    setAddQuestion((state) => !state);
  };
  return (
   
    <div className={classes.container}>
      <div className={classes.profileTabs}>
        <Tabs
          id="profiletab"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
          className="mb-3"
        >
          <Tab eventKey="posts" title="Posts">
            {/* {!addPost && (
              <div className={classes.postbtndiv}>
                <button onClick={addPostHandler} className="btn btn-primary">
                  Create Post
                </button>
              </div>
            )}
            {addPost && <AddPost />} */}
            <Postcard/>
          </Tab>
          <Tab eventKey="questions" title="Questions">
            {!addQuestion && (
              <div className={classes.postbtndiv}>
                <Link
                  className="btn btn-primary"
                  to={"/forms/question"}
                >
                  Add a question
                </Link>
              </div>
            )}
            {addQuestion && <AddQuestion />}
          </Tab>
        </Tabs>
      
        </div>
      </div>
      
   
  );
};

export default ProfileTabs;
