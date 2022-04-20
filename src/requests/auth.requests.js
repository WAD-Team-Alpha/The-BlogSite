import axios from "axios";

export const register = async (firstname, lastname, email, password) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
            {
                firstname,
                lastname,
                email,
                password,
            }
        );
        if (response.data.status) {
            localStorage.setItem("token", response.data.data);
            localStorage.setItem("authStatus", true);
            return {
                status: true,
                message: "Registered user successfully",
            };
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const login = async (email, password) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
            {
                email,
                password,
            }
        );
        if (response.data.status) {
            localStorage.setItem("token", response.data.data);
            localStorage.setItem("authStatus", true);
            return {
                status: true,
                message: "Logged user successfully",
            };
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getUserId = async () => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/user/get_user`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            localStorage.setItem("userId", response.data.data._id);
            return {
                status: true,
                message: "Logged user successfully",
                data : response.data.data._id
            };
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
