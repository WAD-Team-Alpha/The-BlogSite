import axios from "axios";
export const getPostData = async (id) => {
    try {
        console.log(id);
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
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getCommentsData = async (id) => {
    try {
        console.log(id);
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/comment/get_comments/${id}`
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
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const postComment = async (id,answer) => {
    try {
        console.log(id);
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/comment/add_comment`,
            {
                postId: id,
                text: answer,
            },
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
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const likePost = async (id) => {
    try {
        console.log(id);
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/post/like_post`,
            {
                postId: id,
            },
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
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
