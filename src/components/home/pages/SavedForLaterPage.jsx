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
    setLimit((value - 1) * 10);
    setPage(value);
    window.scroll(0, 0);
  };

  useEffect(() => {
    const getSavedData = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/activity/get_saved_content?page=${page}&limit=${limit}`
      );
      return response;
    };
    getSavedData().then((response) => {
      if (response.data.status) {
        setStatus(false);
      } else {
        setPages(response.data.numberOfPages);
        setSaved(response.data.saved);
        setStatus(false);
      }
    });
  }, []);

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
      {saved.slice(limit, limit + 10).map((saved, index) => {
        return saved.type === "post" ? (
          <PostCard
            id={saved.data.postId}
            userId={saved.data.uid}
            key={index}
            banner={saved.data.imageUrl}
            title={saved.data.postTitle}
            description={saved.data.postSummary}
            likes={saved.data.likes}
            author={saved.data.author}
            comments={saved.data.comments}
            publishedDate={saved.data.publishedDate}
          />
        ) : (
          <QuestionCard
            key={saved.data.questionId}
            id={saved.data.questionId}
            answers={saved.data.comments}
            question={saved.data.question}
            details={saved.data.description}
            author={saved.data.author}
            votes={saved.data.likes}
            userId={saved.data.userId}
            publishedDate={saved.data.publishedDate}
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
