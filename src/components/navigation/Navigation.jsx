import { Category, Close, Search, TrendingUp } from '@mui/icons-material'
import React from 'react'
import GenreCard from './genrecards/GenreCard'
import classes from './Navigation.module.css'
import genreData from '../../helpers/genreData.json'
import Carousel from './trending/carousel/Carousel'
import trendingData from '../../helpers/trendingData.json'

const Navigation = (props) => {
    return (
        <nav>
            <button className={'btn shadow-none ' + classes.nav} onClick={props.nav}>
                <Close />
            </button>
            <div className="container">
                <div className={`row ${classes.height} d-flex justify-content-center`}>
                    <div className="col-md-12">
                        <div className={classes.search}>
                            <Search className={classes['fa-search']} />
                            <input type="text" className="form-control" placeholder="Search here !" />
                            <button className="btn btn-primary shadow-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container " + classes.genre}>
                <h2><Category fontSize='1.5em' /> Genres</h2>
                <div className="container d-flex justify-content-between">
                    {genreData.map(genre => {
                        return <GenreCard title={genre.title} link={genre.link} />
                    })}
                </div>
            </div>
            <div className={"container " + classes.trending}>
                <h2><TrendingUp fontSize='1.5em' /> Trending</h2>
                <div className="">
                    <Carousel data={trendingData} />
                </div>
            </div>
        </nav>
    )
}

export default Navigation
