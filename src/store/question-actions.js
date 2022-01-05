export const sendQuestionData = (questionData,questionId) => {
  return async (dispatch) => {
    console.log("sending");
    console.log("send data action is triggered");
    const sendRequest = async () => {
      const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/questions/${questionId}.json`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(questionData),
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
      console.log("send post error");
    }
  };
};


