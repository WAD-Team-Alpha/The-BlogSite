import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'

const Posts = () => {
    const admin = useSelector(state => state.admin)
    console.log(admin.posts, "These are the users from the backend")
    return (
        <div className="container">
            <h1>Posts</h1>
            <div className="row">
                {admin.posts.map((item, index) => {
                    return <div className="col-md-3" key={index}>
                        <PostCard
                            id={item.postId}
                            title={item.postTitle}
                            summary={item.postSummary}
                            genre={item.genre}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Posts
