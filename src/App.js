import { useState } from "react";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    nav ? setNav(false) : setNav(true)
  }
  return (
    <div className="App">
      {!nav && <Home nav={navHandler} />}
      {nav && <Navigation nav={navHandler} />}
    </div>
  );
}

export default App;
