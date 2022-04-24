import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/auth/LoadingSpinner";
import { getPostData } from "../../requests/admin.requests";
import { useParams } from "react-router-dom";
import { deletePostData } from "../../requests/admin.requests";
const PostDetails = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            const data1 = await getPostData(params.id);
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
                <b>Post Details</b>
            </div>

            <div className="container">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="col">Title</th>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <th scope="col">Description</th>
                            <td>{data.summary}</td>
                        </tr>
                        <tr>
                            <th scope="col">Image</th>
                            <td>{data.banner} </td>
                        </tr>
                        <tr>
                            <th scope="col">Cells</th>
                            <td>
                                <ol>
                                    {data.cells.map((cell) => (
                                        <li>{cell.value}</li>
                                    ))}
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Posted by</th>
                            <td>{data.author}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button
                        class="btn btn-danger"
                        style={{ marginRight: "5em" }}
                        onClick={async () => {
                            setLoading(true);
                            const res = await deletePostData(data._id);
                            navigate(`/admin/posts`, { replace: true });
                        }}
                    >
                        Delete Post
                    </button>
                    <button
                        class="btn btn-primary"
                        onClick={() => navigate(`/admin/users/${data.userId}`)}
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
