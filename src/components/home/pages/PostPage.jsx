import React, { useState } from 'react'
import PostCard from '../cards/PostCard'
import postData from '../../../helpers/postData.json'
import { motion } from 'framer-motion'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
     const [limit, setLimit] = useState(0)

     const pageinationHandler = (e, value) => {
          console.log(value)
          setLimit((value - 1) * 10)
          window.scroll(0, 0)
     }

     return <motion.div
          variants={mainVarient}
          initial='hidden'
          animate='visible'
          exit='exit'
     >
          {postData.slice(limit, limit + 10).map((post) => <PostCard
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
          <Stack spacing={2}>
               <Pagination
                    sx={{ margin: '1em auto', backgroundColor: '#5cdb95', padding: '0.5em', color: 'white', borderRadius: '0.5em' }}
                    count={Math.ceil(postData.length / 10)}
                    variant="outlined"
                    shape="rounded"
                    onChange={pageinationHandler}
               />
          </Stack>
     </motion.div>
}
export default PostPage;