import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import classes from './QuestionCard.module.css'
import { useDispatch } from 'react-redux';
import { fetchQuestionData } from '../../../store/question-actions';
import { useNavigate } from 'react-router-dom';
import { fetchOtherProfileData } from '../../../store/profile-actions';
const QuestionCard = (props) => {
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();
    const getDataHandler = (event) => {
        event.preventDefault();
        navigate(`/forum-threads/${props.id}`);
    }
    
    const [userName, setUserName] = useState("")
    useEffect(() => {
        dispatch(fetchOtherProfileData(props.userId)).then((result)=>{
           
            setUserName(result.firstName)
        })
        }, [])
       

       
        



        const str=props.details;
        const len=str.length;
        
        let dec;
        let result = str.substring(0,270);
        if( len<270){ 
        dec= <p className="card-text">{props.details}</p>}
        else{
          dec=<p className="card-text">{result}....</p>  
        }
    return (
        <div className={`card  mb-3 mt-3 ${classes.shadow}`} >
            <div class="row g-0">
                <div className="col-md-2 mt-6">
                   
                    <div className={`row ${classes.votes}`}>

                        <p className="fw-bold fs-1  ">{props.votes}</p>
                        
                        <p className={`${classes.vote}`}>Votes</p>
                    </div>
                    
                    <div className={`row ${classes.answer}`}>
                        <p className="fw-bold fs-1 ml-6 ">{props.answers}</p>
                       
                        <p className={`${classes.answerpostion}`}>Answers</p>
                    </div>


                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title fw-bold fs-4">{props.question}</h5>
                        <p class="card-text">{dec}</p>

                        <ul className={`${classes.question}`}>
                            <li style={{ marginRight: "10px" }}><img src="https://img.icons8.com/material-outlined/24/000000/visible--v2.png" alt='o' /><Link onClick={getDataHandler} to={`/forum-threads/${props.id}`}>View post</Link></li>
                            <li><a className={`fw-bold ${classes.post}`} href='w'>Posted by <a href="w" style={{ color: "#05386b" }} >{userName}</a> on {props.publishedDate}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;























