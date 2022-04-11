import React from "react";
import PostCard from "../cards/PostCard";
import { motion } from "framer-motion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

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
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [posts, setPosts] = useState([]);
  const pageinationHandler = (e, value) => {
    setLimit(10);
    setPage(value);
    window.scroll(0, 0);
  };
  const [data, setTitle] = useState("");
  useEffect(() => {
    setStatus(true);
    const getPosts = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/post/get_all_posts?page=${page}&limit=${limit}`
      );
      if (response.data.status) {
        return response.data;
      } else {
        return "Error occured";
      }
    };
    getPosts().then((response) => {
      if (typeof response === "string") {
        setStatus(false);
      } else {
        setPages(response.data.numberOfPages);
        setPosts(response.data.posts);
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
      {posts.map((post) => {
        const publishedDate = new Date(post.published_date);
        const date = publishedDate.getUTCDate()
        const month = publishedDate.getUTCMonth() + 1
        const year = publishedDate.getUTCFullYear()
        return (
          <PostCard
            key={post._id}
            id={post._id}
            banner={post.author}
            author={post.author.split(" ")[0]}
            title={post.title}
            summary={post.summary}
            likes={post.likes?.length || 0}
            publishedDate={`${date}/${month}/${year}`}
            comments={post.comments?.length}
            userId={post.userId}
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
export default PostPage;
