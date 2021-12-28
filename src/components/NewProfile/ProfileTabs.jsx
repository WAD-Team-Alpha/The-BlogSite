import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";


const ProfileTabs = () => {
  const [tab, setTab] = useState("posts");

  return (
    <div className={classes.container}>
      <div className={classes.profileTabs}>
        
        <Tabs 
          id="profiletab"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
          className="mb-3"
         
        >
       
            
          <Tab eventKey="posts" title="Posts"  >
            <div className={classes.postbtndiv}>
              <button className="btn btn-primary">Create Post</button>
            </div>
          </Tab>
          <Tab eventKey="questions" title="Questions">
            <div className={classes.postbtndiv}>
              <button className="btn btn-primary">Add a question</button>
            </div>
          </Tab>
          
        </Tabs>
        </div>
      </div>
   
  );
};

export default ProfileTabs;
