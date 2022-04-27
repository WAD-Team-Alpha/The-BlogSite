import { motion } from "framer-motion";
import React,{useState, useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import PostCard from "../home/cards/PostCard";
import axios from "axios";
import LoadingSpinner from "../auth/LoadingSpinner";
import QuestionCard from "../home/cards/QuestionCard";
const Results = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const location = useLocation(); 
    console.log(location?.state);
    const mainVarient = {
        hidden: {
            opacity: 0,
            x: "100vw",
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut",
            },
        },
    };
    useEffect(() => {
        async function fetchData() {
            const data1 = await axios.post(
                `http://localhost:5000/api/v1/search`,{
                    query : location.state.query
                }
            );
            console.log(data1);
            setData(data1.data)
            return data1
        }
        fetchData().then((response) => {
            console.log(response.data)
            setLoading(false)
        });
    }, []);

    // Results pave which renders all the search results
    return (
       loading ? <LoadingSpinner /> : <motion.div
       variants={mainVarient}
       initial="hidden"
       animate="visible"
       exit="exit"
   >
        
        {data.posts.map((post)=> {
        const publishedDate = new Date(post.published_date[0]);
        const date = publishedDate.getUTCDate();
        const month = publishedDate.getUTCMonth() + 1;
        const year = publishedDate.getUTCFullYear();
        return <PostCard
                        key={post._id[0]}
                        id={post._id[0]}
                        banner={post.banner[0]}
                        title={post.title[0]}
                        summary={post.summary[0]}
                        likes={5}
                        publishedDate={`${date}/${month}/${year}`}
                        userId={post.userId[0]}
                        comments={5}
                        author={post.author[0]}
                    />
        })};

        {data.questions.map((question)=> {
           const publishedDate = new Date(question.published_date[0]);
           const date = publishedDate.getUTCDate();
           const month = publishedDate.getUTCMonth() + 1;
           const year = publishedDate.getUTCFullYear();
           
           return <QuestionCard
                key = {question._id[0]}
                id = {question._id[0]}
                votes = {5}
                answers = {5}
                title = {question.title[0]}
                summary = {question.summary[0]}
                author = {question.author[0]}
                userId = {question.userId[0]}
                publishedDate = {`${date}/${month}/${year}`}
            
            
            />
        })}
   </motion.div>
    );
};

export default Results;
