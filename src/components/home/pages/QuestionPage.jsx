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
     const res = await fetch('https://blogsite-dc4f2-default-rtdb.firebaseio.com/questions.json');
     const data = await res.json();
     setTitle(data);
     }
     fetchData()

     }, [])

     var result = [];

     for(var i in data)
     result.push( data [i]);

     console.log(result);
     
     let status=result.length;
   
     return ( !status ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
           <h1> NO Question data</h1>
        </div>
    
     
          :<motion.div
               variants={mainVarient}
               initial='hidden'
               animate='visible'
               exit='exit'
          >
               {result.map((query) => <QuestionCard
                    key={query.questionId}
                    id={query.questionId}
                    votes={query.likes}
                    answers={query.answers}
                    question={query.question}
                    details={query.description}
                    userId = {query.userId}
                    publishedDate={query.publishedDate}
               />)}
          </motion.div>
     );
}
export default QuestionPage;