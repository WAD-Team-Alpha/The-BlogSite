import React, { useEffect, useState } from "react";
import PostCard from "../cards/PostCard";
import QuestionCard from "../cards/QuestionCard";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const RecentActivityPage = () => {
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
  const [recents, setRecents] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setStatus(true);
    const getRecents = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/activity/get_recent_activity`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response;
    };
    getRecents().then((response) => {
      if (response.data.status) {
        setRecents(response.data.data);
        console.log(response.data.data)
        setStatus(false);
      } else {
        setErrors(response.data.message);
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
      {recents.length === 0 && <div className="container d-flex align-items-center justify-content-center" style={{
          fontSize: '1.5em',
          fontWeight: '800',
          height: '80vh',
      }}>
            No Recent activity so far
          </div>}
      {recents.map((recent, index) => {
        const dateObject = new Date(recent.content.published_date)
        const date = dateObject.getDate() +  "/" + dateObject.getMonth() + "/" + dateObject.getFullYear()
        return recent !== null && recent.data !== null ? (
          recent.type === "post" ? (
            <PostCard
              id={recent.content._id}
              key={index}
              banner={recent.content.banner}
              title={recent.content.title}
              summary={recent.content.summary}
              likes={recent.content.likes.length}
              author={recent.content.author}
              publishedDate={date}
              userId={recent.content.userId}
              comments={recent.content.comments.length}
            />
          ) : (
            <QuestionCard
              key={recent.content._id}
              id={recent.content._id}
              votes={recent.content.up_votes.length}
              answers={recent.content.answers.length}
              title={recent.content.title}
              summary={recent.content.summary}
              author={recent.content.author}
              userId={recent.content.userId}
              publishedDate={date}
            />
          )
        ) : (
          <div></div>
        );
      })}
    </motion.div>
  );
};
export default RecentActivityPage;
