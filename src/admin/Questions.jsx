import React from "react";
import QuestionCard from "./QuestionCard";
import classes from "./css/questions.module.css";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

const Questions = () => {
  const titles = ["title1", "title2", "title3", "Minecraft", "CrabGame"];
  const summary =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
  return (
    <div className={classes.questions}>
      <h1 style={{ marginTop: "0.5em", marginLeft: "12em" }}>Questions</h1>
      <div className="row">
        {titles.map((title) => (
          <div
            class="card w-25"
            style={{
              backgroundColor: "#8EE4AF",
              marginRight: "3em",
              marginBottom: "1em",
            }}
          >
            <div class="card-body">
              <h5 class="card-title">
                <b>{title}</b>
              </h5>
              <p class="card-text">
                <p>
                  <b>Genres </b> : Gaming <br />
                </p>
                <p>
                  {" "}
                  <b>Summary </b> : {summary.slice(0, 80)} ...{" "}
                </p>
              </p>
              <Link to={`/admin/questions/id`} className={classes.link}>
                <b>View Question</b>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </div>
  );
};

export default Questions;
