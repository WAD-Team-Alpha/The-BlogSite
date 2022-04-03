import { motion } from "framer-motion";
import React from "react";
import QuestionCard from "../cards/QuestionCard";
import { useState } from "react";
import { useEffect } from "react";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import {fetchData} from "../../../requests/Question.request"

const QuestionPage = () => {
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
    const [statu, setStatus] = useState(false);
    const [data, setTitle] = useState("");
    useEffect(() => {
         setStatus(true);
        fetchData().then((result) => {
            if (result !== "failed") {
                
                setTitle(result);
            }
        });
    }, []);
    
    var result = [];
    for (var i in data.data) result = [...result, data.data[i]]
  

    let status = result.length;

    const [limit, setLimit] = useState(0);
    const pageinationHandler = (e, value) => {
        setLimit((value - 1) * 10);
        window.scroll(0, 0);
    };

    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }
   

    return !status ? (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
            }}
        >
            <h1>
                <CircularProgress sx={{ color: "#5cdb95" }} />
            </h1>
        </div>
    ) : (
        <motion.div
            variants={mainVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {result.slice(limit, limit + 10).map((query) => {
                return (
                    <QuestionCard
                        key={query._id}
                        id={query._id}
                        votes={query.likes}
                        answers={query.comments}
                        author={query.author.split(' ')[0]}
                        question={query.title}
                        details={query.summary}
                        userId={query.userId}
                        publishedDate={convert(query.published_date)}
                    />
                );
            })}
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
export default QuestionPage;
