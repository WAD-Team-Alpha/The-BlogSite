import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import classes from "./rightp.module.css";
import { Avatar } from "@mui/material";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getOtherUserData } from "../../../../requests/profile.request";
import LoadingSpinner from "../../../auth/LoadingSpinner";
const Rightp = (props) => {
    const navigate = useNavigate();
    // const profileData = props.profileData; // importing and saving the profile data
    const [userData, setUserData] = useState();
    const [submit, setSubmit] = useState(true);
    useEffect(() => {
        async function fetchOtherUserData(id) {
            const data = await getOtherUserData(id);
            console.log(data);
            setUserData(data);
            setSubmit(false);
        }
        console.log(props.data.userId);
        fetchOtherUserData(props.data.userId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div className={classes.containerMD}>
            {submit ? (
                    <LoadingSpinner />
                ) : (
                    <Container>
                        <Box
                            sx={{
                                bgcolor: "white",
                                height: "158px",
                                borderRadius: "0.3em",
                            }}
                        >
                            <div className="container-fluid">
                                <div className="row justify-content-end">
                                    <div
                                        className="col-2"
                                        style={{ height: "em" }}
                                    ></div>
                                </div>
                                <div className="row justify-content-start">
                                    <div
                                        className="col-1"
                                        style={{ marginRight: "4em" }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: "74px",
                                                height: "73px",
                                            }}
                                        />
                                    </div>
                                    <div className="col-8">
                                        <span className={classes.uname}>
                                            {" "}
                                            <b>{userData.firstname}</b>
                                        </span>

                                        <div className="row justify-content-center">
                                            <div className="col-6">
                                                <span>
                                                    <Link underline="none">
                                                        {" "}
                                                        <div
                                                            className={
                                                                classes.mainfollowers
                                                            }
                                                        >
                                                            Followers
                                                        </div>
                                                    </Link>
                                                </span>
                                            </div>
                                            <div className="col-6">
                                                <span>
                                                    <Link underline="none">
                                                        <div
                                                            className={
                                                                classes.mainfollowers
                                                            }
                                                        >
                                                            Following
                                                        </div>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-end">
                                            <div className="col-8">
                                                <span
                                                    className={
                                                        classes.followercount
                                                    }
                                                >
                                                    {" "}
                                                    <b>
                                                        {
                                                            userData.followers
                                                                .length
                                                        }
                                                    </b>
                                                </span>
                                            </div>
                                            <div className="col-4">
                                                <span
                                                    className={
                                                        classes.followingcount
                                                    }
                                                >
                                                    {" "}
                                                    <b>
                                                        {
                                                            userData.following
                                                                .length
                                                        }
                                                    </b>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-start">
                                            <div className="col-12">
                                                <span>
                                                    <Button
                                                        onClick={() => {
                                                            navigate(
                                                                `/profile/${userData._id}`
                                                            );
                                                        }}
                                                        variant="contained"
                                                        style={{
                                                            height: "30px",
                                                            width: "100%",
                                                            marginTop: "1em",
                                                            backgroundColor:
                                                                "#05386B",
                                                            textTransform:
                                                                "none",
                                                        }}
                                                    >
                                                        Inspect
                                                    </Button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Container>
                )}
            </div>
            <hr
                style={{
                    color: "#5CDB95",
                    border: "2px",
                    height: "2px",
                    width: "343px",
                }}
            />
        </div>
    );
};

export default Rightp;
