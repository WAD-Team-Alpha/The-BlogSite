import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
    // Card UI
    return (
        <div className={"card shadow" + " " + props.theme + " " + classes[props.className]}>
            <img src={props.link} className="card-img-top" alt="..." />
            {props.className !== "profileCard" && <div className={"card-img-overlay " + classes.title}>
                <h5 className="card-title"> <Link to={`/posts/${props.id}`} style={{color: 'white', textDecoration: 'none'}}>{props.title}</Link> </h5>
            </div>}
            <div className="card-body">
                <p className="card-text">{props.content}</p>
                {props.className === "profileCard" && <a href='#' className="card-text">Follow</a>}
            </div>
        </div>
    )
}

export default Card
