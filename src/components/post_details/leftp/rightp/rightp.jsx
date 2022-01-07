import * as React from 'react';
// import { Box } from '@mui/system';
import { Container, Box } from '@mui/material';
import classes from './rightp.module.css'
//import { ClassNames } from '@emotion/react';
import { Avatar } from '@mui/material';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';


const Rightp = (props) => {
    const num=[1,2,3,4]
    const profileData = props.profileData;
    console.log(profileData);
    // var followercount = 0;
    // var followingcount = 0;
    
    
    return(
        <div >
                <div className={classes.containerMD}>
                    <Container>
                        <Box sx={{bgcolor:"white", height:"158px", borderRadius:"0.3em"}}>
                            <div className="container-fluid">
                                <div className="row justify-content-end">
                                    <div class="col-2" >
                                    <button type="submit" class="btn shadow-none" style={{marginTop:"0.2em"}} ><i class="bi bi-pencil-fill" ></i></button>
    
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                
                                    <div class="col-1" style={{marginRight:"4em"}}>
                                    <Avatar
                                        sx={{ width: "74px", height: "73px"}}
                                    
                                    />
                                    </div>
                                    <div class="col-8">
                                    <span className={classes.uname}> <b>{profileData.lastName}</b></span>
                                    
                                        
                                    <div class="row justify-content-center">
                                        <div class="col-6">
                                            <span >
                                                <Link underline="none"> <div className={classes.mainfollowers}>Followers</div></Link>
                                            </span>
                                        </div>
                                        <div class="col-6">
                                            <span>
                                                <Link underline="none"><div className={classes.mainfollowers}>Following</div></Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row justify-content-end">
                                        <div class="col-8">
                                            <span className={classes.followercount} > <b>{profileData.followercount}</b></span>
                                        </div>
                                        <div class="col-4">
                                            <span className={classes.followingcount}> <b>{profileData.followingcount}</b></span>
                                        </div>
                                    </div>
                                    <div class="row justify-content-start">
                                        <div class="col-6">
                                            <span><Button variant="contained" style={{ height:"28px", width:"76px", backgroundColor:"#05386B", textTransform:"none"}}>Inspect</Button></span>
                                        </div>
                                        <div class="col-6" >
                                            <span><Button variant="contained" style={{ height:"28px", width:"76px", backgroundColor:"#5cdb95", color:"black", textTransform:"none"}}>Follow</Button></span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>                        
    
                        </Box>
                    </Container>
                    
                </div>
                <hr style={{color:'#5CDB95', border:'2px', height:'2px', width:'343px'}}/>
              
                <div className={classes.containerLD}>
                    <div className={classes.Mcon}>
                    <span style={{color:"white"}}>Recommended</span>
                    </div>
                    <div className={classes.containerSecond}>

                    </div>
                    {num.map((i)=>(
                        <><div className={classes.containerThird} >
                            <div className={classes.recomendedtext}>Just displaying the titles is enough here, but please make sure to show the question mark? </div>
                        </div></>
                    ))}
                </div>
            </div>
    )
}

export default Rightp