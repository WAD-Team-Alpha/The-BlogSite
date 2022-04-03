import axios from "axios";

export const getMyUserData = async () => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/user/get_user`,
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

export const getOtherUserData = async (uid) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/user/get_user/${uid}`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getPostsData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/post/get_posts`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getQuestionsData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/question/get_questions`,
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getOtherPostsData = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/post/get_posts_by_id/${id}`,
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getOtherQuestionsData = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/question/get_questions_by_id/${id}`,
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.data;
        } else {
            return {
                status: false,
                message: response.data.errors,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
