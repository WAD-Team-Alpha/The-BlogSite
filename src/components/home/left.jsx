import React from 'react'
import classes from './left.module.css' 
const Left = () => {
    return (
        
        <div>
            <div className={`${classes.vl}`}></div>
        <ul className={`${classes.list}`}>
            <li className={`${classes.color}`}> <a href='#'>Posts</a></li>
            <li><a href='#' className={`fw-bold fs-8 `} style={{ color: 'black' }}>Forums</a></li>
            <li><a href='#' className={`fw-bold fs-8 `} style={{ color: 'black' }}>Recent Activity</a></li>
            <li> <a href='#' className={`fw-bold fs-8 `} style={{ color: 'black' }}>Saved for Later</a></li>
        </ul>
    </div>
 
       
    );
}

export default Left;