import React from 'react'
import classes from './Home.module.css'
import Left from './left/Left'
import Right from './right/Right'

const Home = () => {
    return (
        <div className={`container-fluid`}>
            <div className="row">
                <div className={`col-md-7 ${classes.left}`}>
                    <Left />
                </div>
                <div className={`col-md-5 ${classes.right}`}>
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Home
