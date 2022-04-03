import React from "react";
import PostCard from "../cards/PostCard";
import { motion } from "framer-motion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import {fetchData} from "../../../requests/post_detail.request"

const PostPage = () => {
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
    const [limit, setLimit] = useState(0);
    const [status, setStatus] = useState(false);
    const pageinationHandler = (e, value) => {
        setLimit((value - 1) * 10);
        window.scroll(0, 0);
    };
    const [data, setTitle] = useState("");
    useEffect(() => {
         setStatus(true);
        fetchData().then((result) => {
            if (result !== "failed") {
                setStatus(false);
                setTitle(result);
            }
        });
    }, []);
    
    var result = [];
    for (var i in data.data) result = [...result, data.data[i]]
  
    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }
   
    return status ? (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
            }}
        >
            <CircularProgress sx={{ color: "#5cdb95" }} />
        </div>
    ) : (
        <motion.div
            variants={mainVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {result.slice(limit, limit + 10).map((post) => (
                <PostCard
                    key={post._id}
                    id={post.userId}
                    banner={result[0].author}
                    author={post.author.split(' ')[0]}
                    title={post.title}
                    description={post.summary}
                    likes={10}
                    publishedDate={convert(post.published_date)}
                  
                    comments={post.comments}
                    userId={post.userId}
                />
            ))}
            <Stack spacing={2}>
                <Pagination
                    sx={{
                        margin: "1em auto",
                        backgroundColor: "#5cdb95",
                        padding: "0.5em",
                        color: "white",
                        borderRadius: "0.5em",
                    }}
                    count={Math.ceil(result.length / 10)}
                    variant="outlined"
                    shape="rounded"
                    onChange={pageinationHandler}
                />
            </Stack>
        </motion.div>
    );
};
export default PostPage;
