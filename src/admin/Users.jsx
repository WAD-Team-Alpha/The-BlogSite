import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    return (
        <div className='container'>
            <h1>Users</h1>
            <div className="row">
                <div className="col-md-3" key={2}>
                        <div class="card" style={{width: "18rem", marginTop: '2em'}}>
                            <div class="card-body">
                                <h5 class="card-title">{"This is lastname"}{" "}{"This is firstname"}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{"This is email"}</h6>
                                <p class="card-text">{"This is bio"}</p>
                                <Link to={`/admin/users/1`} class="card-link">View profile</Link>
                                {/* <Link to="#" class="card-link">Delete user</Link> */}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Users
