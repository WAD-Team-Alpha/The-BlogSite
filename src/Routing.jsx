import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './components/main/Main'
import Layout from './Layout';
import NewProfile from './components/NewProfile/newProfile';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route element={<Layout />}/>
                   <Route path="/profile" element={<NewProfile/>}/> 

                    {/* All the child routes should go in here */}
                
            </Routes>
        </Router>
    )
}

export default Routing
