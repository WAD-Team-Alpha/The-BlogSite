import { authActions } from "./auth";
// import { profileActions } from "./profile";
export const signinAction = (email, password) => {
    return async (dispatch) => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/v1/auth/login`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                // console.log(response);
                const data = await response.json();
                console.log(data);
                return data;
            } catch (error) {
                return error;
            }
        };

        const authData = await fetchData();
        if (!authData.status) {
            return authData.error.message;
        }
        dispatch(authActions.login(authData));
        return "success";
    };
};

export const signupAction = (email, password, firstname, lastName) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/v1/auth/register`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            firstname : firstname,
                            lastname : lastName,
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await response.json();
                return data;
            } catch (error) {
                console.log(error);
                return error;
            }
        };

        const authData = await sendRequest();
        if (!authData.status) {
            console.log(authData);
            return authData.error.message;
        }
        await dispatch(authActions.login(authData));
        // await dispatch(
        //     profileActions.update({
        //         firstName: firstname,
        //         lastName: lastName,
        //         email: email,
        //         bio: "",
        //         genres: [],
        //         postIds: [],
        //         questionIds: [],
        //         followersList: [],
        //         followingList: [],
        //     })
        // );
        return "success";
    };
};
