import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Postcard from "./Postcard";
import Questionscard from "./Questionscard";


const ProfileTabs = () => {
  const [tab, setTab] = useState("posts");

  return (
   
    <div className={classes.container}>
      <div className={classes.profileTabs}>
    
        <Tabs className={classes.navtabs }
          id="profiletab"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
          
         
        >
       
            
          <Tab eventKey="posts" title="Posts" >
            <Postcard/>
          </Tab>
          <Tab eventKey="questions" title="Questions">
            <Questionscard/>
          </Tab>
          
        </Tabs>
      
        </div>
      </div>
      
   
  );
};

export default ProfileTabs;
