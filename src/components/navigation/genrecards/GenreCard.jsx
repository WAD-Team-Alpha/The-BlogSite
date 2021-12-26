import React from 'react'
import classes from './GenreCard.module.css'

const GenreCard = (props) => {
    return (
        <div className={"card bg-dark text-white shadow " + classes.gcard}>
            <img src={props.link} className="card-img" alt="..." />
            <div className={"card-img-overlay " + classes.genre}>
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default GenreCard
