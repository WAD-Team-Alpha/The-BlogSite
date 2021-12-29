import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/main/Main'
import ProfileLayout from './layouts/ProfileLayout';
import Profile from './components/NewProfile/newProfile';
import Home from './components/home/home';
import HomeLayout from './layouts/HomeLayout';
import Authentication from './components/auth/Authentication';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/auth' element={<Authentication />} />
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
