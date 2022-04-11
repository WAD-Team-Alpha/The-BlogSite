import axios from 'axios'

export const addBookmark = async (type, id) => {
    try {
        console.log(type, id);
        const response = await axios.post(
            `http://localhost:5000/api/v1/activity/add_to_saved`,
            {
                contentType: type,
                contentId: id,
            },
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        console.log(response.status)
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

export const removeBookmark = async (type, id) => {
    try {
        console.log(type, id);
        const response = await axios.post(
            `http://localhost:5000/api/v1/activity/remove_from_saved`,
            {
                contentType: type,
                contentId: id,
            },
            {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            }
        );
        console.log(response.status)
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