import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import PostCard from "../home/cards/PostCard";

const Results = () => {
    const location = useLocation(); //Navigation info
    const params = new URLSearchParams(location.search);
    const mainVarient = {
        hidden: {
            opacity: 0,
            x: "100vw",
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut",
            },
        },
    };
    // Results pave which renders all the search results
    return (
        <motion.div
            variants={mainVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
        ><PostCard
                            key={5}
                            id={5}
                            banner={"www.google.com"}
                            title={"This is title"}
                            description={"This is description"}
                            likes={5}
                            publishedDate={"This is published date"}
                            userId={"256987942"}
                        />
        </motion.div>
    );
};

export default Results;
