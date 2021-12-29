import * as React from 'react';
import Leftq from './leftq/leftq';
import Rightq from './rightq/rightq';
import Middleq from './middleq/middleq';
import Footer from '../footer/Footer';

const Quesdetails = (props) => {

    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2" style={{marginTop:"2em"}}>
                        <Leftq/>
                    </div>
                    <div class='col-7' style={{marginTop:"2em"}}>
                        <Middleq/>
                        
                    </div>
                    <div class="col-3" style={{marginTop:"2em"}}>
                        <Rightq/>
                    </div>
                   
                </div>
                
            </div>
            <br/>
            <Footer/>
          
           
          
            
        </>
        
    )
}

export default Quesdetails