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
                                <b>Status</b>  {data.status}
                            </div>
                        </div>
                        {/* <div class="col-3">
                            <div className={classes.subhead}>
                                <b>Views</b>  {questiondata.likes}
                            </div>
                        </div> */}
                        <div class="col-3">
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
                   <Middle details={data.details} image={data.image}/>
                </div>
            </div>
            <hr/>
            <div class="row" >
                <div class="col" >
                   <Last/>
                  
                </div>
            </div>
        </div>
    )
}

export default Middleq