import axios from "axios";

export const updateUserData = async (firstname, lastname, bio, genres) => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/user/update_user`,
            {
                firstname: firstname,
                lastname: lastname,
                bio: bio,
                genres: genres,
            },
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            console.log(response.data);
            return response.data;
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
export const getMyUserData = async () => {
    console.log(localStorage.getItem("token"));
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/user/get_user`,
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
            `${process.env.REACT_APP_API_BASE_URL}/user/get_user/${uid}`,
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
export const getPostsData = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/post/get_posts`,
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
            `${process.env.REACT_APP_API_BASE_URL}/question/get_questions`,
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
            `${process.env.REACT_APP_API_BASE_URL}/post/get_posts_by_userId/${id}`
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
            `${process.env.REACT_APP_API_BASE_URL}/question/get_questions_by_userId/${id}`
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
export const unFollowUser = async (id) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/user/unfollow_user`,
            {
                follow_userId: id,
            },
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.status;
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
export const followUser = async (id) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/user/follow_user`,
            {
                follow_userId: id,
            },
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.status;
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
export const removeFollower = async (id) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/user/remove_follower`,
            {
                follow_userId: id,
            },
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        if (response.data.status) {
            // console.log(response.data);
            return response.data.status;
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
