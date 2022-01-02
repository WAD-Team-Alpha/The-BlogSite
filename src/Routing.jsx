import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/main/Main'
import Postdetails from './components/post_details/leftp/PostDetail';
import QuesDetail from './components/Ques_details/QuesDetail'
import ProfileLayout from './layouts/ProfileLayout';
import Profile from './components/NewProfile/newProfile';
import HomeLayout from './layouts/HomeLayout';
import Authentication from './components/auth/Authentication';
import PostLayout from './layouts/PostLayout'
import QuestionLayout from './layouts/QuestionLayout'
import PostPage from './components/home/pages/PostPage';
import QuestionPage from './components/home/pages/QuestionPage';
import RecentActivityPage from './components/home/pages/RecentActivityPage';
import SavedForLaterPage from './components/home/pages/SavedForLaterPage';
import PostForm from './components/postform/PostForm';
import QuestionForm from './components/postform/QuestionForm';
import FormLayout from './components/postform/FormLayout';


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/auth' element={<Authentication />} />
                <Route path="/post-detail" element={<Postdetails />} />
                <Route path="/ques-detail" element={<QuesDetail />} />

                <Route element={<HomeLayout />}>
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/question" element={<QuestionPage />} />
                    <Route path="/recents" element={<RecentActivityPage />} />
                    <Route path="/saved" element={<SavedForLaterPage />} />
                </Route>

                <Route element={<FormLayout />}>
                    <Route path="/createpost" element={<PostForm />} />
                    <Route path="/createquestion" element={<QuestionForm />} />
                </Route>

                <Route element={<ProfileLayout />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/post-details" element={<PostLayout />}>
                </Route>

                <Route path="/ques-details" element={<QuestionLayout />}>
                </Route>

            </Routes>
        </Router>
    )
}

export default Routing
