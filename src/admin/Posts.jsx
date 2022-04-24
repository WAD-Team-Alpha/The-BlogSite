import React, { useState, useEffect } from "react";
import classes from "./css/posts.module.css";
import { Pagination } from "@mui/material";
import { getPostsData } from "../requests/admin.requests";
import LoadingSpinner from "../components/auth/LoadingSpinner";
const Posts = () => {
    // const titles = ["title1", "title2", "title3", "Minecraft", "CrabGame"]
    // const summary = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const handleChange = async (e,value) => {
      setLoading(true)
      const data1 = await getPostsData(value);
      console.log(data1);
      setData(data1);
      setLoading(false);
  };
    useEffect(() => {
        async function fetchData() {
            const data1 = await getPostsData();
            console.log(data1);
            setData(data1);
            setLoading(false);
        }
        fetchData();
    }, []);
    return loading ? (
        <LoadingSpinner />
    ) : (
        <div className={classes.posts}>
            <h1 style={{ marginTop: "0.5em", marginLeft: "13em" }}>Posts</h1>
            <div className="row">
                {data.map((post) => (
                    <div
                        key={post._id}
                        class="card w-25"
                        style={{
                            backgroundColor: "#8EE4AF",
                            marginRight: "3em",
                            marginBottom: "1em",
                        }}
                    >
                        <div class="card-body">
                            <h5 class="card-title">
                                <b>{post.title}</b>
                            </h5>
                            <p class="card-text">
                                <p>
                                    <b>Genre </b> : {post.genre} <br />
                                </p>
                                <p>
                                    {" "}
                                    <b>Summary </b> :{" "}
                                    {post.summary.slice(0, 80)} ...{" "}
                                </p>
                            </p>
                            <a href="#" class="btn btn-primary">
                                View Post
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className={classes.pagination}>
                <Pagination onChange={handleChange} count={data.count === undefined ? 1 : data.count} variant="outlined" color="primary" />
            </div>
        </div>
    );
};

export default Posts;
