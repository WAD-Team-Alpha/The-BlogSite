import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header/Header";
import classes from "./Layout.module.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Leftq from "../components/Ques_details/leftq/leftq";
import Rightq from "../components/Ques_details/rightq/rightq";
import Middleq from "../components/Ques_details/middleq/middleq";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/auth/LoadingSpinner";
import { getQuestionData,getAnswersData } from "../requests/questionDetail.request";
import { getMyUserData } from "../requests/profile.request";
import axios from "axios";
const QuestionLayout = () => {
    const [submit, setSubmit] = useState(true);
    const [nav, setNav] = useState(false);
    const [data, setData] = useState({});
    const [comments, setComments] = useState();
    const [userId, setUserId] = useState("")

    const navHandler = () => {
        nav ? setNav(false) : setNav(true);
    };
    const params = useParams();
    const mainVarient = {
        hidden: {
            opacity: 0,
            x: "100vw",
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            x: "100vw",
            transition: {
                ease: "easeInOut",
            },
        },
    };
    const updateRecentActivity = (data, value) => {
        //Function to update the recent activity
        var temp;
        if (data.filter((obj) => obj.id === value.id) !== []) {
            temp = data.filter((obj) => obj.id !== value.id);
            temp = [value].concat(temp);
            return temp;
        }
        if (data.length === 10) {
            temp = data.pop();
            temp = [value].concat(data);
            return temp;
        } else {
            temp = [value].concat(data);
            return temp;
        }
    };

    // Effets to handle the api requests for the question data
    useEffect(() => {
        const addToRecents = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/activity/add_to_recents", {
                contentType: "question",
                contentId: params.threadID
            }, {headers: {
                Authorization: localStorage.getItem("token")
            }})
            return response
        }
        setSubmit(true);
        async function fetchQuestionData() {
            console.log(params.threadID);
            const data1 = await getQuestionData(params.threadID);
            const data = await getAnswersData(params.threadID);
            const userData = await getMyUserData();
            setUserId(userData._id)
            console.log(data);
            setComments(data);
            console.log(data1);
            setData(data1);
            setSubmit(false)
        }
        fetchQuestionData();
        addToRecents().then((response) => {
            console.log(response)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    window.scroll(0, 0);

    return submit ? (
        <LoadingSpinner />
    ) : (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && (
                <motion.div
                    variants={mainVarient}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className={"container-fluid " + classes.content}>
                        <div className="row">
                            <div
                                className={
                                    "col-md-2 shadow-lg " + classes.leftpane
                                }
                            >
                                <Leftq
                                    userId={userId}
                                    data={data}
                                    questionID={params.threadID}
                                    handler={executeScroll}
                                />
                            </div>
                            <div
                                className={
                                    "col-md-7 shadow-lg " + classes.middlepane
                                }
                            >
                                <Middleq
                                    questionID={params.threadID}
                                    data={data}
                                    comments={comments}
                                    theRef={myRef}
                                />
                            </div>
                            <div
                                className={
                                    "col-md-3 shadow-lg " + classes.rightpane
                                }
                            >
                                <Rightq
                                    questionID={params.threadID}
                                    data={data}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <Footer />
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default QuestionLayout;
