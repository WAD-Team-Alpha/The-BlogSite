import React, { useState } from 'react'
import Header from '../components/header/Header'
import classes from './Layout.module.css'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'
import Leftq from '../components/Ques_details/leftq/leftq'
import Rightq from '../components/Ques_details/rightq/rightq'
import Middleq from '../components/Ques_details/middleq/middleq'
import { useParams } from 'react-router-dom'

const QuestionLayout = () => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    const params = useParams()
    return (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <>
                <div className={"container-fluid " + classes.content}>
                    <div className="row">
                        <div className={"col-md-2 " + classes.leftpane}>
                            <Leftq questionID={params.threadID}/>
                        </div>
                        <div className={"col-md-7 " + classes.middlepane}>
                            <Middleq questionID={params.threadID}/>
                        </div>
                        <div className={"col-md-3 " + classes.rightpane}>
                            <Rightq questionID={params.threadID}/>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </>}
        </>
    )
}

export default QuestionLayout
