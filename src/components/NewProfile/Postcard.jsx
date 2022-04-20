import classes from "./postcard.module.css";
import PostCard from "../home/cards/PostCard";

const Postcard = (props) => {
    console.log(props.postsData);
    // console.log(props.postsData.published_date);
    if (undefined === null) {
        return (
            <div style={{ paddingLeft: "16em", paddingTop: "3em" }}>
                <b>Create your own post</b>
            </div>
        );
    } else {
        return (
            <div>
                <div className={classes.cardcontainer}>
                    <div className={classes.postscreate}></div>
                    <div className={classes.postcards}>
                        {props.postsData.map((post)=>
                        {
                            const publishedDate = new Date(post.published_date)
                            const date = publishedDate.getUTCDate()
                            const month = publishedDate.getUTCMonth() + 1
                            const year = publishedDate.getUTCFullYear()
                        

                        return(
                            <PostCard //if we are the user and sending the current post details using props
                            key={post._id}
                            id={post._id} //id of the post
                            banner={post.banner} //banner of the post
                            title={post.title} //posts title
                            summary={post.summary} //posts description
                            likes={post.likes.length} //posts likes
                            publishedDate={`${date}/${month}/${year}`} //posts published date
                            userId={post.userId} //user id of the particular post
                            author={post.author} //author of the post
                            comments={post.comments.length} //
                        />
                        )
                        
                         })}
                       
                    </div>
                </div>
            </div>
        );
    }
};

export default Postcard;
