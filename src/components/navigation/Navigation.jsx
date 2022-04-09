import { Category, Close, Search, TrendingUp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import GenreCard from "./genrecards/GenreCard";
import classes from "./Navigation.module.css";
import genreData from "../../helpers/genreData.json";
import Carousel from "./trending/carousel/Carousel";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { CircularProgress } from "@mui/material";

const Navigation = (props) => {
    const navigate = useNavigate(); //Navigating hooks
    const [search, setSearch] = useState(); //state is stored here
    const genreHandler = (event) => {
        //Genre handler
        setSearch(event.target.value);
    };

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState("")

    useEffect(() => {
        console.log("Hey there")
        setLoading(true)
        const getPosts = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/v1/post/get_all_posts?page=${1}&limit=${7}`
            );
            return response
        }
        getPosts().then((response) => {
            console.log(response)
            if(response.data.status) {
                setData(response.data.data.posts)
                setLoading(false)
            } else {
                setErrors(response.data.message)
                setLoading(false)
            }
        })
    }, [])

    return (
        <motion.nav
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <button
                className={"btn shadow-none " + classes.nav}
                onClick={props.nav}
            >
                <Close />
            </button>
            <div className="container">
                <div
                    className={`row ${classes.height} d-flex justify-content-center`}
                >
                    <div className="col-md-12">
                        <div className={classes.search}>
                            <Search className={classes["fa-search"]} />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search here !"
                                onChange={genreHandler}
                            />
                            <button
                                className="btn btn-primary shadow-none"
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate(
                                        `/searchresults?query=${search
                                            .split(" ")
                                            .join("-")
                                            .toLowerCase()}`
                                    ); //Navigating to the search results page
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container " + classes.genre}>
                <h2>
                    <Category fontSize="1.5em" /> Genres
                </h2>
                <div className="container d-flex justify-content-between">
                    {/* Rendering all the genres randomly */}
                    {genreData.map((genre) => {
                        return (
                            <GenreCard
                                title={genre.title}
                                link={genre.link}
                                name={genre.name}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={"container " + classes.trending}>
                <h2>
                    <TrendingUp fontSize="1.5em" /> Trending
                </h2>
                <div className="">
                    {loading && <CircularProgress />}
                    {!loading && <Carousel
                        data={data}
                        theme={"bg-dark"}
                        className={"trendcard"}
                        slidesToShow={4}
                    />}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
