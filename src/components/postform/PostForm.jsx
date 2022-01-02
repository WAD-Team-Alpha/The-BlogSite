import React, { useState } from 'react'
import classes from './Form.module.css'
import AddIcon from '@mui/icons-material/Add';
import PostModal from './PostModal';
import ImageInputBox from './ImageInputBox/ImageInputBox';
import TextInputBox from './TextInputBox/TextInputBox';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';

const PostForm = () => {
    const [inputList, setInputList] = useState([])
    const [banner, setBanner] = useState()
    const [title, setTitle] = useState()
    const [summary, setSummary] = useState()

    const bannerHandler = (value) => {
        setBanner(value)
    }

    const titleHandler = (value) => {
        setTitle(value)
    }

    const summaryHandler = (value) => {
        setSummary(value)
    }

    const addInputHandler = (type) => {
        setInputList((value) => [
            ...value,
            {
                id: uuidv4(),
                type: type,
                value: ""
            },
        ]);
        console.log(inputList);
    }

    const deleteInputHandler = (id) => {
        const values = [...inputList];
        values.splice(
            values.findIndex((value) => value.id === id),
            1
        );
        setInputList(values);
    }

    const inputChangeHandler = (id, value) => {
        const newInputFields = inputList.map((input) => {
            if (input.id === id) {
                input.value = value;
            }
            return input;
        });

        setInputList(newInputFields);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({ banner, title, summary }, inputList)
    }

    return (
        <div className={"col-md-8 " + classes.form}>
            <form className={"container"} onSubmit={onSubmitHandler}>
                <br />
                <h1><b>Step 1: </b> Create the post</h1>
                <br />
                <ImageInputBox height={'30vh'} isAdded={false} onChange={bannerHandler} inputname={"Add banner image"} />
                <br />
                <TextInputBox inputname={"Title"} isAdded={false} onChange={titleHandler} />
                <br />
                <TextInputBox inputname={"Summary"} height={'100px'} isAdded={false} onChange={summaryHandler} />
                <br />
                {inputList.map((input, index) => {
                    return (
                        input.type === "text" ?
                            <>
                                <TextInputBox key={input.id} id={input.id} inputname={`Content cell ${index + 1}`} isAdded={true} onChange={inputChangeHandler} onDelete={deleteInputHandler} />
                                <br />
                            </> :
                            <>
                                <ImageInputBox key={input.id} id={input.id} height={'20vh'} inputname={`Add image ${index + 1}`} isAdded={true} onChange={inputChangeHandler} onDelete={deleteInputHandler} />
                                <br />
                            </>
                    )
                })}
                <Link to={"/create"} className='btn btn-primary' type='submit' style={{ marginBottom: '1em' }}>Next</Link>
            </form>
            <button className={'btn btn-primary ' + classes.floatingbutton} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <AddIcon />
            </button>
            <PostModal handler={addInputHandler} />
        </div>
    )
}

export default PostForm
