import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const Leftp = (props) => {

    return(
        <>
            <div style={{paddingTop:"3em"}}>
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <ThumbUpIcon/> Like
                </button>
               
                <span style={{paddingLeft:"7em"}}>999</span>
                <br/><br/>
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <CommentIcon/> Comment
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

export default Leftp