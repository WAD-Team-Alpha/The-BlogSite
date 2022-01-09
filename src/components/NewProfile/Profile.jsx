import classes from "./newprofile.module.css";
import Avatar from "@mui/material/Avatar";
import { Container, Box, Chip } from "@mui/material";
import { Link } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Editform from "./EditForm/Editform";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../store/profile";
import { useEffect } from "react";
import Members from "./Members/Members";
import { motion } from "framer-motion";
import { sendOtherProfileData } from "../../store/profile-actions";
import { fetchOtherProfileData } from "../../store/profile-actions";
import LoadingSpinner from "../auth/LoadingSpinner";
const Profile = (props) => {
  const [submit, setSubmit] = useState(false);
  const [otherProfileData, setOtherProfileData] = useState({});
  const authStatus = useSelector((state) => state.auth);
  const userInfo = useSelector((state) => state.profile);
  const [addform, setAddform] = useState(false);
  const [memtab, setmemTab] = useState(false);
  const dispatch = useDispatch();
  const [followStatus, setfollowStatus] = useState("Follow");
  const [curUser, setCurUser] = useState(true);

  const userDetails = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    bio: userInfo.bio,
    genres: userInfo.genres,
    followingList: userInfo.followingList,
    followersList: userInfo.followersList,
    postIds: userInfo.postIds,
    questionIds: userInfo.questionIds,
  };
  console.log(userInfo);
  console.log(userDetails.postIds);
  console.log(userDetails.genres);
  // console.log(props.userInfo.genres);

  const followCount = userDetails.followersList.length;
  // console.log(followCount)

  const followingCount = userDetails.followingList.length;
  console.log(followingCount);

  const editHandler = (firstName, lastName, email, bio, genres) => {
    console.log(firstName, lastName, email, bio, genres);
    dispatch(
      profileActions.update({
        firstName: firstName,
        lastName: lastName,
        email: email,
        bio: bio,
        genres: genres,
        followersList: userDetails.followersList,
        followingList: userDetails.followingList,
        postIds: userDetails.postIds,
        questionIds: userDetails.questionIds,
      })
    );
  };

  const formHandler = (e) => {
    setAddform((state) => !state);
  };

  const linkHandler = (e) => {
    setmemTab((state) => !state);
  };

  const followbuttonHandler = () => {
    if (followStatus === "Follow") {
      setfollowStatus("Following");
      const newData = {
        ...userInfo,
        followingList: [...userInfo.followingList, props.uid],
      };
      dispatch(sendOtherProfileData());
      dispatch(profileActions.update(newData));
    } else {
      setfollowStatus("Follow");
      return dispatch(profileActions.remove());
    }
  };
  useEffect(() => {
    setSubmit(true);
    if (props.uid === authStatus.localId) {
      setSubmit(false);
      return;
    }
    setCurUser(false);
    dispatch(fetchOtherProfileData(props.uid)).then((res) => {
      console.log(res);
      const data = {
        ...res,
        followerCount: res.followersList.length,
        followingCount: res.followingList.length,
      };

      setOtherProfileData(data);
      setSubmit(false);
      console.log(data);
      console.log("line 66 is running");
    });
  }, []);
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
            transition={{ duration: 1.5, delay: 0.1, type: "spring" }}
          >
            <Box
              sx={{ bgcolor: "white", height: "140px", borderRadius: "0.3em" }}
            >
              <div className="container-fluid">
                <div className="row justify-content-end">
                  <div class="col-1 p-0">
                    <div
                      style={{
                        marginTop: "0.5em",
                        marginLeft: "0.2em",
                        cursor: "pointer",
                      }}
                    >
                      {curUser && (
                        <Link
                          underline="none"
                          color="black"
                          onClick={formHandler}
                        >
                          <i class="bi bi-pencil-fill"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div class="row justify-content-start">
                  <div
                    class="col-3"
                    style={{ marginRight: "2em", paddingLeft: "0.3em" }}
                  >
                    <Avatar sx={{ width: "85px", height: "85px" }} />
                  </div>

                  <div class="col-7">
                    <div style={{ fontSize: "18px", width: "200px" }}>
                      <b>
                        {curUser
                          ? userDetails.firstName
                          : otherProfileData.firstName}{" "}
                        {curUser
                          ? userDetails.lastName
                          : otherProfileData.lastName}
                      </b>
                    </div>

                    <div class="row justify-content-center">
                      <div class="col-7">
                        <Link underline="none" onClick={linkHandler}>
                          <span className={classes.mainfollowers}>
                            <b>Followers</b>
                          </span>
                        </Link>
                      </div>
                      <div class="col-5">
                        <Link underline="none" onClick={linkHandler}>
                          {" "}
                          <span className={classes.mainfollowing}>
                            <b>Following</b>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div class="row justify-content-end">
                      <div class="col">
                        <span className={classes.followercount}>
                          <b>
                            {curUser
                              ? followCount
                              : otherProfileData.followerCount}
                          </b>
                        </span>
                      </div>
                      <div class="col">
                        <span className={classes.followingcount}>
                          <b>
                            {curUser
                              ? followingCount
                              : otherProfileData.followingCount}
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
            <Box sx={{ height: "15px", backgroundColor: "#05386B" }}></Box>

            <Box
              sx={{ bgcolor: "white", height: "385px", borderRadius: "0.3em" }}
            >
              <div class="row" style={{ marginTop: "0.2em" }}>
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
                {userDetails.genres.length !== 0 && (
                  <div
                    class="col"
                    style={{ marginLeft: "1.2em", height: "60px" }}
                  >
                    <div>
                      {curUser
                        ? userDetails.genres.map((gen) => (
                            <Chip
                              style={{
                                marginBottom: "0.5em",
                                marginRight: "0.3em",
                                backgroundColor: "#8ee4af",
                                color: "#05386b",
                                fontWeight: "600",
                              }}
                              label={gen}
                            />
                          ))
                        : otherProfileData.genres.map((gen) => {
                            console.log("this is running");
                            return (
                              <Chip
                                style={{
                                  marginBottom: "0.5em",
                                  marginRight: "0.3em",
                                  backgroundColor: "#8ee4af",
                                  color: "#05386b",
                                  fontWeight: "600",
                                }}
                                label={gen}
                              />
                            );
                          })}
                    </div>
                  </div>
                )}
              </div>
              <div class="row" style={{ height: "70px" }}>
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
                {userDetails.email !== "" && (
                  <div
                    class="col"
                    style={{ fontSize: "0.9em", marginLeft: "1.2em" }}
                  >
                    {curUser ? userDetails.email : otherProfileData.email}
                  </div>
                )}
                <br />
              </div>

              <div class="row" style={{ marginTop: "0.4em" }}>
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
                {userDetails.bio !== "" && (
                  <div
                    class="row"
                    style={{
                      fontSize: "0.9em",
                      marginLeft: "1.2em",
                      overflowY: "scroll",
                      overflowX: "hidden",
                      width: "280px",
                    }}
                  >
                    {curUser ? userDetails.bio : otherProfileData.bio}
                  </div>
                )}

                <br />
              </div>
              {!curUser && (
                <div class="row" style={{ marginTop: "1em", height: "60px" }}>
                  <div class="col">
                    <div>
                      <button
                        className={classes.customfollowbtn}
                        onClick={followbuttonHandler}
                      >
                        <b>{followStatus}</b>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Box>
          </Container>
        )}
        {addform && curUser && (
          <Editform
            setAddform={setAddform}
            editHandler={editHandler}
            userDetails={userDetails}
          />
        )}
        {memtab && (
          <Members
            userInfo={otherProfileData}
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
