import React, { useEffect, useState } from 'react'
import PostCard from '../cards/PostCard';
import QuestionCard from '../cards/QuestionCard';
import recentActivityData from '../../../helpers/recentActivityData.json'
import { motion } from 'framer-motion';
import Carousel from '../../navigation/trending/carousel/Carousel'
import recommendedData from '../../../helpers/recommendedData.json'
import { useDispatch, useSelector } from 'react-redux';
import { updateRecentActivity } from '../../../store/profile-actions';
import { fetchActivity } from '../../../store/activity-actions';
import { CircularProgress } from '@mui/material';

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
    const [status, setStatus] = useState(false)
    const [recents, setRecents] = useState([])
    useEffect(() => {
        dispatch(updateRecentActivity(profileData, authData.localId))
        setStatus(true)
        fetchActivity(profileData.recentActivity).then((result) => {
            setRecents(result)
            setStatus(false)
        })
    }, [])

    return (
        status ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <CircularProgress sx={{ color: '#5cdb95' }} />
        </div>
            : <motion.div
                variants={mainVarient}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                {recents.map((recent, index) => {
                    return (
                        recent.type === "post" ? index === 4 ? <Carousel className={"recommendCard"} data={recommendedData} theme={"bg-dark"} slidesToShow={4} /> :
                            <PostCard
                                key={index}
                                banner={recent.data.imageUrl}
                                title={recent.data.postTitle}
                                description={recent.data.postSummary}
                                likes={recent.data.likes}
                                author={"Surya"}
                                publishedDate={recent.data.publishedDate}
                            /> : index === 4 ? <Carousel className={"recommendCard"} data={recommendedData} theme={"bg-dark"} slidesToShow={4} /> :
                            <QuestionCard
                                key={recent.data.questionId}
                                id={recent.data.questionId}
                                answers={recent.data.answers}
                                question={recent.data.question}
                                details={recent.data.details}
                                userId={recent.data.userId}
                                publishedDate={recent.data.publishedDate}
                            />
                    )
                }
                )}
            </motion.div>
    );
}
export default RecentActivityPage;