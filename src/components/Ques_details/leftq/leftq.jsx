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
import Copyurl from '../../home/cards/CopyUrl';

const Leftq = (props) => {


    const dispatch = useDispatch();

    const questiondata = useSelector((state) => state.question)
    console.log(questiondata)
    const [like, setLike] = useState(questiondata.likes);
    const [upvotestatus, setUpvotestatus] = useState("Upvote");
    const [bookmarkstatus, setBookmarkstatus] = useState("Bookmark");
    const [bookmark, setBookmark] = useState(questiondata.bookmarks);

    const [likeicon, setLikeIcon] = useState(<ThumbUpOffAlt />)
    const [bookmarkIcon, setBookmarkIcon] = useState(<BookmarkIcon />)



    const likeHandler = () => {
        var likes = like;
        if (upvotestatus === "Upvote") {
            setUpvotestatus("Upvoted")
            setLike((val) => val + 1)
            likes = like + 1;
            setLikeIcon(<ThumbUpAltIcon />)
        } else {
            setUpvotestatus("Upvote")
            setLike((val) => val - 1)
            likes = like - 1;
            setLikeIcon(<ThumbUpOffAlt />)
        }
        dispatch(sendQuestionData({ ...questiondata, likes: likes }, questiondata.questionId));
    }

    const bookmarkHandler = () => {
        var bookmarks = questiondata.bookmarks
        if (bookmarkstatus === "Bookmark") {
            setBookmarkstatus("Bookmarked")
            setBookmark((val) => val + 1)
            bookmarks = bookmark + 1;
            setBookmarkIcon(<BookmarkAddedIcon />)
        } else {
            setBookmarkstatus("Bookmark");
            setBookmark((val) => val - 1);
            bookmarks = bookmark - 1;
            setBookmarkIcon(<BookmarkIcon />)

        }
        dispatch(sendQuestionData({ ...questiondata, bookmarks }, questiondata.questionId));
    }

    const [modalShow, setModalShow] = React.useState(false);
    const url = window.location.href;

    return (
        <>
            <div style={{ paddingTop: "3em" }}>
                <button className='btn shadow-none' style={{ paddingLeft: "5.5em" }} onClick={likeHandler}>
                    {likeicon} {upvotestatus}
                </button>

                <span style={{ paddingLeft: "7em" }}>{like}</span>
                <br /><br />
                <button className='btn shadow-none' style={{ paddingLeft: "5.5em" }} onClick={props.handler}>
                    <CommentIcon /> Answers
                </button>
                <span style={{ paddingLeft: "7em" }}>{questiondata.comments.length}</span>
                <br /><br />

                <button className='btn shadow-none' style={{ paddingLeft: "5.5em" }} onClick={bookmarkHandler}>
                    {bookmarkIcon} {bookmarkstatus}
                </button>
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