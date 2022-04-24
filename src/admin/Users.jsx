import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./css/users.module.css";
import { Pagination } from "@mui/material";
import LoadingSpinner from "../components/auth/LoadingSpinner";
import { getUsersData } from "../requests/admin.requests";
const Users = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const handleChange = async (e,value) => {
        setLoading(true)
        const data1 = await getUsersData(value);
        console.log(data1);
        setData(data1);
        setLoading(false);
    };
    useEffect(() => {
        async function fetchData() {
            const data1 = await getUsersData(1);
            console.log(data1);
            setData(data1);
            setLoading(false);
        }
        fetchData();
    }, []);

    //  const users = ["Prathyush", "Surya", "Mahaboob", "Sekhar", "Satyam", "UserA", "UserB"];
    //  const summary = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    return loading ? (
        <LoadingSpinner />
    ) : (
        <div className={classes.users}>
            <h1 style={{ marginTop: "0.5em", marginLeft: "13em" }}>Users</h1>
            <div className="row">
                {data.map((user) => (
                    <div
                        key={user._id}
                        class="card w-25"
                        style={{
                            backgroundColor: "#8EE4AF",
                            marginRight: "3em",
                            marginBottom: "1em",
                        }}
                    >
                        <div class="card-body">
                            <h5 class="card-title">
                                <b>{`${user.firstname} ${user.lastname}`}</b>
                            </h5>
                            <p class="card-text">
                                <b>Genres </b> :{" "}
                                {user.genres.map((g) => `${g}, `)}
                                <br />
                                <p>
                                    <b>Bio </b> : {user.bio.slice(0, 100)}{" "}
                                    {user.bio.length !== 0
                                        ? "..."
                                        : "Not Updated"}{" "}
                                </p>
                            </p>
                            <a href="#" class="btn btn-primary">
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className={classes.pagination}>
                <Pagination
                    onChange={handleChange}
                    count={data.count === undefined ? 1 : data.count}
                    variant="outlined"
                    color="primary"
                />
            </div>
        </div>
    );
};

export default Users;
