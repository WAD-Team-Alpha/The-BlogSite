import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Main from './components/main/Main'
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
import PageNotFound from './layouts/PageNotFound';
import { AnimatePresence } from 'framer-motion';


const Routing = () => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<Main />} />

                <Route path='/auth' element={<Authentication />} />

                <Route path="/home/*" element={<HomeLayout />}>
                    <Route path="post" element={<PostPage />} />
                    <Route path="question" element={<QuestionPage />} />
                    <Route path="recents" element={<RecentActivityPage />} />
                    <Route path="saved" element={<SavedForLaterPage />} />
                </Route>

                <Route path="/forms/*" element={<FormLayout />}>
                    <Route path="post" element={<PostForm />} />
                    <Route path="question" element={<QuestionForm />} />
                </Route>

                <Route path="/posts/:postID" element={<PostLayout />} />

                <Route path="/forum-threads/:threadID" element={<QuestionLayout />} />

                <Route element={<ProfileLayout />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Routing
