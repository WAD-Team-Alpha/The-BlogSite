import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const admin = useSelector(state => state.admin)
    console.log(admin.users, "These are the users from the backend")
    return (
        <div>
            <table id="customers" className='table table-striped'>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Bio</th>
                    <th>Genres</th>
                    <th>Liked content</th>
                    <th>Recent Activity</th>
                    <th>Saved content</th>
                    <th>Posts</th>
                    <th>Questions</th>
                </tr>
                { admin.users.map((item, index) => {
                    return <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.bio}</td>
                    <td>{item.genres}</td>
                    <td><button className='btn' data={item.likedContent}>Liked Content</button></td>
                    <td><button className='btn' data={item.recentActivity}>Recent Activity</button></td>
                    <td><button className='btn' data={item.savedContent}>Saved Content</button></td>
                    <td><button className='btn' data={item.postIds}>Posts</button></td>
                    <td><button className='btn' data={item.questionIds}>Questions</button></td>
                </tr>
                })}
            </table>
        </div>
    )
}

export default Users
