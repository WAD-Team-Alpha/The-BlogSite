import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import questionData from '../../../helpers/questionData.json'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { sendQuestionData } from '../../../store/question-actions';
import { ThumbUpOffAlt } from '@mui/icons-material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { profileActions } from '../../../store/profile';
import { questionActions } from '../../../store/question';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';

import Copyurl from '../../home/cards/CopyUrl';

const Leftq = (props) => {


    const checkId = (savedId, questionId) => {
        for (var i = 0; i < savedId.length; i++) {
        //   console.log(savedId[i], postId);
    
          if (savedId[i].id === questionId) {
            console.log("true")
            return true
          }
          
        }
        console.log("false");
        return false
      }
    

    const dispatch = useDispatch();

    const questiondata = useSelector((state) => state.question)
    console.log(questiondata)
    const [like,setLike] = useState(questiondata.likes); 
    const [bookmark,setBookmark] = useState(questiondata.bookmarks); 
     const likedcontent = useSelector((state) => state.profile);
    const likeid = likedcontent.likedContent;
    const savedId = likedcontent.savedContent
    
    const [likestatus, setLikestatus] = useState(likeid.includes(questiondata.questionId));
    const[bookmarkstatus, setBookmarkstatus] = useState(checkId(savedId, questiondata.questionId));

    const likeHandler = () => {
        if (!likestatus) {
          var likes = like;
          setLikestatus(true);
          setLike((val) => val + 1);
          likes = like + 1;
          dispatch(profileActions.addLikedContent(questiondata.questionId));
    
          // dispatch(sendProfileData(profiledata, authdata.localId));
          console.log(questiondata);
          dispatch(sendQuestionData({ ...questiondata, likes: likes }, questiondata.questionId)).then((res)=>{
            if(res==="success"){
              dispatch(questionActions.add({...questiondata, likes: likes}))
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
          dispatch(profileActions.removeLikedContent(questiondata.questionId));
          dispatch(sendQuestionData({ ...questiondata, likes: likes }, questiondata.questionId));
          // dispatch(sendProfileData(profiledata, authdata.localId));
        }
      };
      const bookmarklikeHandler = () => {
        if (!bookmarkstatus) {
          var bookmarks = bookmark;
          setBookmarkstatus(true);
          setBookmark((val) => val + 1);
          bookmarks = bookmark + 1;
          dispatch(profileActions.addBookmark({ type: "question", id: questiondata.questionId }))
    
          // dispatch(sendProfileData(profiledata, authdata.localId));
          
          dispatch(sendQuestionData({ ...questiondata, bookmarks: bookmarks }, questiondata.questionId))
        }
      }
    
      const bookmarkdislikeHandler = () => {
        if (bookmarkstatus) {
          var bookmarks = bookmark;
          setBookmarkstatus(false);
          setBookmark((val) => val - 1);
          bookmarks = bookmark - 1;
          dispatch(profileActions.removeBookmark({ type: "question", id: questiondata.questionId }))
          dispatch(sendQuestionData({ ...questiondata, bookmarks: bookmarks }, questiondata.questionId)).then((res) => {
            if (res === "success") {
              dispatch(questionActions.add({ ...questiondata, bookmarks: bookmarks }))
            }
          });;
          // dispatch(sendProfileData(profiledata, authdata.localId));
        }
      }

      const [modalShow, setModalShow] = React.useState(false);
    const url = window.location.href;
    return (
        <>
            <div style={{ paddingTop: "3em" }}>
            {likeid.includes(questiondata.questionId) ? (
                <button
                    className="btn shadow-none"
                    style={{ paddingLeft: "5.5em" }}
                    onClick={dislikeHandler}
                >
                    <ThumbUpIcon /> {likestatus ? "Upvoted" : "Upvote"}
                </button>
                ) : (
                <button
                    className="btn shadow-none"
                    style={{ paddingLeft: "5.5em" }}
                    onClick={likeHandler}
                >
                    <ThumbUpOffAlt /> {likestatus ? "Upvoted" : "Upvote"}
                </button>
            )}

                <span style={{ paddingLeft: "7em" }}>{like}</span>
                <br /><br />
                <button className='btn shadow-none' style={{ paddingLeft: "5.5em" }} onClick={props.handler}>
                    <CommentIcon /> Answers
                </button>
                <span style={{ paddingLeft: "7em" }}>{questiondata.comments.length}</span>
                <br /><br />

               
            {bookmarkstatus ? (
             <button
            className="btn shadow-none"
            style={{ paddingLeft: "5.5em" }}
            onClick={bookmarkdislikeHandler}
          >
            <BookmarkAdded /> {bookmarkstatus ? "Bookmarked" : "Bookmark"}
          </button>
        ) : (
          <button
            className="btn shadow-none"
            style={{ paddingLeft: "5.5em" }}
            onClick={bookmarklikeHandler}
          >
            <BookmarkIcon /> {bookmarkstatus ? "Bookmarked" : "Bookmark"}
          </button>
        )}
                <span style={{ paddingLeft: "7em" }}> {bookmark}</span>
                <br /><br />

                <button className='btn shadow-none' style={{ paddingLeft: "5.5em" }} onClick={() => setModalShow(true)}>
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
    )
}

export default Leftq