import React from 'react'
import PostCard from '../cards/PostCard'
import QuestionCard from '../cards/QuestionCard'
import savedForLaterData from '../../../helpers/savedForLaterData.json'
import { motion } from 'framer-motion'

const SavedForLaterPage = () => {
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
            {savedForLaterData.map((saved) => saved.type === "post" ?
                <PostCard
                    key={saved}
                    banner={saved.banner}
                    title={saved.title}
                    description={saved.description}
                    likes={saved.likes}
                    comments={saved.comments}
                    author={saved.author}
                    publishedDate={saved.publishedDate}
                /> :
                <QuestionCard
                    key={saved}
                    votes={saved.votes}
                    answers={saved.answers}
                    question={saved.question}
                    details={saved.details}
                    author={saved.author}
                    publishedDate={saved.publishedDate}
                />
            )}
        </motion.div>
    );
}
export default SavedForLaterPage;