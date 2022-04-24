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