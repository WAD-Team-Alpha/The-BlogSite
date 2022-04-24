import { motion } from "framer-motion";
import React from "react";
import QuestionCard from "../cards/QuestionCard";
import { useState } from "react";
import { useEffect } from "react";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import axios from "axios";

const QuestionPage = (props) => {
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

    const [limit, setLimit] = useState(10);
    const [status, setStatus] = useState(false);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [data, setTitle] = useState("");

    // useEffect(() => {
    //      setStatus(true);
    //     fetchData().then((result) => {
    //         if (result !== "failed") {
                
    //             setTitle(result);
    //         }
    //     });
    // }, []);
    
    // var result = [];
    // for (var i in data.data) result = [...result, data.data[i]]
  

    // let status = result.length;

    // const [limit, setLimit] = useState(0);
    const pageinationHandler = (e, value) => {
        setLimit(10);
        setPage(value);
        window.scroll(0, 0);
    };

    // function convert(str) {
    //     var date = new Date(str),
    //       mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //       day = ("0" + date.getDate()).slice(-2);
    //     return [date.getFullYear(), mnth, day].join("-");
    //   }
    useEffect(() => {
      // props.setFilterOptions(["Published Date", "Votes", "Answers"])
      localStorage.setItem("page", "question");
  }, [])
    useEffect(() => {
        setStatus(true);
        const getQuestions = async () => {
          const response = await axios.get(
            `http://localhost:5000/api/v1/question/get_all_questions?page=${page}&limit=${limit}`
          );
          console.log(response.data);
          if (response.data.status) {
            return response.data;
          } else {
            return "Error occured";
          }
        };
        getQuestions().then((response) => {
          if (typeof response === "string") {
            setStatus(false);
          } else {
            setPages(response.data.numberOfPages);
            setQuestions(response.data.questions);
            setStatus(false);
          }
        });
      }, [page]);
    

    return status ? (
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
           {questions.map((question) => {
        const publishedDate = new Date(question.published_date);
        const date = publishedDate.getUTCDate()
        const month = publishedDate.getUTCMonth() + 1
        const year = publishedDate.getUTCFullYear()
        return (
          <QuestionCard
            key={question._id}
            id={question._id}
            banner={question.author}
            author={question.author.split(" ")[0]}
            title={question.title}
            summary={question.summary}
            votes={question.up_votes?.length || 0}
            publishedDate={`${date}/${month}/${year}`}
            answers={question.answers?.length}
            userId={question.userId}
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
                    page={page}
                    count={pages}
                    variant="outlined"
                    shape="rounded"
                    onChange={pageinationHandler}
                />
            </Stack>
        </motion.div>
    );
};
export default QuestionPage;
