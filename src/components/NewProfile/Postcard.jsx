import { Grid } from "@mui/material";
import classes from "./postcard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Postcard = () => {

    const titles=["title1", "title2", "title3", "t4", "t5"]
  return (
    
    <div>
      <div className={classes.cardcontainer}>
        <div className={classes.postscreate}>
          <button class="btn btn-info">
            <i class="bi bi-plus-circle"></i> Create
          </button>
        </div>
        <Grid container spacing={2}   direction="row"
                justify="flex-start"
                alignItems="flex-start">
        {titles.map((titlename)=> (
        <div className={classes.cards}>
           
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZKz8ynpVEhLQE43X0O4lq80gOt23vguqdg&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {titlename}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{marginLeft:"7em", marginTop:"1em"}}>
                Published on 20-08-2021
              </Typography>
            </CardContent>
            
          </Card>
         
          <br/>
        </div>
        
        ))}
        </Grid>
      </div>
    </div>
    
  );
};

export default Postcard;
