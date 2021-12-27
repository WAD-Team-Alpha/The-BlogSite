import React from 'react'
import classes from './block.module.css'
import Trending from './trending/Trending'
import Profile from './trending/profilecard'
const Block = () => {
    return (

        <div className="container-fluid" >

            <div className="row">
                <div className={`col-md-2 ${classes.left}`}>
                    <ul className={`${classes.list}`}>
                        <li className={`${classes.color}`}> <a href='#'>Posts</a></li>
                        <li><a href='#'>Forums</a></li>
                        <li><a href='#'>Recent Activity</a></li>
                        <li> <a href='#'>Saved for Later</a></li>
                    </ul>
                </div>

                <div className="col-md-7">
                    <div className="card mb-3  mt-3" >
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src="https://picsum.photos/200" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold fs-1 ">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                <div  >
                                    <ul className={`${classes.like}`}>
                                        <li><img src="https://img.icons8.com/ios-filled/24/000000/facebook-like.png" /><a href="#">Like 100</a></li>
                                        <li><img src="https://img.icons8.com/ios-glyphs/20/000000/speaker-notes.png" /><a href="#">Comment 999</a></li>
                                        <li><img src="https://img.icons8.com/material-outlined/24/000000/visible--v2.png" /><a href='#'>Veiw post</a></li>
                                        <li><a>Posted by Surya on 27/12/2021</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-6" >
                        <div class="row g-0">
                            <div className="col-md-2 mt-6">
                                <div className={`${classes.votes}`}>
                                    <p className="fw-bold fs-1  ">999</p>
                                    <p className={`${classes.vote}`}>Votes</p>
                                </div>
                                <div className={`${classes.answer}`}>
                                    <p className="fw-bold fs-1 ml-6 ">999</p>
                                    <p className={`${classes.vote}`}>Answers</p>
                                </div>


                            </div>
                            <div class="col-md-10">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold fs-4">Q: What is the question about ? it should be written here ?</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                   <Trending></Trending>

                    </div>
                    <div className='row'>

                   <Profile></Profile>

                    </div>

                </div>
















                <div className={`col-md-3 ${classes.right}`}>
                    <div className='row'>
                        <div className="col-md-6">
                            <h6 className="mt-4 fw-bold fs-5">Sort By</h6>
                            <div class="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    block
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    checkbox
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    html
                                </label>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h6 className="mt-4 fw-bold fs-5">Order By</h6>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    checkbox
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    html
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className={`row  ${classes.fellow}`}>

                        <p className={`fw-bold fs-8  ${classes.head}`}>People you may know</p>
                        <div className={`row  ${classes.bottom}`}>
                            <div className={`col-md-4 fw-bold ${classes.person}`}>
                                <img src="https://picsum.photos/80" alt="img" />
                                <a href='#'>Surya</a>
                            </div>
                            <div className={`col-md-4 fw-bold ${classes.person}`}>
                                <img src="https://picsum.photos/80" alt="img" />
                                <a href='#'>Surya</a>
                            </div>


                        </div>
                        <div className={`row  ${classes.bottom}`}>
                            <div className={`col-md-4 fw-bold ${classes.person}`}>
                                <img src="https://picsum.photos/80" alt="img" />
                                <a href='#'>Surya</a>
                            </div>
                            <div className={`col-md-4 fw-bold ${classes.person}`}>
                                <img src="https://picsum.photos/80" alt="img" />
                                <a href='#'>Surya</a>
                            </div>


                        </div>
                        <a href='#' className={`fw-bold fs-8  ${classes.a}`} >View more</a>
                       
                    </div>
                </div>



            </div>

        </div>
    );
}
export default Block;