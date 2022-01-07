import { motion } from 'framer-motion';
import React from 'react'
import questionData from '../../../helpers/questionData.json'
import QuestionCard from '../cards/QuestionCard';
import { useState } from 'react';
import { useEffect } from 'react';

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
     const [data, setTitle] = useState("");
    
     useEffect(() => {
     const fetchData = async()=>{
     const res = await fetch('https://fsd-project-e2e42-default-rtdb.firebaseio.com/questions.json');
     const data = await res.json();
     setTitle(data);
     }
     fetchData()

     }, [])

     var result = [];

     for(var i in data)
     result.push( data [i]);

     console.log(result);


     return (
          <motion.div
               variants={mainVarient}
               initial='hidden'
               animate='visible'
               exit='exit'
          >
               {result.map((query) => <QuestionCard
                    key={query.questionId}
                    id={query.questionId}
                    // votes={query.votes}
                    answers={query.answers}
                    question={query.question}
                    details={query.details}
                    userId = {query.userId}
                    publishedDate={query.publishedDate}
               />)}
          </motion.div>
     );
}
export default QuestionPage;