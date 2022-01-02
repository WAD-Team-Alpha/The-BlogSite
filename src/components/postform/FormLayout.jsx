import React from 'react'
import { Outlet } from 'react-router-dom';

const FormLayout = () => {
    return (
        <>
            <div className={"container-fluid"} style={{height: '100vh', backgroundColor: '#05386b'}}>
                <div className="row " >
                    <div className="col-md-2"></div>
                    {<Outlet />}
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default FormLayout
