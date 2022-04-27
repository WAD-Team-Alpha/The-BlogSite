import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/auth/LoadingSpinner";
import { getUserData, deleteUserData } from "../../requests/admin.requests";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            const data1 = await getUserData(params.id);
            console.log(data1);
            setData(data1);
            setLoading(false);
        }
        fetchData();
    }, []);
    return loading ? (
        <LoadingSpinner />
    ) : (
        <div
            style={{
                backgroundColor: "#8ee4af",
                marginTop: "1em",
                height: "700px",
            }}
        >
            <div
                style={{
                    paddingLeft: "35em",
                    paddingTop: "3em",
                    paddingBottom: "2em",
                    fontSize: "larger",
                }}
            >
                <b>User Details</b>
            </div>

            <div class="container">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="col">First Name</th>
                            <td>{data.firstname}</td>
                        </tr>
                        <tr>
                            <th scope="col">Last Name</th>
                            <td>{data.lastname}</td>
                        </tr>
                        <tr>
                            <th scope="col">Email</th>
                            <td>{data.email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Genres</th>
                            <td>{data.genres.map((g) => `${g}, `)}</td>
                        </tr>
                        <tr>
                            <th scope="col">Bio</th>
                            <td>{data.bio} </td>
                        </tr>
                        <tr>
                            <th scope="col">Followers</th>
                            <td>{data.followers.length}</td>
                        </tr>
                        <tr>
                            <th scope="col">Following</th>
                            <td>{data.following.length}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button
                        onClick={async () => {
                            setLoading(true);
                            const res = await deleteUserData(data._id);
                            navigate(`/admin/users`, { replace: true });
                        }}
                        class="btn btn-primary"
                    >
                        Delete Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
