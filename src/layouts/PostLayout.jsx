import React, { useState,useEffect } from 'react'
import Header from '../components/header/Header'
import classes from './Layout.module.css'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'
// import Rightp from '../components/post_details/leftp/rightp/rightp'
import Rightp from '../components/post_details/leftp/rightp/rightp'
import Leftp from '../components/post_details/leftp/leftp/leftp'
import Middlep from '../components/post_details/leftp/middlep/middlep'
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useDispatch } from 'react-redux'
import { fetchPostData } from '../store/post-actions'
import { fetchOtherProfileData } from '../store/profile-actions'
const PostLayout = () => {
    const dispatch = useDispatch();
    const [nav, setNav] = useState(false);
    const [data, setData] = useState({});
    
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    const params = useParams();
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
    
    useEffect(() => {
        dispatch(fetchPostData(params.postID)).then((result) => {
            if (result !== null) {
                dispatch(fetchOtherProfileData(result.uid)).then((data)=>{
                    console.log(data);
                    setData(data)
                });
            }
        });
    }, []);
    return (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <motion.div variants={mainVarient} initial='hidden' animate='visible' exit='exit'>
                <div className={"container-fluid " + classes.content}>
                    <div className="row">
                        <div className={"col-md-2 shadow-lg " + classes.leftpane}>
                            <Leftp postID={params.postID} profileData={data}/>
                        </div>
                        <div className={"col-md-7 shadow-lg " + classes.middlepane}>
                            <Middlep postID={params.postID} profileData={data}/>
                        </div>
                        <div className={"col-md-3 shadow-lg " + classes.rightpane}>
                            <Rightp postID={params.postID} profileData={data}/>
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

export default PostLayout
