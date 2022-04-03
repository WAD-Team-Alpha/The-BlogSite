import axios from "axios"


export const register = async (firstname, lastname, email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/v1/auth/register`, {
            firstname,
            lastname,
            email,
            password
        })
        if(response.data.status) {
            localStorage.setItem("token", response.data.data)
            return {
                status: true,
                message: "Registered user successfully"
            }
        } else {
            return {
                status: false,
                message: response.data.errors
            }
        }
    } catch (error) {
        return {
            status: false,
            message: "Server error occured in client side"
        }
    }
}
export const login = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/v1/auth/login`, {
            email,
            password
        })
        if(response.data.status) {
            localStorage.setItem("token", response.data.data)
            return {
                status: true,
                message: "Logged user successfully"
            }
        } else {
            return {
                status: false,
                message: response.data.errors
            }
        }
    } catch (error) {
        return {
            status: false,
            message: "Server error occured in client side"
        }
    }
}