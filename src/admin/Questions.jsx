import React from 'react'
import { useSelector } from 'react-redux'

const Questions = () => {
    const admin = useSelector(state => state.admin)
    console.log(admin.questions, "These are the users from the backend")
    return (
        <>
        {admin.questions.map((data, index) => {
                return <>
                    <h1>{data.question}</h1>
                    <br />
                    <h2>Author: {data.author}</h2>
                    <br />
                    <p>Published on {data.publishedDate}</p>
                    <br />
                    <p>{data.description}</p>
                    <br />
                    <img src={data.imageUrl} alt="banner" />
                    <br />
                    <p>Likes: {data.likes}</p>
                    {/* <br /> */}
                    {/* <p>comments: {data.comments}</p> */}
                    <br />
                    <p>User ID: {data.userId}</p>
                    <br />
                    <p>Genre: {data.genre}</p>
                </>
            })}
        </>
    )
}

export default Questions
