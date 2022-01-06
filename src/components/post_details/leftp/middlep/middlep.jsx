import * as React from "react";
import banner_logo from "../../../../assets/images/banner_logo.png";
import { Avatar } from "@mui/material";
import india1 from "../../../../assets/images/india1.png"
import india2 from "../../../../assets/images/india2.jpg"
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import classes from "./middlep.module.css"
import postData from '../../../../helpers/postData.json'
import { useSelector }from "react-redux";
const Middlep = (props) => {
    
    const data = postData.find(post => post.id === parseInt(props.postID))
    const postdata = useSelector(state => state.post)
    return (
        <>
            <div >
                <div style={{ padding: "1em" }}>
                    <img src={data.banner} alt="prathyush" width="800px" height="248px" />
                </div>
                <div>
                    <div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-1">
                                    <div>
                                        <Avatar />
                                    </div>
                                </div>
                                <div class="col-3">
                                    {data.author}
                                    <br />
                                    Posted on {data.publishedDate}
                                    <br /> <br />
                                </div>
                                <div class="col-12">
                                    <b><h3 style={{ size: '25px', font: 'Roboto', width: '754px' }}><b>{data.title}</b></h3></b>
                                    <hr />
                                </div>
                                <div>
                                    <p>
                                        {data.description}
                                    </p>
                                    <div >
                                        <img src={india1} alt="" width="760px" height="187px" />
                                    </div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq. si architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq.
                                    </p>
                                    <img src={india2} alt="" width="760px" height="187px" />
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq.
                                    </p>
                                </div>

                                <hr />

                                <div>
                                    <h2><b>Comments</b></h2>

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-1">
                                                <Avatar />
                                            </div>
                                            <div class="col-11">
                                                {/* <p>Hi</p> */}
                                                <TextField
                                                    fullWidth
                                                    helperText=" "
                                                    id="description_posts"
                                                    label="Comment publicly as Surya Teja"
                                                    multiline
                                                    rows={3}
                                                    size="small"
                                                />
                                                <Button variant="contained">Submit</Button>

                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />


                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-1">
                                                <Avatar />
                                            </div>
                                            <div class="col-11">
                                                <Box height="71px" width="715px" style={{ border: "2px solid #c4c4c4" }}>
                                                    <div className={classes.commentsp}> I commented here, so please ignore this and go to next comment</div>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-1">
                                                <Avatar />
                                            </div>
                                            <div class="col-11">
                                                <Box height="71px" width="715px" style={{ border: "2px solid #c4c4c4" }}>
                                                    <div className={classes.commentsp}> I commented here, so please ignore this and go to next comment</div>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-1">
                                                <Avatar />
                                            </div>
                                            <div class="col-11">
                                                <Box height="71px" width="715px" style={{ border: "2px solid #c4c4c4" }}>
                                                    <div className={classes.commentsp}> I commented here, so please ignore this and go to next comment</div>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                    <br />


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Middlep;
