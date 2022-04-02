import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Postcard from "./Postcard";
import Questionscard from "./Questionscard";
import { useEffect } from "react";
import LoadingSpinner from "../auth/LoadingSpinner";
const ProfileTabs = (props) => {
    const [tab, setTab] = useState("posts");
    const [submit, setSubmit] = useState(true);
    const [questionsData, setQuestionsData] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [curUser, setCurUser] = useState(true);
    useEffect(() => {
        setSubmit(false);
        if (props.uid === localStorage.getItem("localId")) {
            setSubmit(true);
            return;
        }
        setCurUser(false);
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
