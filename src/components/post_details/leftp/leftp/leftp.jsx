import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkAdded from "@mui/icons-material/BookmarkAdded";
import Copyurl from "../../../home/cards/CopyUrl";

const Leftp = (props) => {

    const [like, setLike] = useState(10);
    const [bookmark, setBookmark] = useState(12);
    const likeid = 5

    const checkId = (savedId, postId) => {
        // function to check if the user has liked(or bookmarked) the particular post earlier or not
        for (var i = 0; i < savedId.length; i++) {
            if (savedId[i].id === postId) {
                return true;
            }
        }
        return false;
    };

    const savedId = 10;

    const [likestatus, setLikestatus] = useState(
        likeid.includes(0)
    );
    const [bookmarkstatus, setBookmarkstatus] = useState(
        checkId(savedId, 25)
    );

    const likeHandler = () => {
        // like handler to increment number of likes in database and ui on clicking like buttons
        if (!likestatus) {
            var likes = like;
            setLikestatus(true);
            setLike((val) => val + 1);
            likes = like + 1;
        }
    };

    const dislikeHandler = () => {
        // dislike handler to decrement number of likes in database and ui on clicking like button again when already liked
        if (likestatus) {
            var likes = like;
            setLikestatus(false);
            setLike((val) => val - 1);
            likes = like - 1;
        }
    };

    const bookmarklikeHandler = () => {
        // state management for bookmark button
        if (!bookmarkstatus) {
            var bookmarks = bookmark;
            setBookmarkstatus(true);
            setBookmark((val) => val + 1);
            bookmarks = bookmark + 1;
        }
    };

    const bookmarkdislikeHandler = () => {
        // state management for un bookmarking
        if (bookmarkstatus) {
            var bookmarks = bookmark;
            setBookmarkstatus(false);
            setBookmark((val) => val - 1);
            bookmarks = bookmark - 1;
        }
    };
    const [modalShow, setModalShow] = React.useState(false);
    const url = window.location.href;
    return (
        <>
            <div style={{ paddingTop: "3em" }}>
                {likeid.includes(25) ? ( //  if else condition to check if the user liked the post earlier
                    <button
                        className="btn shadow-none" // Dislike butoon is shown if the above condition is true or not
                        style={{ paddingLeft: "5.5em" }}
                        onClick={dislikeHandler} // Triggers dislike handler
                    >
                        <ThumbUpIcon /> {likestatus ? "Liked" : "Like"}
                    </button>
                ) : (
                    <button // like button is shown if the above condition returns false
                        className="btn shadow-none"
                        style={{ paddingLeft: "5.5em" }}
                        onClick={likeHandler} // Triggers like handler
                    >
                        <ThumbUpOffAlt /> {likestatus ? "Liked" : "Like"}
                    </button>
                )}
                <span style={{ paddingLeft: "7em" }}>{like}</span>
                <br />
                <br />
                <button // comment button to scrole down to post comments
                    className="btn shadow-none"
                    style={{ paddingLeft: "5.5em" }}
                    onClick={props.handler}
                >
                    <CommentIcon /> Comment
                </button>
                <span style={{ paddingLeft: "7em" }}>
                    {10}
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
                <span style={{ paddingLeft: "7em" }}>{bookmark}</span>
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

export default Leftp;
