import React from 'react'
import PostCard from '../cards/PostCard';
import QuestionCard from '../cards/QuestionCard';
import recentActivityData from '../../../helpers/recentActivityData.json'

const RecentActivityPage = () => {
    return (
        <>
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
        </>
    );
}
export default RecentActivityPage;