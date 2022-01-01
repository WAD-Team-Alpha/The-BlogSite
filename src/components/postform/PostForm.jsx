import React, { useState } from 'react'
import classes from './PostForm.module.css'
import AddIcon from '@mui/icons-material/Add';
import PostModal from './PostModal';
import ImageInputBox from './ImageInputBox/ImageInputBox';
import TextInputBox from './TextInputBox/TextInputBox';
import { v4 as uuidv4 } from "uuid";

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
        <div>
            <div className={"container-fluid " + classes.postform}>
                <div className="row " >
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form className={"container " + classes.form} onSubmit={onSubmitHandler}>
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
                            <button className='btn btn-primary' type='submit' style={{ marginBottom: '1em' }}>Publish post</button>
                        </form>
                        <button className={'btn btn-primary ' + classes.floatingbutton} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <AddIcon />
                        </button>
                        <PostModal handler={addInputHandler} />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default PostForm
