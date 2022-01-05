import { Avatar, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../store/profile";

const Followers = (props) => {
  const followerslist = useSelector((state) => state.profile.followerslist);
  console.log(followerslist)
  const dispatch = useDispatch();
  const removeHandler = (index) => {
    dispatch(profileActions.removefollower(index));
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
        ))}
      </div>
    </div>
  );
};

export default Followers;
