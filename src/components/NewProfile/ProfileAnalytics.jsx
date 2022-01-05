import Visibility from "@mui/icons-material/Visibility"
import { Container } from "@mui/material"
import { Box } from "@mui/system"
import classes from './analytics.module.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';

const ProfileAnalytics=()=>{
    return <div>
         
            <div className={classes.pie} >
                 <span className={classes.analysistext}><b>No Analysis recorded</b></span>
            </div>
           
            <div className={classes.analytics} >
                <span className={classes.anname}>Analytics</span>
            </div>
            
            
            <div className={classes.aninfo}>
            <div class="row">
                    <div class="col">
                       <div className={classes.views}>
                            <div class="row">
                                <div class="col-1">
                                    <Visibility/>
                                </div>
                                <div class="col-3">
                                    <b>Views{" "}</b>
                                </div>
                                <div class="col-1">
                                    <b>:</b>
                                </div>
                                <div class="col-7">
                                   <b> 999 </b>
                                </div>
                            </div>

                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                       <div className={classes.views}>
                            <div class="row">
                                <div class="col-1">
                                <ThumbUpOffAltIcon/>
                                </div>
                                <div class="col-3">
                                    <b>Likes{" "}</b>
                                </div>
                                <div class="col-1">
                                    <b>:</b>
                                </div>
                                <div class="col-7">
                                    <b>999</b>
                                </div>
                            </div>

                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                       <div className={classes.views}>
                            <div class="row">
                                <div class="col-1">
                                    <CommentIcon/> 
                                </div>
                                <div class="col-4">
                                    <b>Comments{" "}:</b>
                                </div>
                                <div class="col-7">
                                    <b>999</b>
                                </div>
                            </div>

                       </div>
                    </div>
                </div>
                <div >
                    <img className={classes.belowimage} src="https://www.socialbakers.com/website/storage/2020/01/OG-BLOG_data.jpg" alt="analyticimage"/>
                </div>
            
            </div>
            
        

    </div>
}

export default ProfileAnalytics