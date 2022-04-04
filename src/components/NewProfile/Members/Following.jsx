import { Avatar, Link } from "@mui/material";

const Following = (props) => {
    const unfollowHandler = (index) => {};

    return (
        <div>
            <div className="container-fluid">
                <h4 style={{ paddingBottom: "0.5em" }}>Following: {5} </h4>
                {props.userInfo.following.map((item) => (
                    <div className="row" style={{ paddingBottom: "0.5em" }}>
                        <div className="col-2">
                            <Avatar src="/broken-image.jpg" />
                        </div>
                        <div className="col-6" style={{ paddingTop: "0.3em" }}>
                            <Link underline="none" color="black" href="#">
                                {item}
                            </Link>
                        </div>
                        <div className="col-4" style={{}}>
                            <button
                                className="btn btn-danger"
                                onClick={() => unfollowHandler(item)} //unfollowing the user by using their ids
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
