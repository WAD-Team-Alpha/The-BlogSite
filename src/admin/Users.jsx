import React from "react";
import {useNavigate } from "react-router-dom";
import classes from "./css/users.module.css";
import { Pagination } from '@mui/material'



const Users = () => {
   const users = ["Prathyush", "Surya", "Mahaboob", "Sekhar", "Satyam", "UserA", "UserB"];
   const summary = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
   const navigate = useNavigate();
   return (
    <div className={classes.users}>
      <h1 style={{ marginTop: "0.5em", marginLeft:"13em"}}>Users</h1>
      <div className="row">
        {users.map((user)=>(        
          <div class="card w-25" style={{backgroundColor:"#8EE4AF", marginRight:"3em", marginBottom:"1em"}} >
          <div class="card-body">
            <h5 class="card-title"><b>{user}</b></h5>
            <p class="card-text">
                <b>Genres </b> : Gaming <br/>
                <p><b>Bio </b> : {summary.slice(0,100)} ... </p>
            </p>
            <button class="btn btn-primary" onClick={()=>navigate("/admin/users/id")}>View Profile</button>            
          </div>
          
        </div>
            
        ))}
        
      </div>
      <div className={classes.pagination}>
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </div>
  );
};

export default Users;
