import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import Followers from "./Followers";
import Following from "./Following";

const Memberstab = (props) => {
    const [tab, setTab] = useState("followers");

    return (
        <Tabs
            id="memberstab"
            activeKey={tab}
            onSelect={(k) => setTab(k)}
            className="mb-3"
        >
            <Tab eventKey="followers" title="Followers">
                <div style={{ overflowY: "scroll", height: "420px" }}>
                    <Followers
                        followersCount={props.followersCount}
                        setFollowersCount={props.setFollowersCount}
                        setUserData={props.setUserData}
                        curUser={props.curUser}
                        userInfo={props.userInfo}
                    />
                </div>
            </Tab>
            <Tab eventKey="following" title="Following">
                <div style={{ overflowY: "scroll", height: "420px" }}>
                    <Following
                        followingCount={props.followingCount}
                        setFollowingCount={props.setFollowingCount}
                        curUser={props.curUser}
                        userInfo={props.userInfo}
                        setUserData={props.setUserData}
                    />
                </div>
            </Tab>
        </Tabs>
    );
};

export default Memberstab;
