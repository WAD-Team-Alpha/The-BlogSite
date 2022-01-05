import React, { useState } from 'react'
import Header from '../components/header/Header'
import classes from './Layout.module.css'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'
import Leftq from '../components/Ques_details/leftq/leftq'
import Rightq from '../components/Ques_details/rightq/rightq'
import Middleq from '../components/Ques_details/middleq/middleq'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const QuestionLayout = () => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    const params = useParams()
    const mainVarient = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            },
        },
        exit: {
            x: '100vw',
            transition: {
                ease: 'easeInOut'
            },
        }
    }
    return (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <motion.div variants={mainVarient} initial='hidden' animate='visible' exit='exit'>
                <div className={"container-fluid " + classes.content}>
                    <div className="row">
                        <div className={"col-md-2 shadow-lg " + classes.leftpane}>
                            <Leftq questionID={params.threadID}/>
                        </div>
                        <div className={"col-md-7 shadow-lg " + classes.middlepane}>
                            <Middleq questionID={params.threadID}/>
                        </div>
                        <div className={"col-md-3 shadow-lg " + classes.rightpane}>
                            <Rightq questionID={params.threadID}/>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </motion.div>}
        </>
    )
}

export default QuestionLayout
