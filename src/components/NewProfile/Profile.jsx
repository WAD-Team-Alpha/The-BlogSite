import classes from "./newprofile.module.css";
import Avatar from "@mui/material/Avatar";
import { Container, Box, Chip } from "@mui/material";
import { Link } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Editform from "./EditForm/Editform";
import { useDispatch, useSelector } from 'react-redux';
import { follow, remove } from "../../store/counterReducer";
import { profileActions } from "../../store/profile";




const Profile = () => {
  
 

  const userInfo = useSelector((state)=>state.profile)
  const [addform,setAddform]=useState(false)
  const dispatch = useDispatch();
  const [followStatus,setfollowStatus] = useState("Follow");
  const followCount = useSelector((state)=> state.counter.followers)

  console.log(followCount)
  const followingCount = useSelector((state) => state.counter.following)

  const userDetails = {
    firstName : userInfo.firstName,
    lastName : userInfo.lastName,
    email : userInfo.email,
    bio : userInfo.bio,
    genres : userInfo.genres

  }
  
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

  

  const formHandler=(e)=>{
   setAddform((state)=> !state)
  }

   
  
  const followbuttonHandler=()=>{
    if(followStatus === "Follow"){
      setfollowStatus("Following")
      return dispatch(follow())
    }
    else {
      setfollowStatus("Follow")
      return dispatch(remove())
    }
  }
 
  return (
    <div className={classes.maincontainer}>
      
      <div className={classes.containerMd}>
      {!addform && (
        <Container>
          <Box
            sx={{ bgcolor: "white", height: "148px", borderRadius: "0.3em" }}
          >
            <div className="container-fluid">
              <div className="row justify-content-end">
                <div class="col-2">
              
                  <button
                    type="submit"
                    class="btn shadow-none"
                    style={{ marginTop: "0.2em" }}
                    onClick={formHandler}
                  >
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                  
                  
                </div>
              </div>
              <div class="row justify-content-start">
                <div class="col-3" style={{ marginRight: "1.5em" }}>
                  <Avatar sx={{ width: "85px", height: "85px" }} />
                </div>
                <div class="col-7">
                  <span className={classes.uname}>
                    <b>{userDetails.firstName}</b>
                  </span>
                  <div class="row justify-content-center">
                    <div class="col-7">
                      <Link underline="none">
                        <span className={classes.mainfollowers}>
                          <b>Followers</b>
                        </span>
                      </Link>
                    </div>
                    <div class="col-5">
                      <Link underline="none">
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
          <Box sx={{ height: "30px", backgroundColor: "#05386B" }}></Box>
          <Box
            sx={{ bgcolor: "white", height: "360px", borderRadius: "0.3em" }}
          >
           <div class="row" style={{marginTop:"0.2em"}}>
           <span className={classes.genres}>
                <b>Intrested Geners</b>
              </span>
              <hr className={classes.hr} />
             
              <div class="col" style={{ marginLeft: "1.2em"}}>
                <div style={{ height:"50px"}}>
                {userDetails.genres.map((gen)=>(
                  
                <Chip style={{marginBottom:"0.5em", marginRight:"0.3em"}} label={gen}/>  
                
               ))}
               </div>
               </div>
              
           </div>
           <div class="row" style={{marginTop:"1em", height:"70px"}}>
           <span className={classes.email}>
                <b>Email</b>
              </span>
              <hr className={classes.hr} />
              <div class="col" style={{ marginLeft: "1.2em" }}>
                {userDetails.email}
              </div>
              <br />   
           </div>
           
              <div class="row" style={{marginTop:"0.4em", height:"95px"}}>
              <span className={classes.bio}>
                    <b>Bio</b>
                  </span>
                  <hr className={classes.hr}/>
                  <div class="row" style={{ marginLeft: "1.2em", overflowY: "scroll",overflowX:"hidden", height:"60px", width:"280px"}}>
                  {userDetails.bio}
                  
               
               
              </div>

              <br />
              </div>
           <div class="row" style={{ marginTop:"1.5em", height:"60px"}}>
           <div class="col">
              <div className={classes.custombtn}>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    backgroundColor: "#8ee4af",
                    color: "black",
                    width: "290px",
                    marginBottom:"1em",
                  }}
                  onClick={followbuttonHandler}
                >
                  <span style={{ paddingRight: "1em"}}>
                    <b>{followStatus}</b>
                  </span>
                </button>
              </div>
            </div>   
           </div>
          </Box>
        </Container>
         )}
         {addform && <Editform setAddform={setAddform} editHandler={editHandler} userDetails={userDetails} />}
        <br />
      </div>
     
    </div>
  );
};

export default Profile;
