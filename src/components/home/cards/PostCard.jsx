import { Link } from "react-router-dom";
import classes from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PropTypes from 'prop-types'

const PostCard = ({
    key,
    id,
    likes,
    comments,
    banner,
    title,
    summary,
    author,
    userId,
    publishedDate
}) => {
    console.log(summary)
    const navigate = useNavigate();
    const getDataHandler = (event) => {
        event.preventDefault();
        navigate(`/posts/${id}`);
    };

    // If description length is more than 150 reduse the size of Description Full lenght show in post detail page
    const str = summary;
    const len = str.length;

    let dec;
    let result = str.substring(0, 150); // take substring from Description string
    if (len < 150) {
        dec = <p className="card-text">{summary}</p>;
    } else {
        dec = <p className="card-text">{result}....</p>;
    }
    const titles = title.length;
    let resultitle = title.substring(0, 20);
    let shortitle;
    if (titles < 25) {
        shortitle = title;
    } else {
        shortitle = (
            <h5 className="card-title fw-bold fs-1 ">{resultitle}....</h5>
        );
    }

    return (
        <div className={`card mb-3 px-3 py-3 mt-3 ${classes.background}`}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img
                        src={banner}
                        className="img-fluid rounded-start"
                        height="200px"
                        width="200px"
                        alt="..."
                    />
                </div>
                <div className={`col-md-9 ${classes.headingColor}`}>
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 ">
                            {shortitle}
                        </h5>
                        <p className={`${classes.contentStyle}`}>{dec}</p>
                    </div>
                    <div className={classes.bottom}>
                        <p className="btn">
                            <ThumbUpIcon /> Likes {likes}{" "}
                        </p>
                        <p className="btn">
                            <CommentIcon /> {comments}
                        </p>
                        <Link
                            className="btn"
                            style={{ height: "2.5em" }}
                            onClick={getDataHandler}
                            to={`/posts/${id}`}
                        >
                            {" "}
                            <RemoveRedEyeIcon /> View post
                        </Link>
                        <p className="btn">
                            Posted by{" "}
                            <span style={{ color: "blue", fontWeight: "600" }}>
                                {author}
                            </span>{" "}
                            on {publishedDate}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    key: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    banner: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    author: PropTypes.string,
    userId: PropTypes.string,
    publishedDate: PropTypes.string
}

export default PostCard;
