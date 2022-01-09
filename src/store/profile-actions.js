import { profileActions } from "./profile";
export const sendProfileData = (about, localId) => {
  return async (dispatch) => {
    console.log("sending");
    console.log("send data action is triggered");
    const sendRequest = async () => {
      console.log(about);
      const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/users/${localId}.json`;
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
    const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/users/${localId}.json`;
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
      var data = {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
        followersList: profileData.followersList === undefined ? [] : profileData.followersList,
        followingList: profileData.followingList === undefined ? [] : profileData.followingList,
        postIds: profileData.postIds === undefined ? [] : profileData.postIds,
        questionIds: profileData.questionIds === undefined ? [] : profileData.questionIds,
        bio: profileData.bio,
        genres: profileData.genres === undefined ? [] : profileData.genres,
        recentActivity: profileData.recentActivity === undefined ? [] : profileData.recentActivity,
        savedContent: profileData.savedContent === undefined ? [] : profileData.savedContent,
        likedContent: profileData.likedContent === undefined ? [] : profileData.likedContent
      }
      console.log("testing data : ", data)
      dispatch(profileActions.update(data));
      return data
    } catch (error) {
      console.log("error");
      return "false"
    }
  };
};

export const fetchOtherProfileData = (localId) => {
  return async (dispatch) => {
    console.log("fetch data action is triggered");
    const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/users/${localId}.json`;
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
      var data = {
        ...profileData,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
        followersList: profileData.followersList === undefined ? [] : profileData.followersList,
        followingList: profileData.followingList === undefined ? [] : profileData.followingList,
        postIds: profileData.postIds === undefined ? [] : profileData.postIds,
        questionIds: profileData.questionIds === undefined ? [] : profileData.questionIds,
        bio: profileData.bio,
        genres: profileData.genres === undefined ? [] : profileData.genres,
      }
      console.log("testing data : ", data)
      return data;
    } catch (error) {
      console.log("error");
      return "failed"
    }
  };
};

export const updateRecentActivity = (data, localId) => {
  return async (dispatch) => {
    console.log("sending ra");
    console.log(data)
    console.log("send recent activity action is triggered");
    const sendRequest = async () => {
      const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/users/${localId}.json`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),  
      });

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();
      console.log(" recent activity Success");
      return "success"
    } catch (error) {
      console.log(error);
      console.log("send recent activity error");
      return "failure"
    }
  };
};

export const sendOtherProfileData = (about, userId) => {
  return async (dispatch) => {
    console.log("sending");
    console.log("send data action is triggered");
    const sendRequest = async () => {
      console.log(about);
      const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/users/${userId}.json`;
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
      return "succes";
    } catch (error) {
      console.log(error);
      console.log("send profile error");
    }
  };
};