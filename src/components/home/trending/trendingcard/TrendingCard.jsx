import React from 'react'
import classes from './TrendingCard.module.css';

const TrendingCard = (props) => {
    return (
        <div className={"card shadow bg-dark " + classes.trendcard}>
            <img src="https://picsum.photos/200"  alt="..." />
            <div className={"card-img-overlay " + classes.title}>
                <h5 className="card-title">Title goes here</h5>
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text .</p>
            </div>
        </div>
    )
}

export default TrendingCard
