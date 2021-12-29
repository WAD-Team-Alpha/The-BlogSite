import Profile from "./Profile.jsx";
import ProfileMiddle from "./ProfileMiddle.jsx";
import ProfileAnalytics from "./ProfileAnalytics.jsx";
import classes from "./newprofile.module.css"



const NewProfile=()=> {
  
  return (
       
        <div className="container-fluid">
       <div className="row" > 
    
      <div className="col-3" style={{width:"26%"}}><Profile/></div>
      
      <div class="col-6"  ><ProfileMiddle/></div>
      <div className="col-2"><ProfileAnalytics/></div>
    </div>
    </div>
    

  );
}

export default NewProfile;
