import { Avatar, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../store/profile";


const Following = () => {
  const followinglist = useSelector((state) => state.profile.followingList);
  const dispatch = useDispatch();
  console.log(followinglist);

  const unfollowHandler = (index) => {
    dispatch(profileActions.removeuser(index));
    console.log(followinglist);
  };

  return (
    <div>
      <div class="container-fluid">
        <h4 style={{ paddingBottom: "0.5em" }}>
          Following: {followinglist.length}{" "}
        </h4>
        {followinglist.map((user) => (
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
                onClick={() => unfollowHandler(user.id)}
              >
                Unfollow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Following;
