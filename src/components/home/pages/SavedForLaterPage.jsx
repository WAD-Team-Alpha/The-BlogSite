import React from 'react'
import PostCard from '../cards/PostCard'
import QuestionCard from '../cards/QuestionCard'
import savedForLaterData from '../../../helpers/savedForLaterData.json'

const SavedForLaterPage = () => {
    return (
        <>
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
        </>
    );
}
export default SavedForLaterPage;