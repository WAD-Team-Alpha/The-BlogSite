import { Container } from "@mui/material"
import { Box } from "@mui/system"
import classes from './analytics.module.css'

const ProfileAnalytics=()=>{
    return <div>
         
            <div className={classes.pie} >
                 <span className={classes.analysistext}><b>No Analysis recorded</b></span>
            </div>
           
            <div className={classes.analytics} >
                <span className={classes.anname}>Analytics</span>
            </div>
            
            
            <div className={classes.aninfo}>
                <span className={classes.matter}>
                    <ul >
                        <li style={{paddingBottom: "1em"}}><b>Views</b>: 999</li>
                        <li style={{paddingBottom: "1em"}}><b>Likes</b>: 999</li>
                        <li style={{paddingBottom: "1em"}}><b>Shares</b>: 999</li>
                        <li style={{paddingBottom: "1em"}}><b>Comments</b>: 999</li>
                    </ul>

                </span> 
            </div>
            
        

    </div>
}

export default ProfileAnalytics