import React from 'react'
import classes from './Left.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const Left = () => {
    return (
        <>
            <div className={classes.header}>
                <button type="button" className={"btn btn-primary shadow-none " + classes.menubutton}>
                    <MenuIcon sx={{ color: '#333333', fontSize: '2em' }} />
                </button>
            </div>
            <div id="seperator" style={{ height: '10em' }}></div>
            <div className={"container " + classes.content}>
                <h1>The Blogsite</h1>
                <div id="seperator" style={{ height: '2em' }}></div>
                <p>
                    Creativity doesn't wait for that perfect moment. Publish your passions, your own way.
                </p>
                <button className={'btn btn-primary shadow-none ' + classes.postbutton}>Publish your first post</button>
            </div>
        </>
    )
}

export default Left
