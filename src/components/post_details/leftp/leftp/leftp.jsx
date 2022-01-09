import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendPostData } from "../../../../store/post-actions";

import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkAdded from "@mui/icons-material/BookmarkAdded";
import { profileActions } from "../../../../store/profile";
import { sendProfileData } from "../../../../store/profile-actions";

const Leftp = (props) => {
  const postdata = useSelector((state) => state.post);
  const profiledata = useSelector((state) => state.profile);
  const authdata = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [like, setLike] = useState(postdata.likes);
  const [bookmark, setBookmark] = useState(postdata.bookmarks);
  const [bookmarkstatus, setBookmarkstatus] = useState("bookmark");
  const [bookmarkIcon, setBookmarkIcon] = useState(<BookmarkIcon />);

  const likedcontent = useSelector((state) => state.profile);
  const likeid = likedcontent.likedContent;
 
  const [likestatus, setLikestatus] = useState(likeid.includes(postdata.postId));
    console.log(likeid.includes(postdata.postId));
  if (likeid.includes(postdata.postId)) {
    console.log("You already liked this post...");
  }

  console.log(like)
  console.log(likestatus);
  
  
  
  const likeHandler = () => {
      if(!likestatus){
    var likes = like;
    setLikestatus(true);
    setLike((val) => val + 1);
    likes = like + 1;
    dispatch(profileActions.addLikedContent(postdata.postId));

    dispatch(sendProfileData(profiledata, authdata.localId));
    dispatch(sendPostData({ ...postdata, likes: likes }, postdata.postId));
      }
    };

  const dislikeHandler = () => {
      if(likestatus){
    var likes = like;
    setLikestatus(false);
    setLike((val) => val - 1);
    likes = like - 1;
    dispatch(profileActions.removeLikedContent(postdata.postId));
    dispatch(sendPostData({ ...postdata, likes: likes }, postdata.postId));
    dispatch(sendProfileData(profiledata, authdata.localId));
      }
};
  const bookmarkHandler = () => {
    var bookmarks = postdata.bookmarks;
    if (bookmarkstatus === "bookmark") {
      setBookmarkstatus("bookmarked");
      setBookmark((val) => val + 1);
      bookmarks = bookmark + 1;
      dispatch(
        profileActions.addBookmark({ type: "post", id: postdata.postId })
      );
      setBookmarkIcon(<BookmarkAdded />);
    } else {
      setBookmarkstatus("bookmark");
      setBookmark((val) => val - 1);
      bookmarks = bookmark - 1;
      dispatch(
        profileActions.removeBookmark({ type: "post", id: postdata.postId })
      );
      setBookmarkIcon(<BookmarkIcon />);
    }
    dispatch(sendPostData({ ...postdata, bookmarks }, postdata.postId));
  };

  const intialsharecount = 0;
  const [share, setshare] = useState(0);
  const [sharestatus, setsharestatus] = useState("share");

  const shareHandler = () => {
    if (sharestatus === "share") {
      setsharestatus("share");
      setshare(intialsharecount + 1);
    } else {
      setsharestatus("share");
    }
  };

  console.log(postdata);
  return (
    <>
      <div style={{ paddingTop: "3em" }}>
        {likeid.includes(postdata.postId) ? (
          <button
            className="btn shadow-none"
            style={{ paddingLeft: "5.5em" }}
            onClick={dislikeHandler}
          >
            <ThumbUpIcon /> {likestatus ? "liked" : "like"}
          </button>
        ) : (
          <button
            className="btn shadow-none"
            style={{ paddingLeft: "5.5em" }}
            onClick={likeHandler}
          >
            <ThumbUpOffAlt /> {likestatus ? "liked" : "like"}
          </button>
        )}
        <span style={{ paddingLeft: "7em" }}>{like}</span>
        <br />
        <br />
        <button className="btn shadow-none" style={{ paddingLeft: "5.5em" }} onClick={props.handler}>
          <CommentIcon /> Comment
        </button>
        <span style={{ paddingLeft: "7em" }}>{postdata.comments.length}</span>
        <br />
        <br />

        <button
          className="btn shadow-none"
          style={{ paddingLeft: "5.5em" }}
          on
          onClick={bookmarkHandler}
        >
          {bookmarkIcon} {bookmarkstatus}
        </button>
        <span style={{ paddingLeft: "7em" }}>{bookmark}</span>
        <br />
        <br />

        <button
          className="btn shadow-none"
          style={{ paddingLeft: "5.5em" }}
          onClick={shareHandler}
        >
          <ShareIcon /> {sharestatus}
        </button>
        <span style={{ paddingLeft: "7em" }}>{share}</span>
        <br />
      </div>
    </>
  );
};

export default Leftp;
