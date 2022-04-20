import React, { useEffect, useRef, useState } from "react";
import classes from "./Form.module.css";
import AddIcon from "@mui/icons-material/Add";
import PostModal from "./PostModal";
import ImageInputBox from "./ImageInputBox/ImageInputBox";
import TextInputBox from "./TextInputBox/TextInputBox";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../auth/LoadingSpinner";
import axios from 'axios'

const PostForm = () => {

    // State for the form inputs
    const [inputList, setInputList] = useState([]);
    const [banner, setBanner] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [submit, setSubmit] = useState(false);
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();
    const formRef = useRef();
    const [errors, setErrors] = useState("")

    // Effect for the scroll
    useEffect(() => {
        if (formRef.current) {
            formRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    }, [inputList.length]);

    // Handler for the form validation
    const bannerHandler = (value) => {
        setBanner(value);
    };

    const titleHandler = (value) => {
        setTitle(value);
    };

    const summaryHandler = (value) => {
        setSummary(value);
    };

    // Scrolling function
    function updateScroll() {
        var element = document.getElementById("post-form");
        element.scrollTop = element.scrollHeight;
    }

    // Input handler for custom inputs

    const addInputHandler = (type) => {
        const seq_no = inputList.length + 1
        setInputList((value) => [
            ...value,
            {
                id: uuidv4(),
                type: type,
                value: "",
                seq_no: seq_no, 
            },
        ]);
        updateScroll();
    };

    // Input delete handler
    const deleteInputHandler = (id) => {
        const values = [...inputList];
        values.splice(
            values.findIndex((value) => value.id === id),
            1
        );
        for(let i in values) {
            values[i] = {
                ...values[i],
                seq_no: parseInt(i) + 1
            }
        }
        setInputList(values);
        console.log(values)
    };

    // Input on change handler
    const inputChangeHandler = (id, value) => {
        const newInputFields = inputList.map((input) => {
            if (input.id === id) {
                input.value = value;
            }
            return input;
        });
        setInputList(newInputFields);
    };
    
    // Form on submit handler
    const onSubmitHandler = (event) => {
        setSubmit(true);
        const postId = uuidv4();
        const uid = "2";
        var today = new Date();
        const publishedDate = today.toLocaleDateString("en-US");
        event.preventDefault();
        const finalData = inputList.map((input) => {
            return input;
        });
        const postData = {
            uid: uid,
            title,
            banner,
            summary,
            cells: finalData,
            genre: genre,
        };
        const cellImages = []
        let k = 0
        for(let i in finalData) {
            if(finalData[i].type === "image") {
                cellImages.push(finalData[i].value)
                finalData[i].value = k
                k = k + 1
            }
        }
        postData.cells = finalData;
        console.log(postData)
        let form = new FormData()
        for(let i in postData) {
            console.log(i)
            if(i === 'cells') {
                form.append(i, JSON.stringify(postData[i]))
            } else {
                form.append(i, postData[i])
            }
        }
        for(let i in cellImages) {
            console.log(i)
            form.append(`cellImage_${i}`, cellImages[i])
        }
        const submitPost = async (postData) => {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/post/create_post`, postData, {
                headers: {
                    'Content-Type': "multipart/form-data",
                    Authorization: localStorage.getItem('token'),
                    'folder': 'posts'
                }
            });
            return response;
        }
        submitPost(form).then((response) => {
            if(response.data.status) {
                console.log(response)
                navigate("/profile", {replace: true, state: {
                    notification: true,
                    message: response.data.message
                }})
                setSubmit(false)
            } else {
                console.log(response)
                setErrors(response.data.message)
                setSubmit(false)
            }
        })
    };

    return submit ? (
        <LoadingSpinner />
    ) : (
        <div className={"col-md-8 " + classes.form}>
            <form
                className={"container"}
                onSubmit={onSubmitHandler}
                ref={formRef}
            >
                {/* <br /> */}
                <div
                    id="post-form"
                    className="d-flex align-items-center justify-content-between"
                >
                    <h1 className="mb-4 mt-4">
                        <b>Step 1: </b> Create the post
                    </h1>
                    <select
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Please select the type of genre this post is related to !"
                        onChange={(e) => {
                            setGenre(e.target.value);
                        }}
                        className="form-select"
                        aria-label="Default select example"
                        style={{
                            width: "10em",
                            backgroundColor: "#5cdb95",
                            fontWeight: "600",
                            border: "2px solid #5cdb95",
                            borderColor: genre === "genre-invalid" ? "red" : "",
                        }}
                        defaultValue={""}
                        required
                    >
                        <option value="" disabled>
                            Select genre
                        </option>
                        <option value="tech">Technology</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="coding">Coding</option>
                        <option value="traveling">Traveling</option>
                        <option value="movies">Movies</option>
                        <option value="gaming">Gaming</option>
                    </select>
                </div>
                {/* <br /> */}
                <ImageInputBox
                    id={"hello9"}
                    height={"30vh"}
                    isAdded={false}
                    onChange={bannerHandler}
                    inputname={"Add banner image"}
                />
                {/* <br /> */}
                <TextInputBox
                    id={"hello0"}
                    inputname={"Title"}
                    isAdded={false}
                    onChange={titleHandler}
                    maxLength={120}
                />
                {/* <br /> */}
                <TextInputBox
                    id={"hello"}
                    inputname={"Summary"}
                    height={"100px"}
                    isAdded={false}
                    onChange={summaryHandler}
                    maxLength={400}
                />
                {/* <br /> */}
                {/* Custom rendering */}
                {inputList.map((input, index) => {
                    return input.type === "text" ? (
                        <React.Fragment key={index}>
                            <TextInputBox
                                id={input.id}
                                inputname={`Content cell ${index + 1}`}
                                isAdded={true}
                                onChange={inputChangeHandler}
                                onDelete={deleteInputHandler}
                                maxLength={400}
                                height={"120px"}
                            />
                            {/* <br /> */}
                        </React.Fragment>
                    ) : (
                        <React.Fragment key={index}>
                            <ImageInputBox
                                id={input.id}
                                height={"20vh"}
                                inputname={`Add image ${index + 1}`}
                                isAdded={true}
                                onChange={inputChangeHandler}
                                onDelete={deleteInputHandler}
                            />
                        </React.Fragment>
                    );
                })}
                <div id="post-form"></div>
                <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ marginBottom: "1em" }}
                >
                    Submit
                </button>
            </form>
            <button
                className={"btn btn-primary " + classes.floatingbutton}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                <AddIcon />
            </button>
            <PostModal handler={addInputHandler} />
        </div>
    );
};

export default PostForm;
