import * as React from 'react';
import Leftp from './leftp/leftp';
import Rightp from './rightp/rightp';
import Middlep from './middlep/middlep';
import Footer from '../../footer/Footer'

const Postdetails = (props) => {
    console.log("this is running");

    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
                        <Leftp/>
                    </div>
                    <div class='col-7'>
                        <Middlep/>
                    </div>
                    <div class="col-3">
                        <Rightp/>
                    </div>
                </div>
            </div>
            <div>
                  <Footer/>
            </div>
        </>
    )
}

export default Postdetails