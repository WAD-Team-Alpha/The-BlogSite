import React from 'react'
import classes from './profile.module.css';

const Profile = (props) => {
    return (
        <div className={"card shadow " + classes.trendcard}>
            <img src="https://picsum.photos/50"  alt="..." />
            
            <div className="card-body">
            <p className="card-text fw-bold">Surya</p>
                <a href='#' className="card-text">Fellow</a>
            </div>
        </div>
    )
}

export default Profile
