import React from 'react'
import classes from './TrendingCard.module.css';

const TrendingCard = (props) => {
    return (
        <div className={"card shadow bg-dark " + classes.trendcard}>
            <img src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg" className="card-img-top" alt="..." />
            <div className={"card-img-overlay " + classes.title}>
                <h5 className="card-title">Title goes here</h5>
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default TrendingCard
