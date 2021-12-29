import React from 'react'
import classes from './middle.module.css'
import ProductCard from './productcard'
import Question from './question'
import Carousel from '../../navigation/trending/carousel/Carousel'
import profileData from '../../../helpers/profileData.json'
import recommendedData from '../../../helpers/recommendedData.json'

const Middle = () => {
    return (

        <div className={`col-md-7 ${classes.middle}`}>
            <ProductCard />
            <Question />

            <div className='row'>

                {/* <Trending></Trending> */}
                <Carousel className={"recommendCard"} data={recommendedData} theme={"bg-dark"} />
            </div>
            <div className='row'>

                {/* <Profile></Profile> */}
                <Carousel className={"profileCard"} data={profileData} />

            </div>

        </div>

    );
}

export default Middle