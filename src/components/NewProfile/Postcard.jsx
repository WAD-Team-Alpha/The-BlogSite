import { Grid } from "@mui/material";
import classes from "./postcard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddPost from "./addPost/AddPost";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsData } from "../../store/post-actions";

const Postcard = () => {

    const dispatch = useDispatch()
    const postid = useSelector((state)=> state.profile.postIds)
    console.log(postid)

    const postsdata = useSelector((state)=>state.posts)
    

    console.log(postsdata)

    const [addPost, setAddPost] = useState(false);
    const [addQuestion, setAddQuestion] = useState(false);
    const addPostHandler = () => {
    setAddPost((state) => !state);
    };
    if (postsdata===null) {
      return <div style={{paddingLeft:"16em", paddingTop:"3em"}}>
        <b>Create your own post</b>
      </div>
    
    }
    else{
  return (
    
    <div>
       {!addPost && (
      <div className={classes.cardcontainer}>
     
        <div className={classes.postscreate}>
            
        </div>
     
         
        
          <Grid container spacing={2}   direction="row"
                  justify="flex-start"
                  alignItems="flex-start">
        
          {postsdata.map((postdata)=> (
          <div className={classes.cards}>
        
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={postdata.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {postdata.postTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{marginLeft:"8.3em"}}>
                  Published on {postdata.publishedDate}
                </Typography>
              </CardContent>
              
            </Card>
          
            <br/>
          </div>
          
          ))}
          </Grid>
        
      </div>
        )}
         {addPost && <AddPost/>}
    </div>
    
  );
}
};

export default Postcard;
