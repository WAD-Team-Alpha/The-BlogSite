import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import classes from './Carousel.module.css'
import Card from '../card/Card';

const LeftArrow = (props) => {
    const { className, onClick } = props
    return props.currentSlide !== 0 ? (
        <div className={className + " " + classes.arrow + " " + classes.left} onClick={onClick} >
            <KeyboardArrowLeft style={{ color: '#5CDB95', fontSize: '3rem' }} />
        </div>
    ) : <div></div>
}

const RightArrow = (props) => {
    const { className, onClick } = props
    return props.currentSlide !== 6 ? (
        <div className={className + " " + classes.arrow + " " + classes.right} onClick={onClick} >
            <KeyboardArrowRight style={{ color: '#5CDB95', fontSize: '3rem' }} />
        </div>
    ) : <div></div>
}

const Carousel = (props) => {
    let settings = {
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 100,
        dots: false,
        initialSlide: 0,
    };
    return (
        <Slider {...settings}>
            {props.data.map(value => {
                return <Card key={value} className={props.className} link={value.link} title={value.title} content={value.content} theme={props.theme} />
            })}
        </Slider>
    )
}

export default Carousel
