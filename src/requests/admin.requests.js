import axios from "axios";

export const getUsersData = async (page) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/admin/user/get_all_users/?page=${page}&limit=${3}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const getUserData = async (id) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/user/get_user/${id}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const getPostsData = async (page) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/admin/post/get_posts/?page=${page}&limit=${3}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const getQuestionsData = async (page) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/admin/question/get_questions/?page=${page}&limit=${3}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const getPostData = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/post/get_post/${id}`
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const getQuestionData = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/question/get_question/${id}`
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const deleteUserData = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_BASE_URL}/admin/user/delete_user/${id}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.status;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const deletePostData = async (id) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_BASE_URL}/admin/post/delete_post/${id}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.status;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const deleteQuestionData = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_BASE_URL}/admin/question/delete_question/${id}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data.status;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
    }
};

export const register = async (firstname, lastname, email, password) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/admin/auth/register`,
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
        console.log(email, password);
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/admin/auth/login`,
            {
                email,
                password,
            }
        );
        console.log(response);
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