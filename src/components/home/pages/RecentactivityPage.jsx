import React, { useEffect } from 'react'
import PostCard from '../cards/PostCard';
import QuestionCard from '../cards/QuestionCard';
import recentActivityData from '../../../helpers/recentActivityData.json'
import { motion } from 'framer-motion';
import Carousel from '../../navigation/trending/carousel/Carousel'
import recommendedData from '../../../helpers/recommendedData.json'
import { useDispatch, useSelector } from 'react-redux';
import { updateRecentActivity } from '../../../store/profile-actions';

const RecentActivityPage = () => {
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
            x: '-100vw',
            transition: {
                ease: 'easeInOut'
            },
        }
    }

    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profile)
    const authData = useSelector(state => state.auth)
    console.log(profileData.recentActivity)
    useEffect(() => {
        dispatch(updateRecentActivity(profileData, authData.localId))
    }, [])

    return (
        <motion.div
            variants={mainVarient}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {recentActivityData.map((recent, index) => {
                return (
                    recent.type === "post" ? index === 4 ? <Carousel className={"recommendCard"} data={recommendedData} theme={"bg-dark"} slidesToShow={4} /> :
                        <PostCard
                            key={index}
                            banner={recent.banner}
                            title={recent.title}
                            description={recent.description}
                            likes={recent.likes}
                            comments={recent.comments}
                            author={recent.author}
                            publishedDate={recent.publishedDate}
                        /> : index === 4 ? <Carousel className={"recommendCard"} data={recommendedData} theme={"bg-dark"} slidesToShow={4} /> :
                        <QuestionCard
                            key={recent}
                            votes={recent.votes}
                            answers={recent.answers}
                            question={recent.question}
                            details={recent.details}
                            author={recent.author}
                            publishedDate={recent.publishedDate}
                        />
                )
            }
            )}
        </motion.div>
    );
}
export default RecentActivityPage;