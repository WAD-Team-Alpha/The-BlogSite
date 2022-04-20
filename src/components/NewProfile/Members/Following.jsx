import { Avatar, Link } from "@mui/material";
import { unFollowUser } from "../../../requests/profile.request";
const Following = (props) => {
    const unfollowHandler = async (index) => {
        const response = await unFollowUser(index);
        if (response) {
            const myArray = props.userInfo.following.filter(
                (obj) => obj.id !== index
            );
            props.setUserData((prev) => ({ ...prev, following: myArray }));
            props.setFollowingCount((prev)=>(prev-1))
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <h4 style={{ paddingBottom: "0.5em" }}>Following: {props.userInfo.following.length} </h4>
                {props.userInfo.following.map((item) => (
                    <div className="row" style={{ paddingBottom: "0.5em" }}>
                        <div className="col-2">
                            <Avatar src="/broken-image.jpg" />
                        </div>
                        <div className="col-6" style={{ paddingTop: "0.3em" }}>
                            <Link underline="none" color="black" href="#">
                                {item.firstname}
                            </Link>
                        </div>
                        <div className="col-4" style={{}}>
                            <button
                                className="btn btn-danger"
                                onClick={() => unfollowHandler(item.id)} //unfollowing the user by using their ids
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
