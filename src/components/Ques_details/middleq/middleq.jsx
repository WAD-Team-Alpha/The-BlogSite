import * as React from 'react'
//import { Avatar, Hidden } from '@mui/material'
import classes from './middleq.module.css'
import Middle from './Middle'
import Last from './Last'

const Middleq = (props) => {

    return (
        <div class="container-fluid" style={{borderLeft:"2px solid #5cdb95", borderRight:"2px solid #5cdb95"}}>
            <div class="row" style={{height:"150px"}}>
                <div class="col">
                   <div className={classes.middleheader}>
                   <h3><b>Here we place our title very neatly and with bold and big sized font. Title is the key for any post in our website ?</b></h3>
                   </div>
                   <div class="row" style={{paddingTop:"0.5em"}}>
                        <div class="col-3">
                            Asked 10/08/2021
                        </div>
                        <div class="col-3">
                            Status Active
                        </div>
                        <div class="col-3">
                            Views 999
                        </div>
                        <div class="col-3">
                            <button class="btn btn-primary">Close thread</button>
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
                   <Last/>
                  
                </div>
            </div>
        </div>
    )
}

export default Middleq