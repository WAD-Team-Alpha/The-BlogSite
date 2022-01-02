import React, { useState } from 'react'
import ImageInputBox from './ImageInputBox/ImageInputBox';
import TextInputBox from './TextInputBox/TextInputBox';
import classes from './Form.module.css'

const QuestionForm = () => {
    const [question, setQuestion] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()

    const imageHandler = (value) => {
        setImage(value)
    }

    const questionHandler = (value) => {
        setQuestion(value)
    }

    const descriptionHandler = (value) => {
        setDescription(value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({ question, description, image })
    }

    return (
        <>
            <div className={"container-fluid " + classes.questionform}>
                <div className="row " >
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form className={"container " + classes.form} onSubmit={onSubmitHandler}>
                            <br />
                            <h1><b>Step 1: </b> Open the thread</h1>
                            <br />
                            <TextInputBox inputname={"Question"} isAdded={false} onChange={questionHandler} />
                            <br />
                            <TextInputBox inputname={"Description"} height={'100px'} isAdded={false} onChange={descriptionHandler} />
                            <br />
                            <ImageInputBox height={'30vh'} isAdded={false} onChange={imageHandler} inputname={"Attach image"} />
                            <br />
                            <button className='btn btn-primary' type='submit' style={{ marginBottom: '1em' }}>Publish post</button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default QuestionForm
