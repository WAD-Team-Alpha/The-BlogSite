import axios from "axios";
export const getQuestionData = async (id) => {
    try {
        console.log(id);
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
        return {
            status: false,
            message: "Server error occured in client side",
        };
    }
};
export const getAnswersData = async (id) => {
    try {
        console.log(id);
        const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/answer/get_answers/${id}`
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
export const postAnswer = async (id,answer) => {
    try {
        console.log(id);
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/answer/add_answer`,
            {
                questionId: id,
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
export const upVoteQuestion = async (id) => {
    try {
        console.log(id);
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/question/up_vote_question`,
            {
                questionId: id,
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
export const downVoteQuestion = async (id) => {
    try {
        console.log(id);
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/question/down_vote_question`,
            {
                questionId: id,
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