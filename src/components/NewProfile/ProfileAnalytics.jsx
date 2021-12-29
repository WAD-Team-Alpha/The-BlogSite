import { Container } from "@mui/material"
import { Box } from "@mui/system"
import classes from './analytics.module.css'

const ProfileAnalytics=()=>{
    return <div>
         
            <div className={classes.pie} >
                <img className={classes.pieimg} src="https://cms.qz.com/wp-content/uploads/2018/04/pie-chart_colorcorrected.jpeg?quality=75&strip=all&w=900&h=900&crop=1" alt="#"/>
            </div>
           
            <div className={classes.analytics} >
                <span className={classes.anname}>Analytics</span>
            </div>
            
            
            <div className={classes.aninfo}>
                <span className={classes.matter}>To be included</span> 
            </div>
            
        

    </div>
}

export default ProfileAnalytics