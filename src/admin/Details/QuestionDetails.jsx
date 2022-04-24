import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/auth/LoadingSpinner";
import { getQuestionData } from "../../requests/admin.requests";
import { useParams } from "react-router-dom";
import { deleteQuestionData } from "../../requests/admin.requests";
const QuestionDetails = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            const data1 = await getQuestionData(params.id);
            console.log(data1);
            setData(data1);
            setLoading(false);
        }
        fetchData();
    }, []);
    const navigate = useNavigate();
    return (
        <div
            style={{
                backgroundColor: "#8ee4af",
                marginTop: "1em",
                height: "500px",
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
                <b>Question Details</b>
            </div>

            <div class="container">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="col">Title</th>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <th scope="col">Summary</th>
                            <td>{data.summary}</td>
                        </tr>
                        <tr>
                            <th scope="col">Image</th>
                            <td>{data.screenshot} </td>
                        </tr>
                        <tr>
                            <th scope="col">Asked by</th>
                            <td>{data.author}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button
                        onClick={async () => {
                            setLoading(true);
                            const res = await deleteQuestionData(data._id);
                            navigate(`/admin/questions`, { replace: true });
                        }}
                        class="btn btn-danger"
                        style={{ marginRight: "5em" }}
                    >
                        Delete Question
                    </button>
                    <button
                        class="btn btn-primary"
                        onClick={() => navigate(`/admin/questions/${data.userId}`)}
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetails;
