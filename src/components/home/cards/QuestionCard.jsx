import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './QuestionCard.module.css'
import { useDispatch } from 'react-redux';
import { fetchQuestionData } from '../../../store/question-actions';
import { useNavigate } from 'react-router-dom';
import { fetchOtherProfileData } from '../../../store/profile-actions';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
        dispatch(fetchOtherProfileData(props.userId)).then((result) => {

            setUserName(result.firstName)
        })
        }, [])
       

       
        


 // If description length is more than 150 reduse the size of Detail Full lenght show in post detail page
        const str=props.details;
        const len=str.length;
        
        let dec;
        let result = str.substring(0,270); // take substring from Details string
        if( len<270){ 
        dec= <p className="card-text">{props.details}</p>}
        else{
          dec=<p className="card-text">{result}....</p>  
        }

    const titles=props.question.length;
    let resultitle=props.question.substring(0, 50); 
    let shortitle;
    if(titles<50)
    {
        shortitle=props.question
    }
    else{
        shortitle =<h5 class="card-title fw-bold fs-4">{resultitle}...</h5>
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
                        <h5 class="card-title fw-bold fs-4">{shortitle}</h5>
                        <p class="card-text" style={{ height: '5em' }}>{dec}</p>

                        <div className={classes.bottom}>
                            <Link className='btn' style={{ height: '2.5em' }} onClick={getDataHandler} to={`/posts/${props.id}`}> <RemoveRedEyeIcon /> View post</Link>
                            <p className="btn">Asked by <span style={{ color: 'blue', fontWeight: '600' }}>{props.author}</span> on {props.publishedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;























