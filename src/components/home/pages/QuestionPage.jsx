import React from 'react'
import questionData from '../../../helpers/questionData.json'
import QuestionCard from '../cards/QuestionCard';

const QuestionPage = () => {
     return (
          <>
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
          </>
     );
}
export default QuestionPage;