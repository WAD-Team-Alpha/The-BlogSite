import Routing from "./Routing";
import { BrowserRouter, HashRouter } from "react-router-dom";
function App() {
    if (localStorage.getItem("token") === null) {
        localStorage.setItem("authStatus", false);
    }
    return (
        <div className="App">
            <HashRouter>
                <Routing />
            </HashRouter>
        </div>
    );
}

export default App;