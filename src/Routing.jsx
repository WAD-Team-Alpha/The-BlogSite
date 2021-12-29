import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './components/main/Main'
import Postdetails from './components/post_details/leftp/PostDetail';
import QuesDetail from './components/Ques_details/QuesDetail'
import Layout from './Layout';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route element={<Layout />}>
                    {/* All the child routes should go in here */}
                    <Route path="/post-details" element={<Postdetails />} />
                    <Route path="/ques-details" element={<QuesDetail />} />

                </Route>

            </Routes>
        </Router>
    )
}

export default Routing
