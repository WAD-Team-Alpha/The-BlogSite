import { Container, Box, Link} from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalButton from "./Modal/ModalButton";
import classes from "./newprofile.module.css"
import ProfileTabs from "./ProfileTabs";

const ProfileMiddle=()=>{

    
    return <div className={classes.middleContainer}>
        <Container sx={{marginTop:"1em",backgroundColor:"white", height:"560px"}}>
            
            <div class="row">
                <div class="col-10">
                <ProfileTabs/>
                </div>
                <div class="col-2" >
                {/* <Link class="btn btn-info"  to={"/forms/post"}>
                    <i class="bi bi-plus-circle"></i> Create
                 </Link> */}
                 <ModalButton/>
                
                </div>
            </div>
            
        </Container>
        
    </div>
}

export default ProfileMiddle;