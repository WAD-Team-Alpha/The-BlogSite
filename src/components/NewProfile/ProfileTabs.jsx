import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Postcard from "./Postcard";
import Questionscard from "./Questionscard";
import { useSelector } from "react-redux";


const ProfileTabs = () => {
  const [tab, setTab] = useState("posts");
 

  return (

    <div className={classes.container}>
      <div className={classes.profileTabs}>
        <Tabs
          id="profiletab"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
          style={{borderColor: '#b1b1b1'}}
          
        >
          <Tab eventKey="posts" title="Posts" >
            <Postcard />
          </Tab>
          <Tab eventKey="questions" title="Questions" style={{borderColor: '#b1b1b1'}}>
            <Questionscard />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileTabs;
