import { profileActions } from "./profile";
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
      var data  = {
        firstName:profileData.firstName,
        lastName:profileData.lastName,
        email:profileData.email,
        followersList:profileData.followersList === undefined? [] : profileData.followersList,
        followingList:profileData.followingList === undefined? [] : profileData.followingList,
        postIds: profileData.postIds === undefined ? [] : profileData.postIds,
        questionIds: profileData.questionIds === undefined ? [] : profileData.questionIds,
        bio: profileData.bio,
        genres: profileData.genres === undefined ? [] : profileData.genres,
      }
      console.log("testing data : ", data)
      dispatch(profileActions.update(data));
      return data.postIds
    } catch (error) {
      console.log("error");
      return "false"
    }
  };
};
