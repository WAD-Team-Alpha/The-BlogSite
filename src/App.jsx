import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
function App() {
    if (localStorage.getItem("token") === null) {
        localStorage.setItem("authStatus", false);
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;
