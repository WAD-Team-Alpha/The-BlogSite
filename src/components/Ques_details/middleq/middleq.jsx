import * as React from 'react'
//import { Avatar, Hidden } from '@mui/material'
import classes from './middleq.module.css'
import Middle from './Middle'
import Last from './Last'
import questionData from '../../../helpers/questionData.json'
import { useSelector } from 'react-redux'

const Middleq = (props) => {
    const data = questionData.find((query) => query.id === parseInt(props.questionID))
    console.log(data)
    const userData = props.profileData
    console.log(userData)
    const questiondata = useSelector((state)=> state.question)
    return (
        <div class="container-fluid" >
            <div class="row" style={{height:"150px"}}>
                <div class="col">
                   <div className={classes.middleheader}>
                   <h3><b>{questiondata.question}</b></h3>
                   </div>
                   <div class="row" style={{paddingTop:"0.5em"}}>
                        <div class="col-3">
                            <div className={classes.subhead}>
                               <b>Asked</b>  {questiondata.publishedDate}
                            </div>
                        </div>
                        <div class="col-3">
                            <div className={classes.subhead}>
                                <b>Status</b>  {questiondata.status}
                            </div>
                        </div>
                        {/* <div class="col-3">
                            <div className={classes.subhead}>
                                <b>Views</b>  {questiondata.likes}
                            </div>
                        </div> */}
                        <div class="col-6">
                            <div style={{textAlign:"right"}}>
                                <button class="btn btn-primary" className={classes.button1}><div>Close thread</div></button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <hr/>
            <div class="row" style={{ height:"360px"}}>
                <div class="col">
                   <Middle/>
                </div>
            </div>
            <hr/>
            <div class="row" >
                <div class="col" >
                   <Last profileData={props.profileData}/>
                        
                </div>
            </div>
        </div>
    )
}

export default Middleq