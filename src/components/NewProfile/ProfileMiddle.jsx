import { Container, Box, Link } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalButton from "./Modal/ModalButton";
import classes from "./newprofile.module.css"
import ProfileTabs from "./ProfileTabs";

const ProfileMiddle = () => {


    return <div className={classes.middleContainer}>
        <Container sx={{ marginTop: "0.5em", backgroundColor: "white", height: "560px" }}>
            <ProfileTabs />
        </Container>
    </div>
}

export default ProfileMiddle;