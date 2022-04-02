import classes from "./postcard.module.css";
import PostCard from "../home/cards/PostCard";

const Postcard = (props) => {
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
                        <PostCard //if we are the user and sending the current post details using props
                            key={5}
                            id={10} //id of the post
                            banner={"www.google.com"} //banner of the post
                            title={"This is title"} //posts title
                            description={"This is description"} //posts description
                            likes={10} //posts likes
                            publishedDate={"This is published date"} //posts published date
                            userId={"user Id"} //user id of the particular post
                            author={"Author"} //author of the post
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default Postcard;
