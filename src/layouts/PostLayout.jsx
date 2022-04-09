import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header/Header";
import classes from "./Layout.module.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Rightp from "../components/post_details/leftp/rightp/rightp";
import Leftp from "../components/post_details/leftp/leftp/leftp";
import Middlep from "../components/post_details/leftp/middlep/middlep";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/auth/LoadingSpinner";
import { getPostData,getCommentsData } from "../requests/postDetail.request";
import { getMyUserData } from "../requests/profile.request";
import axios from "axios";
const PostLayout = () => {
    const [nav, setNav] = useState(false); //State for the nav
    const [submit, setSubmit] = useState(true); //State for the loading spinner
    const [data, setData] = useState({});
    const [comments, setComments] = useState();
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("")
    // const updateRecentActivity = (data, value) => {
    //     //Updating recent activity locally
    //     var temp;
    //     var filtered = data.filter((obj) => obj.id === value.id);
    //     if (filtered.length !== 0) {
    //         temp = data.filter((obj) => obj.id !== value.id);
    //         temp = [value].concat(temp);
    //         return temp;
    //     }
    //     if (data.length >= 10) {
    //         var limited = [...data];
    //         limited.pop();
    //         temp = [value].concat(limited);
    //         return temp;
    //     } else {
    //         temp = [value].concat(data);
    //         return temp;
    //     }
    // };

    const navHandler = () => {
        // Setting the nav handler
        nav ? setNav(false) : setNav(true);
    };
    const params = useParams(); // Extracting the data from the routing params
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
    // Useeffects are used here for fetching and sending the data for the post data
    useEffect(() => {
        console.log("use effetct is running");
        const addToRecents = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/activity/add_to_recents", {
                contentType: "post",
                contentId: params.postID
            })
            return response
        }
        setSubmit(true);
        async function fetchPostData() {
            console.log(params.threadID);
            const data1 = await getPostData(params.postID);
            const data = await getCommentsData(params.postID);
            const userData = await getMyUserData();
            setUserId(userData._id)
            setUserId(userData.firstname)
            console.log(data);
            setComments(data);
            console.log(data1);
            setData(data1);
            setSubmit(false)
        }
        fetchPostData();
        addToRecents().then((response) => {console.log(response)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

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
                                <Leftp
                                    postID={params.postID}
                                    data={data}
                                    userId={userId}
                                    handler={executeScroll}
                                />
                            </div>
                            <div
                                className={
                                    "col-md-7 shadow-lg " + classes.middlepane
                                }
                            >
                                <Middlep
                                    postID={params.postID}
                                    userName={userName}
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
                                <Rightp
                                    postID={params.postID}
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

export default PostLayout;
