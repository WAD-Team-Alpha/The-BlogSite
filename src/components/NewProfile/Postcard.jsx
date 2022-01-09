import classes from "./postcard.module.css";
import {  useSelector } from "react-redux";
import PostCard from "../home/cards/PostCard";

const Postcard = (props) => {
  const postid = useSelector((state) => state.profile.postIds);
  console.log(postid);
  const postsdata = useSelector((state) => state.posts);
  console.log(postsdata);
  console.log(props.postsData);
  if (postsdata === null) {
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
            {props.curUser ? postsdata.map((postdata) => (
              <PostCard
                key={postdata.postId}
                id={postdata.postId}
                banner={postdata.imageUrl}
                title={postdata.postTitle}
                description={postdata.postSummary}
                likes={postdata.likes}
                publishedDate={postdata.publishedDate}
                userId={postdata.uid}
              />
            )) : props.postsData.map((postdata) => (
              <PostCard
                key={postdata.postId}
                id={postdata.postId}
                banner={postdata.imageUrl}
                title={postdata.postTitle}
                description={postdata.postSummary}
                likes={postdata.likes}
                publishedDate={postdata.publishedDate}
                userId={postdata.uid}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Postcard;
