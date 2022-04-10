import { Link } from "react-router-dom";
import classes from "./QuestionCard.module.css";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PropTypes from 'prop-types'

const QuestionCard = ({
    key,
    id,
    votes,
    answers,
    title,
    summary,
    author,
    userId,
    publishedDate
}) => {
    const navigate = useNavigate();
    const getDataHandler = (event) => {
        event.preventDefault();
        navigate(`/forum-threads/${id}`);
    };

    const str = summary;
    const len = str.length;

    let dec;
    let result = str.substring(0, 270);
    if (len < 270) {
        dec = <p className="card-text">{summary}</p>;
    } else {
        dec = <p className="card-text">{result}....</p>;
    }
    const titles = title.length;
    let resultitle = title.substring(0, 50);
    let shortitle;
    if (titles < 50) {
        shortitle = title;
    } else {
        shortitle = (
            <h5 className="card-title fw-bold fs-4">{resultitle}...</h5>
        );
    }

    const published_date = new Date(publishedDate)
    const date = published_date.getUTCDate()
    const month = published_date.getUTCMonth() + 1
    const year = published_date.getUTCFullYear()

    return (
        <div className={`card  mb-3 mt-3 ${classes.shadow}`}>
            <div className="row g-0">
                <div className="col-md-2 mt-6">
                    <div className={`row ${classes.votes}`}>
                        <p className="fw-bold fs-1  ">{votes}</p>

                        <p className={`${classes.vote}`}>Votes</p>
                    </div>

                    <div className={`row ${classes.answer}`}>
                        <p className="fw-bold fs-1 ml-6 ">{answers}</p>

                        <p className={`${classes.answerpostion}`}>Answers</p>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-4">{shortitle}</h5>
                        <p className="card-text" style={{ height: "5em" }}>
                            {dec}
                        </p>

                        <div className={classes.bottom}>
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
                                Asked by{" "}
                                <span
                                    style={{ color: "blue", fontWeight: "600" }}
                                >
                                    {author}
                                </span>{" "}
                                on {`${date}/${month}/${year}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

QuestionCard.propTypes = {
    key: PropTypes.string,
    id: PropTypes.string,
    votes: PropTypes.number,
    answers: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    author: PropTypes.string,
    userId: PropTypes.string,
    publishedDate: PropTypes.string
}

export default QuestionCard;
