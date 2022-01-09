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
    let votelen = props.votes.length;
    let numberofvote;
    let ans = props.answers;
    let numberofanswer
    if (votelen > 0) {
        numberofvote = props.votes
    }
    else {
        numberofvote = 0
    }
    if (ans > 0) {
        numberofanswer = ans
    }
    else {
        numberofanswer = 0
    }
    const str = props.details;
    const len = str.length;

    let dec;
    let result = str.substring(0, 270);
    if (len < 270) {
        dec = <p className="card-text">{props.details}</p>
    }
    else {
        dec = <p className="card-text">{result}....</p>
    }
    return (
        <div className={`card  mb-3 mt-3 ${classes.shadow}`} >
            <div class="row g-0">
                <div className="col-md-2 mt-6">

                    <div className={`row ${classes.votes}`}>

                        <p className="fw-bold fs-1  ">{numberofvote}</p>

                        <p className={`${classes.vote}`}>Votes</p>
                    </div>

                    <div className={`row ${classes.answer}`}>
                        <p className="fw-bold fs-1 ml-6 ">{numberofanswer}</p>

                        <p className={`${classes.answerpostion}`}>Answers</p>
                    </div>


                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title fw-bold fs-4">{props.question}</h5>
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























