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
import { postActions } from "../../../../store/post";
import Copyurl from '../../../home/cards/CopyUrl'

const Leftp = (props) => {
  const postdata = useSelector((state) => state.post);
  const profiledata = useSelector((state) => state.profile);
  const authdata = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [like, setLike] = useState(postdata.likes);
  const [bookmark, setBookmark] = useState(postdata.bookmarks);
  console.log(postdata);
  // const [bookmarkIcon, setBookmarkIcon] = useState(<BookmarkIcon />);
  console.log(bookmark);
  const likedcontent = useSelector((state) => state.profile);
  const likeid = likedcontent.likedContent;

  const checkId = (savedId, postId) => {
    for (var i = 0; i < savedId.length; i++) {
      console.log(savedId[i], postId);

      if (savedId[i].id === postId) {
        console.log("true")
        return true
      }
      //Do something
    }
    console.log("false");
    return false
  }

  const savedId = likedcontent.savedContent

  console.log(savedId);
  console.log(postdata.postId);
  console.log(likedcontent);

  const [likestatus, setLikestatus] = useState(likeid.includes(postdata.postId));
  console.log(savedId.includes(postdata.postId));
  const [bookmarkstatus, setBookmarkstatus] = useState(checkId(savedId, postdata.postId));

  console.log(likeid.includes(postdata.postId));
  if (likeid.includes(postdata.postId)) {
    console.log("You already liked this post...");
  }

  if (savedId.includes(postdata.postId)) {
    console.log("You already bookmarked this post...");
  }

  console.log(like);
  console.log(likestatus);
  console.log(bookmarkstatus)

  const likeHandler = () => {
    if (!likestatus) {
      var likes = like;
      setLikestatus(true);
      setLike((val) => val + 1);
      likes = like + 1;
      dispatch(profileActions.addLikedContent(postdata.postId));

      // dispatch(sendProfileData(profiledata, authdata.localId));
      console.log(postdata);
      dispatch(sendPostData({ ...postdata, likes: likes }, postdata.postId)).then((res) => {
        if (res === "success") {
          dispatch(postActions.add({ ...postdata, likes: likes }))
        }
      });
    }
  };

  const dislikeHandler = () => {
    if (likestatus) {
      var likes = like;
      setLikestatus(false);
      setLike((val) => val - 1);
      likes = like - 1;
      dispatch(profileActions.removeLikedContent(postdata.postId));
      dispatch(sendPostData({ ...postdata, likes: likes }, postdata.postId));
      // dispatch(sendProfileData(profiledata, authdata.localId));
    }
  };

  const bookmarklikeHandler = () => {
    if (!bookmarkstatus) {
      var bookmarks = bookmark;
      setBookmarkstatus(true);
      setBookmark((val) => val + 1);
      bookmarks = bookmark + 1;
      dispatch(profileActions.addBookmark({ type: "post", id: postdata.postId }))

      // dispatch(sendProfileData(profiledata, authdata.localId));
      console.log(postdata);
      dispatch(sendPostData({ ...postdata, bookmarks: bookmarks }, postdata.postId))
    }
  }

  const bookmarkdislikeHandler = () => {
    if (bookmarkstatus) {
      var bookmarks = bookmark;
      setBookmarkstatus(false);
      setBookmark((val) => val - 1);
      bookmarks = bookmark - 1;
      dispatch(profileActions.removeBookmark({ type: "post", id: postdata.postId }))
      dispatch(sendPostData({ ...postdata, bookmarks: bookmarks }, postdata.postId)).then((res) => {
        if (res === "success") {
          dispatch(postActions.add({ ...postdata, bookmarks: bookmarks }))
        }
      });;
      // dispatch(sendProfileData(profiledata, authdata.localId));
    }
  }



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
  const [modalShow, setModalShow] = React.useState(false);
  const url = window.location.href;
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

        {bookmarkstatus ? (
          <button
            className="btn shadow-none"
            style={{ paddingLeft: "5.5em" }}
            onClick={bookmarkdislikeHandler}
          >
            <BookmarkAdded /> {bookmarkstatus ? "bookmarked" : "bookmark"}
          </button>
        ) : (
          <button
            className="btn shadow-none"
            style={{ paddingLeft: "5.5em" }}
            onClick={bookmarklikeHandler}
          >
            <BookmarkIcon /> {bookmarkstatus ? "bookmarked" : "bookmark"}
          </button>
        )}
        <span style={{ paddingLeft: "7em" }}>{bookmark}</span>
        <br />
        <br />

        <button
          className="btn shadow-none"
          style={{ paddingLeft: "5.5em" }}
          onClick={shareHandler}
          onClick={() => setModalShow(true)}
        >
          <ShareIcon  /> {sharestatus}
        </button>
        <span style={{ paddingLeft: "7em" }} >{share}</span>
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
