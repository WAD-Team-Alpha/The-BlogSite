import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './PostCard.module.css'
import { useDispatch } from 'react-redux';
import { fetchPostData } from '../../../store/post-actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOtherProfileData } from '../../../store/profile-actions';

import Copyurl from './CopyUrl'
const PostCard = (props) => {
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();
    const getDataHandler = (event) => {
        event.preventDefault();
        console.log(props.id);
        navigate(`/posts/${props.id}`);

    }

    const [userName, setUserName] = useState("")
    useEffect(() => {
        dispatch(fetchOtherProfileData(props.userId)).then((result) => {

            setUserName(result.firstName)
        })
    }, [])
    const [hidden, setHidden] = useState(false);
    const str = props.description;
    const len = str.length;

    let dec;
    let result = str.substring(0, 150);
    if (len < 150) {
        dec = <p className="card-text">{props.description}</p>
    }
    else {
        dec = <p className="card-text">{result}....</p>
    }
    const url = window.location.href;

    const [modalShow, setModalShow] = React.useState(false);
   
    return (
        <div className={`card mb-3  mt-3 ${classes.shadow}`} >
            
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={props.banner} className="img-fluid rounded-start" height="200px" width="200px" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 ">{props.title}</h5>
                        {dec}
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div  >
                        <ul className={`${classes.like}`}>
                            <li><img src="https://img.icons8.com/ios-filled/24/000000/facebook-like.png" alt='hi' /><a href="w">Like {props.likes}</a></li>
                            <li><img src="https://img.icons8.com/ios-glyphs/20/000000/speaker-notes.png" alt='hi' /><a href="w">Comment {props.comments}</a></li>
                            <li><img src="https://img.icons8.com/material-outlined/24/000000/visible--v2.png" alt='hi' /><Link onClick={getDataHandler} to={`/posts/${props.id}`}>View post</Link></li>
                            <li>
                               
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/share--v1.png" height={"20px"} width={"20px"} />
                                    
                                    <button className={`${classes.btn}`} onClick={() => setModalShow(true)}>
                                        share
                                    </button>
                                    
                                
                                <Copyurl
                                show={modalShow}
                                url={`http://localhost:3000/posts/${props.id}`}
                                onHide={() => setModalShow(false)}
                            />
                            </li>
                            <li><a href='w' className="fw-bold">Posted by <a href="w" style={{ color: "#05386b" }}>{userName}</a> on {props.publishedDate}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;