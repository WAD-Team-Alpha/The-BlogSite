import classes from "./newprofile.module.css";
import Avatar from "@mui/material/Avatar";
import { Container, Box, Chip } from "@mui/material";
import { Link } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Editform from "./EditForm/Editform";
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from "../../store/profile";
import Members from "./Members/Members";
import { motion } from "framer-motion";




const Profile = () => {



  const userInfo = useSelector((state) => state.profile)
  const [addform, setAddform] = useState(false)
  const [memtab, setmemTab] = useState(false)
  const dispatch = useDispatch();
  const [followStatus, setfollowStatus] = useState("Follow");

  const userDetails = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    bio: userInfo.bio,
    genres: userInfo.genres,
    followinglist: userInfo.followinglist,
    followerslist: userInfo.followerslist
  }

  console.log(userDetails.followerslist)

  const followCount = userDetails.followerslist.length
  console.log(followCount)

  const followingCount = userDetails.followinglist.length
  console.log(followingCount)

  const editHandler = (
    firstName,
    lastName,
    email,
    bio,
    genres
  ) => {
    console.log(
      firstName,
      lastName,
      email,
      bio,
      genres
    );
    dispatch(
      profileActions.update({
        firstName: firstName,
        lastName: lastName,
        email: email,
        bio: bio,
        genres: genres
      })
    );
  };



  const formHandler = (e) => {
    setAddform((state) => !state)
  }

  const linkHandler = (e) => {
    setmemTab((state) => !state)
  }



  const followbuttonHandler = () => {
    if (followStatus === "Follow") {
      setfollowStatus("Following")
      return dispatch(profileActions.follow())
    }
    else {
      setfollowStatus("Follow")
      return dispatch(profileActions.remove())
    }
  }

  return (
    <div className={classes.maincontainer}>

      <div className={classes.containerMd}>
        {(!addform && !memtab) && (
          <Container style={{ paddingLeft: "1em", paddingRight: "1em" }} component={motion.div} initial={{ x: '-50vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 0.1, type: 'spring' }}>
            <Box
              sx={{ bgcolor: "white", height: "140px", borderRadius: "0.3em" }}
            >
              <div className="container-fluid">
                <div className="row justify-content-end">
                  <div class="col-1 p-0" >
                    <div style={{ marginTop: "0.5em", marginLeft: "0.2em", cursor: "pointer" }}>
                      <Link
                        underline="none"
                        color="black"

                        onClick={formHandler}
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </Link>
                    </div>

                  </div>
                </div>
                <div class="row justify-content-start">
                  <div class="col-3" style={{ marginRight: "2em", paddingLeft: '0.3em' }}>
                    <Avatar sx={{ width: "85px", height: "85px" }} />
                  </div>

                  <div class="col-7">
                    <span className={classes.uname}>
                      <b>{userDetails.firstName} {" "} {userDetails.lastName}</b>
                    </span>

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
                        <span className={classes.followercount}><b>{followCount}</b></span>
                      </div>
                      <div class="col">
                        <span className={classes.followingcount}><b>{followingCount}</b></span>
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
                  <h5 style={{borderBottom: '1px solid #c4c4c4', width: '14em', paddingBottom: '0.2em', fontSize: '1.2em', fontWeight: '600'}}>Interested Geners</h5>
                </span>
                {userDetails.genres.length !== 0 && <div class="col" style={{ marginLeft: "1.2em", height: "60px" }}>
                  <div >
                    {userDetails.genres.map((gen) => (

                      <Chip style={{ marginBottom: "0.5em", marginRight: "0.3em", backgroundColor: "#8ee4af", color: "#05386b", fontWeight: '600' }} label={gen} />

                    ))}
                  </div>
                </div>}

              </div>
              <div class="row" style={{ height: "70px" }}>
                <span className={classes.email}>
                <h5 style={{borderBottom: '1px solid #c4c4c4', width: '14em', paddingBottom: '0.2em', fontSize: '1.2em', fontWeight: '600'}}>Email</h5>
                </span>
                {userDetails.email !== "" && <div class="col" style={{ fontSize: '0.9em',  marginLeft: "1.2em" }}>
                  {userDetails.email}
                </div>}
                <br />
              </div>

              <div class="row" style={{ marginTop: "0.4em" }}>
                <span className={classes.bio}>
                <h5 style={{borderBottom: '1px solid #c4c4c4', width: '14em', paddingBottom: '0.2em', fontSize: '1.2em', fontWeight: '600'}}>Bio</h5>
                </span>
                {userDetails.bio !== "" && <div class="row" style={{ fontSize: '0.9em', marginLeft: "1.2em", overflowY: "scroll", overflowX: "hidden", width: "280px" }}>
                  {userDetails.bio}
                </div>}

                <br />
              </div>
              <div class="row" style={{ marginTop: "1em", height: "60px" }}>
                <div class="col">
                  <div>
                    <button className={classes.customfollowbtn} onClick={followbuttonHandler}><b>{followStatus}</b></button>
                  </div>
                </div>
              </div>
            </Box>

          </Container>
        )}
        {(addform && <Editform setAddform={setAddform} editHandler={editHandler} userDetails={userDetails} />)}
        {(memtab && <Members setmemTab={setmemTab} />)}
        <br />
      </div>

    </div>
  );
};

export default Profile;
