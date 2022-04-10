import classes from "./newprofile.module.css";
import Avatar from "@mui/material/Avatar";
import { Container, Box, Chip } from "@mui/material";
import { Link } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Editform from "./EditForm/Editform";
import { useEffect } from "react";
import Members from "./Members/Members";
import { motion } from "framer-motion";
import LoadingSpinner from "../auth/LoadingSpinner";
import {
    getMyUserData,
    getOtherUserData,
    updateUserData,
    followUser,
    unFollowUser,
} from "../../requests/profile.request";
const Profile = (props) => {
    const [userId, setUserId] = useState("");
    console.log("this is runinng");
    const [submit, setSubmit] = useState(true);
    const [addform, setAddform] = useState(false);
    const [memtab, setmemTab] = useState(false);
    const [curUser, setCurUser] = useState(true); //setting current user to true
    const [userData, setUserData] = useState();
    const [followStatus, setFollowStatus] = useState(false);
    const [followersCount, setFollowersCount] = useState(
        0
    );
    const [followingCount, setFollowingCount] = useState(
        0
    );
    useEffect(() => {
        async function fetchCurUserData() {
            const data = await getMyUserData();
            console.log(data);
            setUserData(data);
            setFollowersCount(data.followers.length)
            setFollowingCount(data.following.length)
            setSubmit(false);
        }
        async function fetchOtherUserData() {
            const data = await getOtherUserData(props.uid);
            const data1 = await getMyUserData();
            console.log(data);
            setUserData(data);
            setUserId(data1._id);
            const findId = (list, id) =>{
                for (let i = 0; i < list.length; i++) {
                    const element = list[i];
                    if (element._id === id) {
                        return true;
                    }
                }
                
            }
            console.log(findId(data.followers, data1._id));
            if (findId(data.followers, data1._id)) {
                setFollowStatus(true);
            }
            setFollowersCount(data.followers.length)
            setFollowingCount(data.following.length)
            setSubmit(false);
        }
        if (props.uid === undefined) {
            fetchCurUserData();
        } else {
            fetchOtherUserData();
            setCurUser(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const editHandler = async (firstname, lastname, bio, genres) => {
        const result = await updateUserData(firstname, lastname, bio, genres);
        if (result.status) {
            setUserData((prev) => ({
                ...prev,
                firstname,
                lastname,
                bio,
                genres,
            }));
        }
    };
    const linkHandler = () => {
        if (curUser) {
            setmemTab(true);
        } 
    };
    const followHandler = async () => {
        if (followStatus) {
            await unFollowUser(userData._id);
            setFollowersCount((prev) => prev - 1);
            setFollowStatus(false);
        }else{
            await followUser(userData._id);
            setFollowersCount((prev) => prev + 1);
            setFollowStatus(true);
        }
        
    };
    return submit ? (
        <LoadingSpinner />
    ) : (
        <div className={classes.maincontainer}>
            <div className={classes.containerMd}>
                {!addform && !memtab && (
                    <Container
                        style={{ paddingLeft: "1em", paddingRight: "1em" }}
                        component={motion.div}
                        initial={{ x: "-50vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.1,
                            type: "spring",
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: "white",
                                height: "140px",
                                borderRadius: "0.3em",
                            }}
                        >
                            <div className="container-fluid">
                                <div className="row justify-content-end">
                                    <div className="col-1 p-0">
                                        <div
                                            style={{
                                                marginTop: "0.5em",
                                                marginLeft: "0.2em",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {curUser && ( //for keeping edit icon access to the current user
                                                <Link
                                                    underline="none"
                                                    color="black"
                                                    onClick={() =>
                                                        setAddform(true)
                                                    }
                                                >
                                                    <i className="bi bi-pencil-fill"></i>
                                                </Link>
                                            )}
                                            {!curUser && (
                                                <div
                                                    style={{ height: "1em" }}
                                                ></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-start">
                                    <div
                                        className="col-3"
                                        style={{
                                            marginRight: "2em",
                                            paddingLeft: "0.3em",
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: "85px",
                                                height: "85px",
                                            }}
                                        />
                                    </div>

                                    <div className="col-7">
                                        <div
                                            style={{
                                                fontSize: "18px",
                                                width: "200px",
                                            }}
                                        >
                                            <b>
                                                {userData.firstname}{" "}
                                                {userData.lastname}
                                            </b>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-7">
                                                <Link
                                                    underline="none"
                                                    onClick={linkHandler}
                                                >
                                                    <span
                                                        className={
                                                            classes.mainfollowers
                                                        }
                                                    >
                                                        <b>Followers</b>
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="col-5">
                                                <Link
                                                    underline="none"
                                                    onClick={linkHandler}
                                                >
                                                    {" "}
                                                    <span
                                                        className={
                                                            classes.mainfollowing
                                                        }
                                                    >
                                                        <b>Following</b>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row justify-content-end">
                                            <div className="col">
                                                <span
                                                    className={
                                                        classes.followercount
                                                    }
                                                >
                                                    <b>{followersCount}</b>
                                                </span>
                                            </div>
                                            <div className="col">
                                                <span
                                                    className={
                                                        classes.followingcount
                                                    }
                                                >
                                                    <b>{followingCount}</b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box
                            sx={{ height: "15px", backgroundColor: "#05386B" }}
                        ></Box>

                        <Box
                            sx={{
                                bgcolor: "white",
                                height: "385px",
                                borderRadius: "0.3em",
                            }}
                        >
                            <div className="row" style={{ marginTop: "0.2em" }}>
                                <span className={classes.genres}>
                                    <h5
                                        style={{
                                            borderBottom: "1px solid #c4c4c4",
                                            width: "14em",
                                            paddingBottom: "0.2em",
                                            fontSize: "1.2em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Interested Geners
                                    </h5>
                                </span>

                                <div
                                    className="col"
                                    style={{
                                        marginLeft: "1.2em",
                                        height: "60px",
                                    }}
                                >
                                    <div>
                                        {userData.genres.map((gen, i) => {
                                            console.log(gen);
                                            return (
                                                <Chip
                                                    key={i}
                                                    style={{
                                                        marginBottom: "0.5em",
                                                        marginRight: "0.3em",
                                                        backgroundColor:
                                                            "#8ee4af",
                                                        color: "#05386b",
                                                        fontWeight: "600",
                                                    }}
                                                    label={gen}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ height: "70px" }}>
                                <span className={classes.email}>
                                    <h5
                                        style={{
                                            borderBottom: "1px solid #c4c4c4",
                                            width: "14em",
                                            paddingBottom: "0.2em",
                                            fontSize: "1.2em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Email
                                    </h5>
                                </span>
                                <div
                                    className="col"
                                    style={{
                                        fontSize: "0.9em",
                                        marginLeft: "1.2em",
                                    }}
                                    //current user email else other users email
                                >
                                    {userData.email}
                                </div>
                                <br />
                            </div>

                            <div className="row" style={{ marginTop: "0.4em" }}>
                                <span className={classes.bio}>
                                    <h5
                                        style={{
                                            borderBottom: "1px solid #c4c4c4",
                                            width: "14em",
                                            paddingBottom: "0.2em",
                                            fontSize: "1.2em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Bio
                                    </h5>
                                </span>

                                <div
                                    className="row"
                                    style={{
                                        fontSize: "0.9em",
                                        marginLeft: "1.2em",
                                        overflowY: "scroll",
                                        overflowX: "hidden",
                                        width: "280px",
                                    }}
                                >
                                    {userData.bio}
                                </div>

                                <br />
                            </div>
                            {!curUser && userData._id !== userId && (
                                <div
                                    className="row"
                                    style={{ marginTop: "1em", height: "60px" }}
                                >
                                    <div className="col">
                                        <div>
                                            <button
                                                className={
                                                    classes.customfollowbtn
                                                }
                                                onClick={followHandler}
                                            >
                                                <b>
                                                    {followStatus
                                                        ? "Following"
                                                        : "Follow"}
                                                </b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Container>
                )}
                {addform &&
                    curUser && ( //giving access to the edit form only to the current user
                        <Editform
                            setAddform={setAddform}
                            editHandler={editHandler}
                            userDetails={userData}
                        />
                    )}
                {!curUser && <div style={{ height: "1em" }}></div>}
                {memtab && curUser && ( //for followers and following tab
                    <Members
                        followersCount={followersCount}
                        setFollowersCount={setFollowersCount}
                        followingCount={followingCount}
                        setFollowingCount={setFollowingCount}
                        userInfo={userData}
                        setUserData={setUserData}
                        curUser={curUser}
                        setmemTab={setmemTab}
                    />
                )}
                <br />
            </div>
        </div>
    );
};

export default Profile;
