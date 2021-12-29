import React from 'react'
import classes from './question.module.css' 
const Question = () => {
    return (

        <div class="card mb-6" >
        <div class="row g-0">
            <div className="col-md-2 mt-6">
                <div className={`${classes.votes}`}>
                    <p className="fw-bold fs-1  ">999</p>
                    <p className={`${classes.vote}`}>Votes</p>
                </div>
                <div className={`${classes.answer}`}>
                    <p className="fw-bold fs-1 ml-6 ">999</p>
                    <p className={`${classes.vote}`}>Answers</p>
                </div>
       
       
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title fw-bold fs-4">Q: What is the question about ? it should be written here ?</h5>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       
                    <ul className={`${classes.question}`}>
       
                        <li style={{ marginRight: "10px" }}><img src="https://img.icons8.com/material-outlined/24/000000/visible--v2.png" /><a href='#'>Veiw post</a></li>
                        <li><a className={`fw-bold ${classes.post}`}>Posted by <a href="#" style={{ color: "#05386b" }} >Surya</a> on 27/12/2021</a></li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Question;























 