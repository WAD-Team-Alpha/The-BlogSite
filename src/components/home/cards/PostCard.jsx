import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './PostCard.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOtherProfileData } from '../../../store/profile-actions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const PostCard = (props) => {
    const navigate = useNavigate();
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
    return (
        <div className={`card mb-3  mt-3 ${classes.shadow}`} >
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={props.banner} className="img-fluid rounded-start" height="200px" width="200px" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 ">{props.title}</h5>
                        <p style={{height: '2.5em'}}>{dec}</p>
                    </div>
                    <div className={classes.bottom}>
                        <p className='btn'><ThumbUpIcon /> Likes {props.likes} </p>
                        <p className='btn'><CommentIcon /> Comments {props.likes} </p>
                        <Link className='btn' style={{height: '2.5em'}} onClick={getDataHandler} to={`/posts/${props.id}`}> <RemoveRedEyeIcon /> View post</Link>
                        <p className="btn">Posted by <span style={{color: 'blue', fontWeight: '600'}}>{props.author}</span> on {props.publishedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;