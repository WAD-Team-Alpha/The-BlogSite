import { Container} from "@mui/material";
import { useState } from "react";
import classes from "./newprofile.module.css"
import ProfileTabs from "./ProfileTabs";

const ProfileMiddle=()=>{

    
    return <div className={classes.middleContainer}>
        <Container sx={{marginTop:"1em",backgroundColor:"white", height:"560px"}}>
           <ProfileTabs/>

            
        </Container>
        
    </div>
}

export default ProfileMiddle;