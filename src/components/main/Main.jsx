import { useState } from "react";
import Content from "./Content";
import Navigation from "../navigation/Navigation";
import { motion } from 'framer-motion'

function Home() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    nav ? setNav(false) : setNav(true)
  }

  const mainVarient = {
    visible: {
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      },
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      },
    }
  }

  return (
    <motion.div
      variants={mainVarient}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {!nav && <Content nav={navHandler} />}
      {nav && <Navigation nav={navHandler} />}
    </motion.div>
  );
}

export default Home;
