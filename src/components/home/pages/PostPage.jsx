import React from 'react'
import PostCard from '../cards/PostCard'
import postData from '../../../helpers/postData.json'

const PostPage = () => {
     return <>
          {postData.map((post) => <PostCard
               key={post}
               banner={post.banner}
               title={post.title}
               description={post.description}
               likes={post.likes}
               comments={post.comments}
               author={post.author}
               publishedDate={post.publishedDate}
          />)}
     </>
}
export default PostPage;