import React from 'react'
import PostCard from '../cards/PostCard'
import postData from '../../../helpers/postData.json'
import { useState, useEffect } from "react";
import {fetchData} from "../../../store/home"
const PostPage = () => {
     const [data, setTitle] = useState("");
    
     useEffect(() => {
     const fetchData = async()=>{
     const res = await fetch('https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts.json');
     const data = await res.json();
     setTitle(data);
     }
     fetchData()
    
     }, [])
    
var result = [];

for(var i in data)
    result.push( data [i]);

 console.log(result);
     return <>
          { result.map((post) => <PostCard
                   key={post.id}
                   id={post.id}
                  title={post.postTitle}
                 banner={post.imageUrl}
               // title={post.title}
               description={post.postSummary}
               likes={post.likes}
               // comments={post.comments}
               author="Surya"
               publishedDate={post.publishedDate}
          />)}
     </>
}
export default PostPage;