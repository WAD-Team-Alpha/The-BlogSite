import React, { useState } from 'react'
import Header from '../components/header/Header'
import classes from './Layout.module.css'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'
// import Rightp from '../components/post_details/leftp/rightp/rightp'
import Rightq from '../components/Ques_details/rightq/rightq'
import Leftp from '../components/post_details/leftp/leftp/leftp'
import Middlep from '../components/post_details/leftp/middlep/middlep'
import { useParams } from 'react-router-dom'

const PostLayout = () => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    const params = useParams();
    return (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <>
                <div className={"container-fluid " + classes.content}>
                    <div className="row">
                        <div className={"col-md-2 " + classes.leftpane}>
                            <Leftp postID={params.postID}/>
                        </div>
                        <div className={"col-md-7 " + classes.middlepane}>
                            <Middlep postID={params.postID}/>
                        </div>
                        <div className={"col-md-3 " + classes.rightpane}>
                            <Rightq postID={params.postID}/>
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

export default PostLayout
