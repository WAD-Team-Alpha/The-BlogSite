import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminActions } from '../store/admin'
import { fetchPosts, fetchQuestions, fetchUsers } from '../store/admin-actions'
import Posts from './Posts'
import Questions from './Questions'
import Users from './Users'

const Admin = () => {
    const [page, setPage] = useState("users")
    const dispatch = useDispatch()
    const [submit, setSubmit] = useState(false)
    useEffect(() => {
        setSubmit(true)
        dispatch(fetchUsers()).then((result) => {
            console.log("Users: ", result)
            dispatch(adminActions.setUsers(result))
        })
        dispatch(fetchPosts()).then((result) => {
            console.log("Posts: ", result)
            dispatch(adminActions.setPosts(result))
        })
        dispatch(fetchQuestions()).then((result) => {
            console.log("Users: ", result)
            dispatch(adminActions.setQuestions(result))
            setSubmit(false)
        })
    }, [])
    return (
        submit ? <CircularProgress /> : <div>
            <button onClick={(event) => {
                event.preventDefault()
                setPage("users")
            }}>Users</button>
            <button onClick={(event) => {
                event.preventDefault()
                setPage("posts")
            }}>Posts</button>
            <button onClick={(event) => {
                event.preventDefault()
                setPage("questions")
            }}>Questions</button>
            {page === 'users' && <Users />}
            {page === 'posts' && <Posts />}
            {page === 'questions' && <Questions />}
        </div>
    )
}

export default Admin
