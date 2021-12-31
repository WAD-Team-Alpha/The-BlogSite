import { Box } from "@mui/material";
import { useState } from "react";
import classes from "./form.module.css";
import InputTag from './InputTag'




const Editform = (props) => {
 

 

  
    const formsubmitHandler=(e)=>{
       e.preventDefault();
       props.setAddform((state)=> !state);

    }
    
 
  return (
    <div>
         
      <Box
        sx={{
          height: "540px",
          backgroundColor: "white",
          width: "330px",
          paddingTop: "1em",
          marginLeft: "1em",
        }}
      >
        
        <form  onSubmit={formsubmitHandler}>
            <div className={classes.formmain}>
            <span><h5>Enter your details</h5></span>
            <div class="form-group-row">
              <div class="col-11">
                <label for="userfname">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="userfname"
                  placeholder="Enter your first name"
                  value={props.firstname}
                  onChange={(e) => props.setFirstname(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div class="form-group-row">
              <div class="col-11">
                <label for="userlname">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="userlname"
                  placeholder="Enter your Last name"
                  value={props.lastname}
                  onChange={(e) => props.setLastname(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div class="form-group-row">
              <div class="col-11">
                <label for="useremail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="useremail"
                  placeholder="Enter your email"
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
              </div>
            </div>
            <br />
          
            <div class="form-group-row">
              <div class="col-11">
              <InputTag genre={props.genre} setGenre={props.setGenre}/>
              </div>
            </div>
           
            <br />
            <div class="form-group-row">
              <div class="col-11">
                <label for="userbio">Enter bio</label>
                <textarea class="form-control" id="userbio" rows="3" value={props.bio} onChange={(e)=> props.setBio(e.target.value)}></textarea>
              </div>
            </div>
            <br />
           
            <button class="btn btn-success" style={{backgroundColor:"#8ee4af"}} ><span className={classes.update}>Update</span></button>
           
            
            
            </div>
        </form>
        
      </Box>
      
    
    </div>
  );
};

export default Editform;
