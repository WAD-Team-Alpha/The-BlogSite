import axios from "axios";

export const getUsersData = async (page) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/admin/user/get_all_users`,
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
            `http://localhost:5000/api/v1/user/get_user/${id}`,
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
            `http://localhost:5000/api/v1/admin/post/get_posts`,
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
            `http://localhost:5000/api/v1/admin/question/get_questions`,
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
            `http://localhost:5000/api/v1/post/get_post/${id}`
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
            `http://localhost:5000/api/v1/question/get_question/${id}`
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
            `http://localhost:5000/api/v1/admin/user/delete_user/${id}`,
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
            `http://localhost:5000/api/v1/admin/post/delete_post/${id}`,
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
            `http://localhost:5000/api/v1/admin/question/delete_question/${id}`,
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
