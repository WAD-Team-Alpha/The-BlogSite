import * as React from "react";
//import { Avatar, Hidden } from '@mui/material'
import classes from "./middleq.module.css";
import Middle from "./Middle";
import Last from "./Last";

const Middleq = (props) => {
    console.log(props)
    return (
        <div
            className="container-fluid shadow"
            style={{
                backgroundColor: "white",
                marginTop: "1em",
                marginBottom: "1em",
                padding: "1em",
                borderRadius: "8px",
            }}
        >
            <div className="row" style={{ height: "150px" }}>
                <div className="col">
                    <div className={classes.middleheader}>
                        <h3>
                            <b>{props.data.title}</b>
                        </h3>
                    </div>
                    <div className="row" style={{ paddingTop: "0.5em" }}>
                        <div className="col-12">
                            <div style={{ fontSize: "1em" }}>
                                <b>Asked on</b>
                                {"  "}
                                <b style={{ color: "green" }}>
                                {props.data.published_date}
                                </b>{" "}
                                {"  "} by {"  "}{" "}
                                <b style={{ color: "blue" }}>
                                {props.data.author}
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row" style={{ height: "360px" }}>
                <div className="col">
                    {" "}
                    {/*Till above is the question details like asked on and posted by*/}
                    <Middle dec = {props.data.summary} img = {props.data.screenshot} />{" "}
                    {/*Here we are importing the question and question description  part*/}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <Last
                        data={props.data}
                        comments={props.comments}
                        theRef={props.theRef}
                    />{" "}
                    {/*Here we are importing the comments for the posted question printing component*/}
                </div>
            </div>
        </div>
    );
};

export default Middleq;
