import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
    return (
    <div>
            <ul class="nav">
                <li class="nav-item">
                    <Link to="users" className='nav-link'>Users</Link>
                </li>
                <li class="nav-item">
                    <Link to="posts" className='nav-link'>Posts</Link>
                </li>
                <li class="nav-item">
                    <Link to="questions" className='nav-link'>Questions</Link>
                </li>
            </ul>
            <div className='container d-flex justify-content-center'>
                <h1>Admin Page</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default Admin
