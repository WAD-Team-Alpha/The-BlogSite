import React from 'react'
import PostCard from '../cards/PostCard';
import QuestionCard from '../cards/QuestionCard';
import recentActivityData from '../../../helpers/recentActivityData.json'
import { motion } from 'framer-motion';

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

    return (
        <motion.div
            variants={mainVarient}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {recentActivityData.map((recent) => recent.type === "post" ?
                <PostCard
                    key={recent}
                    banner={recent.banner}
                    title={recent.title}
                    description={recent.description}
                    likes={recent.likes}
                    comments={recent.comments}
                    author={recent.author}
                    publishedDate={recent.publishedDate}
                /> :
                <QuestionCard
                    key={recent}
                    votes={recent.votes}
                    answers={recent.answers}
                    question={recent.question}
                    details={recent.details}
                    author={recent.author}
                    publishedDate={recent.publishedDate}
                />
            )}
        </motion.div>
    );
}
export default RecentActivityPage;