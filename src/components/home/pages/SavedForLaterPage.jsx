import React, { useEffect, useState } from "react";
import PostCard from "../cards/PostCard";
import QuestionCard from "../cards/QuestionCard";
import { motion } from "framer-motion";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import axios from "axios";

const SavedForLaterPage = () => {
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
  const [status, setStatus] = useState(false);
  const [saved, setSaved] = useState([]);
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const [limit, setLimit] = useState(10);
  const pageinationHandler = (e, value) => {
    setLimit(10)
    setPage(value);
    window.scroll(0, 0);
  };

  useEffect(() => {
    setStatus(true);
    const getSavedData = async () => {
      console.log(page, limit)
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/activity/get_saved_content?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response;
    };
    getSavedData().then((response) => {
      if (!response.data.status) {
        setStatus(false);
      } else {
        console.log(response.data.data.numberOfPages);
        setPages(response.data.data.numberOfPages);
        setSaved(response.data.data.saved);
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
      <CircularProgress sx={{ color: "#5cdb95" }} />
    </div>
  ) : (
    <motion.div
      variants={mainVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {saved.map((content, index) => {
        const dateObject = new Date(content.published_date);
        const date =
          dateObject.getDate() +
          "/" +
          dateObject.getMonth() +
          "/" +
          dateObject.getFullYear();
        return content.type === "post" ? (
          <PostCard
            id={content._Id}
            userId={content.userId}
            key={index}
            banner={content.banner}
            title={content.title}
            summary={content.summary}
            likes={content.likes.length}
            author={content.author}
            comments={content.comments.length}
            publishedDate={date}
          />
        ) : (
          <QuestionCard
            key={index}
            id={content._id}
            answers={content.answers.length}
            title={content.title}
            summary={content.summary}
            author={content.author}
            votes={content.up_votes.length}
            userId={content.userId}
            publishedDate={date}
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
export default SavedForLaterPage;
