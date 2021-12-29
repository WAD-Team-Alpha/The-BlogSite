import React from 'react'
import classes from './home.module.css'
import ProductCard from './middle/productcard'
import Question from './middle/question'
import Carousel from '../navigation/trending/carousel/Carousel'
import profileData from '../../helpers/profileData.json'
import recommendedData from '../../helpers/recommendedData.json'
import Left from './left'
import Right from './right'
import Middle from './middle/middle'

const Home = () => {
    return (

        <div className="container-fluid" >

            <div className="row">
               <Left></Left>
               <Middle></Middle>
                <Right></Right>
            </div>

        </div>
    );
}
export default Home;