import { Box } from "@mui/material";
import { useState } from "react";
import classes from "./form.module.css";
import InputTag from './InputTag'
import CloseIcon from '@mui/icons-material/Close';


const Editform = (props) => {
 
  const [firstName, setFirstName] = useState(props.userDetails.firstName);
  const [lastName, setLastName] = useState(props.userDetails.lastName);
  const [email, setEmail] = useState(props.userDetails.email);
  const [bio, setBio] = useState(props.userDetails.bio);
  const [genre, setGenre] = useState(props.userDetails.genres)

  const formsubmitHandler=(e)=>{
       e.preventDefault();
       props.setAddform((state)=> !state);
       props.editHandler(
        firstName,
        lastName,
        email,
        bio,
        genre
      );
  }

  const closeForm=()=>{
    props.setAddform((state)=> !state);
  }
    
 
  return (
    <div>
         
      <Box
        sx={{
          height: "545px",
          backgroundColor: "white",
          width: "330px",
          paddingTop: "0.3em",
          marginLeft: "0.7em",
          borderRadius:"0.3em"
        }}
      >
        
        <form  onSubmit={formsubmitHandler}>
            <div className={classes.formmain}>
              <button class="btn shadow-none" onClick={closeForm} style={{marginLeft:"16em"}}>
              <CloseIcon/>
              </button>
              <div style={{marginBottom:"1em"}}>
            <span style={{fontSize:"24px"}}><b>Enter your details</b></span>
            </div>
            <div class="form-group-row">
              <div class="col-11">
                <label for="userfname">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="userfname"
                  placeholder="Enter your first name"
                  defaultValue={props.userDetails.firstname}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  defaultValue={props.userDetails.lastname}
                  onChange={(e) => setLastName(e.target.value)}
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
                  defaultValue={props.userDetails.email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
              </div>
            </div>
            <br />
          
            <div class="form-group-row">
              <div class="col-11">
              <InputTag genre={props.userDetails.genres} setGenre={setGenre}/>
              </div>
            </div>
           
            <br />
            <div class="form-group-row">
              <div class="col-11">
                <label for="userbio">Enter bio</label>
                <textarea class="form-control" id="userbio" rows="3" defaultValue={props.userDetails.bio} onChange={(e)=> setBio(e.target.value)}></textarea>
              </div>
            </div>
            <br />
           
            <button className={classes.customupdatebtn}><span className={classes.update}>Update</span></button>
           
            
            
            </div>
        </form>
        
      </Box>
      
    
    </div>
  );
};

export default Editform;
