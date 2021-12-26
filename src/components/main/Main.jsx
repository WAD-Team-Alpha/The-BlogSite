import { useState } from "react";
import Content from "./Content";
import Navigation from "../navigation/Navigation";

function Home() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    nav ? setNav(false) : setNav(true)
  }
  return (
    <>
      {!nav && <Content nav={navHandler} />}
      {nav && <Navigation nav={navHandler} />}
    </>
  );
}

export default Home;
