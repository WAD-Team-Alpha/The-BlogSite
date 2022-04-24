import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
function App() {
    if (localStorage.getItem("token") === null) {
        localStorage.setItem("authStatus", false);
    }
    localStorage.setItem("filter", "1");
    localStorage.setItem("sort", "1");
    return (
        <div className="App">
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;
