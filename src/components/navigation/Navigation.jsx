import { Category, Close, Search, TrendingUp } from '@mui/icons-material'
import React from 'react'
import GenreCard from './genrecards/GenreCard'
import classes from './Navigation.module.css'
import genreData from '../../helpers/genreData.json'
import Carousel from './trending/carousel/Carousel'
import trendingData from '../../helpers/trendingData.json'
import { motion } from 'framer-motion'

const Navigation = (props) => {
    return (
        <motion.nav initial={{x: '-100vw', opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.7}}>
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
                    <Carousel data={trendingData} theme={"bg-dark"} className={"trendcard"} />
                </div>
            </div>
        </motion.nav>
    )
}

export default Navigation
