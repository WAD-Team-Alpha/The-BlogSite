import { Grid } from "@mui/material";
import classes from "./postcard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Questionscard = () => {

    const ques=["ques1", "ques2", "ques3", "q4", "q5"]
  return (
    
    <div>
      <div className={classes.cardcontainer}>
        <div className={classes.quescreate}>
          <button class="btn btn-info">
            <i class="bi bi-plus-circle"></i> Add
          </button>
        </div>
        <Grid container spacing={2}   direction="row"
                justify="flex-start"
                alignItems="flex-start">
        {ques.map((questions)=> (
        <div className={classes.cards}>
           
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://www.practiceportuguese.com/wp-content/uploads/2020/06/asking-questions-800x534.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {questions}
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

export default Questionscard;
