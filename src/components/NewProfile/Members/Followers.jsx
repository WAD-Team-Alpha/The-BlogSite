import { Avatar, Link } from "@mui/material";
import { removeFollower } from "../../../requests/profile.request";
const Followers = (props) => {
    const removeHandler = async (index) => {
        const response = await removeFollower(index);
        if (response) {
            const myArray = props.userInfo.followers.filter(
                (obj) => obj.id !== index
            );
            props.setUserData((prev) => ({ ...prev, followers: myArray }));
            props.setFollowersCount((prev) => prev - 1);
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <h4 style={{ paddingBottom: "0.5em" }}>
                    Followers: {props.userInfo.followers.length}{" "}
                </h4>
                {props.userInfo.followers.map((item) => (
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
                                onClick={() => removeHandler(item.id)} //removing user by using their ids
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
