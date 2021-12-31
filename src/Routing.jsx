import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/main/Main'
import Postdetails from './components/post_details/leftp/PostDetail';
import QuesDetail from './components/Ques_details/QuesDetail'
import ProfileLayout from './layouts/ProfileLayout';
import Profile from './components/NewProfile/newProfile';
import Home from './components/home/home';
import HomeLayout from './layouts/HomeLayout';
import Authentication from './components/auth/Authentication';
import Editform from './components/NewProfile/EditForm/Editform';


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/auth' element={<Authentication />} />
                <Route path="/post-detail" element={<Postdetails/>} />
                <Route path="/ques-detail" element={<QuesDetail/>} />
              
                

                <Route element={<ProfileLayout />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<HomeLayout />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing
