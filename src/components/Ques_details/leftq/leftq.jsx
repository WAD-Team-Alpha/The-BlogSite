import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { ThumbUpOffAlt } from "@mui/icons-material";
import BookmarkAdded from "@mui/icons-material/BookmarkAdded";
import { upVoteQuestion, downVoteQuestion } from "../../../requests/questionDetail.request";
import Copyurl from "../../home/cards/CopyUrl";
import { addBookmark, removeBookmark } from "../../../requests/activity.request";

const Leftq = (props) => {
    const [like, setLike] = useState(props.data.up_votes.length);
    const [bookmark, setBookmark] = useState(props.data.bookmarks.length);
    
    const [likestatus, setLikestatus] = useState(props.data.up_votes.includes(props.userId));
    const [bookmarkstatus, setBookmarkstatus] = useState(props.data.bookmarks.includes(props.userId));

    const likeHandler = async () => {
        // like handler to increment number of likes in database and ui on clicking like buttons
        if (!likestatus) {
            setLike((prev)=>(prev+1));
            setLikestatus(true);
            await upVoteQuestion(props.questionID)
        }
        
    };

    const dislikeHandler = async() => {
        // dislike handler to decrement number of likes in database and ui on clicking like button again when already liked
        if (likestatus) {
            setLike((prev)=>(prev-1));
            setLikestatus(false);
            await downVoteQuestion(props.questionID)
        }
        
    };
    const bookmarklikeHandler = async () => {
        // state management for bookmark button
        if (!bookmarkstatus) {
            var bookmarks = bookmark;
            setBookmarkstatus(true);
            setBookmark((val) => val + 1);
            bookmarks = bookmark + 1;
            await addBookmark('question', props.questionID)
        }
    };

    const bookmarkdislikeHandler = async () => {
        // state management for un bookmarking
        if (bookmarkstatus) {
            var bookmarks = bookmark;
            setBookmarkstatus(false);
            setBookmark((val) => val - 1);
            bookmarks = bookmark - 1;
            await removeBookmark('question', props.questionID)
        }
    };

    const [modalShow, setModalShow] = React.useState(false);
    const url = window.location.href;
    return (
        <>
            <div style={{ paddingTop: "3em" }}>
                {likestatus ? ( //  if else condition to check if the user liked the post earlier
                    <button
                        className="btn shadow-none" // Dislike butoon is shown if the above condition is true or not
                        style={{ paddingLeft: "5.5em" }}
                        onClick={dislikeHandler} // Triggers dislike handler
                    >
                        <ThumbUpIcon /> {likestatus ? "Upvoted" : "Upvote"}
                    </button>
                ) : (
                    <button
                        className="btn shadow-none" // like button is shown if the above condition returns false
                        style={{ paddingLeft: "5.5em" }}
                        onClick={likeHandler} // Triggers like handler
                    >
                        <ThumbUpOffAlt /> {likestatus ? "Upvoted" : "Upvote"}
                    </button>
                )}

                <span style={{ paddingLeft: "7em" }}>{like}</span>
                <br />
                <br />
                <button
                    className="btn shadow-none"
                    style={{ paddingLeft: "5.5em" }}
                    onClick={props.handler}
                >
                    <CommentIcon /> Answers
                </button>
                <span style={{ paddingLeft: "7em" }}>
                    {props.data.answers.length}
                </span>
                <br />
                <br />

                {bookmarkstatus ? ( // if else condition to check if the user bookmarked the post earlier
                    <button
                        className="btn shadow-none" // Unbookmark butoon is shown if the above condition is true or not
                        style={{ paddingLeft: "5.5em" }}
                        onClick={bookmarkdislikeHandler} // Triggers bookmarkdislikeHandler
                    >
                        <BookmarkAdded />{" "}
                        {bookmarkstatus ? "Bookmarked" : "Bookmark"}
                    </button>
                ) : (
                    <button
                        className="btn shadow-none" // bookmark button is shown if the above condition returns false
                        style={{ paddingLeft: "5.5em" }}
                        onClick={bookmarklikeHandler} // Triggers bookmarklikeHandler
                    >
                        <BookmarkIcon />{" "}
                        {bookmarkstatus ? "Bookmarked" : "Bookmark"}
                    </button>
                )}
                <span style={{ paddingLeft: "7em" }}> {bookmark}</span>
                <br />
                <br />

                <button
                    className="btn shadow-none"
                    style={{ paddingLeft: "5.5em" }}
                    onClick={() => setModalShow(true)}
                >
                    <ShareIcon /> Share
                </button>
                <Copyurl
                    show={modalShow}
                    url={url}
                    onHide={() => setModalShow(false)}
                />
                <br />
            </div>
        </>
    );
};

export default Leftq;
