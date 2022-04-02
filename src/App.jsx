/* eslint-disable react-hooks/exhaustive-deps */
import Routing from "./Routing";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;
