import { Avatar, Link } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../store/profile";
import { fetchOtherProfileData } from "../../../store/profile-actions";
import { sendOtherProfileData } from "../../../store/profile-actions";
const Followers = (props) => {
  const followInfo = useSelector((state) => state.profile);
  const authStatus = useSelector((state) => state.auth);
  const followerslist = followInfo.followersList;
  console.log(followerslist);
  const dispatch = useDispatch();
  const removeHandler = (index) => {
    const newList = followInfo.followersList.filter((id)=>id.id !== index)
    
    dispatch(fetchOtherProfileData(index)).then((res) => {
      console.log(res);
      dispatch(
        sendOtherProfileData({
          ...res,
          followersList: res.followingList.filter((id)=>id.id !== authStatus.localId),
        },index)
      ).then((result) => {
        if (result === "succes") {
          dispatch(profileActions.update({...followInfo,followersList: newList}));
        }
      });
    });
    console.log(followerslist);
  };


  return (
    <div>
      <div class="container-fluid">
        <h4 style={{ paddingBottom: "0.5em" }}>
          Followers: {followerslist.length}{" "}
        </h4>
        {followerslist.map((user) => (
              <div class="row" style={{ paddingBottom: "0.5em" }}>
                <div class="col-2">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div class="col-6" style={{ paddingTop: "0.3em" }}>
                  <Link underline="none" color="black" href="#">
                    {user.name}
                  </Link>
                </div>
                <div class="col-4" style={{}}>
                  <button
                    class="btn btn-danger"
                    onClick={() => removeHandler(user.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Followers;
