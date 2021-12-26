import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './components/main/Main'
import Layout from './Layout';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route element={<Layout />}>
                    {/* All the child routes should go in here */}
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing
