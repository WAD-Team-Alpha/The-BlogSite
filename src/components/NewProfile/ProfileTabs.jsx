import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Postcard from "./Postcard";
import Questionscard from "./Questionscard";
import { useEffect } from "react";
import LoadingSpinner from "../auth/LoadingSpinner";
import {
    getPostsData,getQuestionsData,getOtherPostsData,getOtherQuestionsData
} from "../../requests/profile.request";

const ProfileTabs = (props) => {
    const [tab, setTab] = useState("posts");
    const [submit, setSubmit] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [curUser, setCurUser] = useState(true);
    useEffect(() => {
        async function fetchCurUserData() {
            const postData = await getPostsData();
            const questionData = await getQuestionsData();
            console.log(postData,questionsData);
            setPostsData(postData);
            setQuestionsData(questionData);
            setSubmit(true);
        }
        async function fetchOtherUserData(id) {
            const postData = await getOtherPostsData(id);
            const questionData = await getOtherQuestionsData(id);
            console.log(postData,questionsData);
            setPostsData(postData);
            setQuestionsData(questionData);
            setSubmit(true);
        }
        if (props.uid === undefined) {
            fetchCurUserData();
        } else {
            fetchOtherUserData(props.uid);
            setCurUser(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return submit ? (
        <div className={classes.container}>
            <div className={classes.profileTabs}>
                <Tabs
                    id="profiletab"
                    activeKey={tab}
                    onSelect={(k) => setTab(k)} //setting tabs on select posts tab for posts and questions tabs for questions
                    style={{ borderColor: "#b1b1b1" }}
                >
                    <Tab eventKey="posts" title="Posts">
                        <Postcard curUser={curUser} postsData={postsData} />
                    </Tab>
                    <Tab
                        eventKey="questions"
                        title="Questions"
                        style={{ borderColor: "#b1b1b1" }}
                    >
                        <Questionscard
                            curUser={curUser}
                            questionsData={questionsData}
                        />
                    </Tab>
                </Tabs>
            </div>
        </div>
    ) : (
        <LoadingSpinner />
    );
};

export default ProfileTabs;
