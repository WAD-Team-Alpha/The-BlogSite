import React, { useState,useEffect } from "react";
import classes from "./right.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from '@mui/icons-material/Sort';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filters";
// post and Question filter page
const Right = (props) => {
    const filters = useSelector((state) => state.filters);
    const [filterOptions, setFilterOptions] = useState(["Likes", "Comments"])
    const [filterValue, setFilterValue] = useState(filters.filter);
    const [sortValue, setSortValue] = useState(filters.order)
    const location = useLocation();
    const dispatch = useDispatch();
    // console.log(props);
    useEffect(() => {
        //need update
        console.log(location.pathname);
        const page = location.pathname.split('/');
        console.log(page);
        if (page[2] === "question") {
            setFilterOptions(["Votes", "Answers"])
        }else{
            setFilterOptions(["Likes", "Comments"])
        }
    }, [])
    
    return (
        <div>
            <div className={`${classes.fix}`}>
                <div className={`row ${classes.order}`}>
                    <div className="col-md-12">
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                <FilterAltIcon />
                                Filter
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={filterValue}
                                onChange={(e) => {
                                    dispatch(filterActions.updateFilter(e.target.value))
                                    setFilterValue(e.target.value);
                                }}
                            >
                                <FormControlLabel
                                    value="1"
                                    control={<Radio />}
                                    label="Published Date"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio />}
                                    label={filterOptions[0]}
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Radio />}
                                    label={filterOptions[1]}
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={`col-md-12 ${classes.space}`}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                <SortIcon />
                                Sort
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={sortValue}
                                onChange={(e) => {
                                    dispatch(filterActions.updateOrder(e.target.value))
                                    setSortValue(e.target.value);
                                }}
                            >
                                <FormControlLabel
                                    value="-1"
                                    control={<Radio />}
                                    label="Latest"
                                />
                                <FormControlLabel
                                    value="1"
                                    control={<Radio />}
                                    label="Oldest"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <hr
                    style={{
                        color: "#379683",
                        padding: "1px",
                        marginRight: "20px",
                    }}
                />
                {/* <div className={`  ${classes.fellow}`}>

                    <div className={`${classes.head}`}>
                        <p className={`fw-bold fs-8 `} style={{ color: 'black' }}>People you may know</p>
                    </div>

                    <div className={`row  ${classes.bottom}`}>
                        <div className={`fw-bold ${classes.person} ${classes.person1} shadow`}>
                            <img src="https://picsum.photos/50" alt="img" />
                            <a href='#'>Surya</a>
                        </div>
                        <div className={` fw-bold ${classes.person} shadow`}>
                            <img src="https://picsum.photos/50" alt="img" />
                            <a href='#'>Surya</a>
                        </div>


                    </div>
                    <div className={`row  ${classes.bottom}`}>
                        <div className={`fw-bold ${classes.person} ${classes.person2} shadow`}>
                            <img src="https://picsum.photos/50" alt="img" />
                            <a href='#'>Surya</a>
                        </div>
                        <div className={`fw-bold ${classes.person} shadow`}>
                            <img src="https://picsum.photos/50" alt="img" />
                            <a href='#'>Surya</a>
                        </div>


                    </div>
                    <div className={`${classes.view}`}>
                        <button className={'btn btn-primary ' + classes.a} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">View more</button>
                    </div>


                </div> */}
            </div>
        </div>
    );
};

export default Right;
