import React from 'react'
import PostCard from '../cards/PostCard'
import postData from '../../../helpers/postData.json'
import { motion } from 'framer-motion'

const PostPage = () => {
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

     return <motion.div
          variants={mainVarient}
          initial='hidden'
          animate='visible'
          exit='exit'
     >
          {postData.map((post) => <PostCard
               key={post.id}
               id={post.id}
               banner={post.banner}
               title={post.title}
               description={post.description}
               likes={post.likes}
               comments={post.comments}
               author={post.author}
               publishedDate={post.publishedDate}
          />)}
     </motion.div>
}
export default PostPage;