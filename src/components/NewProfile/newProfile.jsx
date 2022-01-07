import Profile from "./Profile.jsx";
import ProfileMiddle from "./ProfileMiddle.jsx";
import ProfileAnalytics from "./ProfileAnalytics.jsx";
import classes from "./newprofile.module.css"
import { useParams } from "react-router-dom";



const NewProfile=()=> {
  
  return (
       
        <div className="container-fluid">
       <div className="row" > 
    
      <div className="col-3"><Profile/></div>
      
      <div class="col-9"><ProfileMiddle/></div>
    </div>
    </div>
    

  );
}

export default NewProfile;
