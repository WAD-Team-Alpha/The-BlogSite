import { profileActions } from "./profile";
import { useSelector } from "react-redux";
export const sendProfileData = (about,localId) => {
  return async (dispatch) => {
    console.log("sending");
    console.log("send data action is triggered");
    const sendRequest = async () => {
      console.log(about);
      const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/users/${localId}.json`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(about),
      });

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();

      console.log("Success");
    } catch (error) {
      console.log(error);
      console.log("send profile error");
    }
  };
};

export const fetchProfileData = (localId) => {
  return async (dispatch) => {
    console.log("fetch data action is triggered");
    const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/users/${localId}.json`;
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const profileData = await fetchData();
      dispatch(profileActions.update(profileData));
    } catch (error) {
      console.log("error");
    }
  };
};
