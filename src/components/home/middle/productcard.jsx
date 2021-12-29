import React from 'react'
import classes from './productcard.module.css' 
const ProductCard = () => {
    return (

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
                                        <li><a className="fw-bold">Posted by <a href="#"  style={{ color: "#05386b" }}>Surya</a> on 27/12/2021</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default ProductCard;