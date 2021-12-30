import React from 'react'
import classes from './PostCard.module.css'
const PostCard = (props) => {
    return (
        <div className="card mb-3  mt-3" >
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={props.banner} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 ">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div  >
                        <ul className={`${classes.like}`}>
                            <li><img src="https://img.icons8.com/ios-filled/24/000000/facebook-like.png" /><a href="#">Like {props.likes}</a></li>
                            <li><img src="https://img.icons8.com/ios-glyphs/20/000000/speaker-notes.png" /><a href="#">Comment {props.comments}</a></li>
                            <li><img src="https://img.icons8.com/material-outlined/24/000000/visible--v2.png" /><a href='#'>View post</a></li>
                            <li><a className="fw-bold">Posted by <a href="#" style={{ color: "#05386b" }}>{props.author}</a> on {props.publishedDate}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;