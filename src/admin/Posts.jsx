import React from 'react'
import PostCard from './PostCard'

const Posts = () => {
    return (
        <div className="container">
            <h1>Posts</h1>
            <div className="row">
                    <div className="col-md-3" key={1}>
                        <PostCard
                            id={"5"}
                            title={"This is title"}
                            summary={"This is summary"}
                            genre={"This is genre"}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Posts
