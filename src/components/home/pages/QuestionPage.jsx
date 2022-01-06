import { motion } from 'framer-motion';
import React from 'react'
import questionData from '../../../helpers/questionData.json'
import QuestionCard from '../cards/QuestionCard';

const QuestionPage = () => {
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
               {questionData.map((query) => <QuestionCard
                    key={query.id}
                    id={query.id}
                    votes={query.votes}
                    answers={query.answers}
                    question={query.question}
                    details={query.details}
                    author={query.author}
                    publishedDate={query.publishedDate}
               />)}
          </motion.div>
     );
}
export default QuestionPage;