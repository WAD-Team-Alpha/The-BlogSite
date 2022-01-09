import React from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {
    const admin = useSelector(state => state.admin)
    console.log(admin.posts, "These are the users from the backend")
    return (
        <>
            {admin.posts.map((data, index) => {
                return <>
                    <h1>{data.postTitle}</h1>
                    <br />
                    <h2>{data.author}</h2>
                    <br />
                    <p>Published on {data.publishedDate}</p>
                    <br />
                    <p>{data.postSummary}</p>
                    <br />
                    <img src={data.imageUrl} alt="banner" />
                    <br />
                    <p>Likes: {data.likes}</p>
                    {/* <br /> */}
                    {/* <p>comments: {data.comments}</p> */}
                    <br />
                    <p>User ID: {data.uid}</p>
                    <br />
                    <p>Genre: {data.genre}</p>
                </>
            })}
        </>
    )
}

export default Posts
