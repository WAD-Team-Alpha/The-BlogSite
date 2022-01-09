import { Container, Box, Link } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalButton from "./Modal/ModalButton";
import classes from "./newprofile.module.css"
import ProfileTabs from "./ProfileTabs";
import {useParams} from "react-router-dom";
const ProfileMiddle = () => {
    const params = useParams();
    console.log(params.uid);
    return <div className={classes.middleContainer}>
        <Container sx={{ marginTop: "0.5em", backgroundColor: "white", height: "560px" }}>
            <ProfileTabs uid={params.uid}/>
        </Container>
    </div>
}

export default ProfileMiddle;