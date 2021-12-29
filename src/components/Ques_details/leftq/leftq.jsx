import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const Leftq = (props) => {

    return(
        <>
            <div style={{paddingTop:"3em"}}>
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <ThumbUpIcon/> Upvotes
                </button>
               
                <span style={{paddingLeft:"7em"}}>999</span>
                <br/><br/>
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <CommentIcon/> Answers
                </button>
                <span style={{paddingLeft:"7em"}}>999</span>
                <br/><br/>

                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <BookmarkIcon/> Bookmark
                </button>
                <span style={{paddingLeft:"7em"}}>999</span>
                <br/><br/>
                
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <ShareIcon/> Share
                </button>
                <br />

            </div>
        </>
    )
}

export default Leftq