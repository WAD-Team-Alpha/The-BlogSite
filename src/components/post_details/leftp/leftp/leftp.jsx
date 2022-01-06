import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react'


import postData from '../../../../helpers/postData.json'
import { useSelector } from "react-redux";


const Leftp = (props) => {
    const postdata = useSelector((state) => state.post);

    const intialLikecount = 0
    const [like,setLike] = useState(0); 
    const [likestatus,setLikestatus] = useState("like"); 

    const likeHandler = () =>{
        
        if (likestatus==="like") {
            setLikestatus("liked")
            setLike(intialLikecount + 1)
        } else {
            setLikestatus("like")
            setLike(intialLikecount )
        }
    }

    const [bookmarkstatus, setbookmarkstatus] = useState("Bookmark");
    const bookmarkHandler = () => {
        
        if (bookmarkstatus==="Bookmark") {
            setbookmarkstatus("Bookmarked")
        } else {
            setbookmarkstatus("Bookmark")
        }
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

    const commentHandler = (e) => {
        
    }

    const data = postData.find(post => post.id === parseInt(props.postID))
    console.log(postdata)
    return(
        <>
            <div style={{paddingTop:"3em"}}>
                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} onClick={likeHandler}>
                    <ThumbUpIcon/> {likestatus}
                </button>
               
                <span style={{paddingLeft:"7em"}}>{postdata.likes}</span>
                <br/><br/>
                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} >
                    <CommentIcon/> Comment
                </button>
                <span style={{paddingLeft:"7em"}}>{postdata.comments.length}</span>
                <br/><br/>

                <button className='btn shadow-none' style={{paddingLeft:"5.5em"}} on onClick={bookmarkHandler}>
                    <BookmarkIcon/> {bookmarkstatus}
                </button>
                <span style={{paddingLeft:"7em"}}>{postdata.bookmarks}</span>
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