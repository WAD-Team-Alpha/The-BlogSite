import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react'


import postData from '../../../../helpers/postData.json'
import { useSelector ,useDispatch} from "react-redux";
import { sendPostData } from '../../../../store/post-actions';

import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';

const Leftp = (props) => {
    const postdata = useSelector((state) => state.post);
    const dispatch = useDispatch();
    
    const [like,setLike] = useState(postdata.likes); 
    const [bookmark,setBookmark] = useState(postdata.bookmarks); 
    const [likestatus,setLikestatus] = useState("like"); 
    const [bookmarkstatus,setBookmarkstatus] = useState("bookmark"); 
    const [likeicon,setLikeIcon] = useState(<ThumbUpOffAlt/>)
    const [bookmarkIcon,setBookmarkIcon] = useState(<BookmarkIcon/>)

    const likeHandler = () =>{
        var likes = like;
        if (likestatus==="like") {
            setLikestatus("liked")
            setLike((val)=>val+1)
            likes = like + 1;
            setLikeIcon(<ThumbUpIcon/>)
        } else {
            setLikestatus("like")
            setLike((val)=>val-1)
            likes = like - 1;
            setLikeIcon(<ThumbUpOffAlt/>)

        }
        dispatch(sendPostData({...postdata,likes: likes},postdata.postId));
    }
    const bookmarkHandler = () => {
        var bookmarks = postdata.bookmarks
        if (bookmarkstatus==="bookmark") {
            setBookmarkstatus("bookmarked")
            setBookmark((val)=>val+1)
            bookmarks = bookmark + 1;
            setBookmarkIcon(<BookmarkAdded/>)
        } else {
            setBookmarkstatus("bookmark");
            setBookmark((val)=>val-1);
            bookmarks = bookmark -1 ;
            setBookmarkIcon(<BookmarkIcon/>)
        }
        dispatch(sendPostData({...postdata,bookmarks},postdata.postId));
    }

    const intialsharecount = 0
    const [share,setshare] = useState(0); 
    const [sharestatus,setsharestatus] = useState("share"); 

    const shareHandler = () =>{
        
        if (sharestatus==="share") {
            setsharestatus("share")
            setshare(intialsharecount + 1)
        } else {
            setsharestatus("share")
            
        }
    }

   

    const data = postData.find(post => post.id === parseInt(props.postID))
    console.log(postdata)
    return(
        <>
            <div style={{paddingTop:"3em"}}>
                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} onClick={likeHandler}>
                    {likeicon} {likestatus}
                </button>
               
                <span style={{paddingLeft:"7em"}}>{like}</span>
                <br/><br/>
                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} >
                    <CommentIcon/> Comment
                </button>
                <span style={{paddingLeft:"7em"}}>{postdata.comments.length}</span>
                <br/><br/>

                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} on onClick={bookmarkHandler}>
                   {bookmarkIcon} {bookmarkstatus}
                </button>
                <span style={{paddingLeft:"7em"}}>{bookmark}</span>
                <br/><br/>
                
                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} onClick={shareHandler}>
                    <ShareIcon/> {sharestatus}
                </button>
                <span style={{paddingLeft:"7em"}}>{share}</span>
                <br />

            </div>
        </>
    )
}

export default Leftp