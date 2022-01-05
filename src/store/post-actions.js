
import postFormActions from "./postForm";
export const sendPostData = (postData,postId) => {
  return async (dispatch) => {
    console.log("sending");
    console.log("send data action is triggered");
    const sendRequest = async () => {
      const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${postId}.json`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();
    //   dispatch(postFormActions.add(postData))
      console.log("Success");
    } catch (error) {
      console.log(error);
      console.log("send post error");
    }
  };
};
