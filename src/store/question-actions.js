import { questionActions } from "./question";
import { questionsActions } from "./questions";
export const sendQuestionData = (questionData,questionId) => {
  return async (dispatch) => {
    console.log(questionData, questionId)
    console.log("sending");
    console.log("send data action is triggered");
    const sendRequest = async () => {
      const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/questions/${questionId}.json`;
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
      return "success"
    } catch (error) {
      console.log(error);
      console.log("send post error");
      return "failure"
    }
  };
};

export const fetchQuestionData = ( questionId ) => {

  return async ( dispatch ) => {
      
      console.log( "fetch data action is triggered" );
      const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/questions/${ questionId }.json`;
      const fetchData = async () => {

          const response = await fetch( url );
          console.log(response);
          if ( ! response.ok )
          {

              throw new Error( "Could not fetch data!" );

          }
         
          const data = await response.json();

          return data;

      };

      try
      {

          const questionData = await fetchData();
          var data = {

              ... questionData,
              comments : questionData.comments === undefined ? [] : questionData.comments,
              bookmarks : questionData.bookmarks === undefined ? 0 : questionData.bookmarks,
              status : questionData.status === undefined ? "active" : questionData.status,

          }
          dispatch( questionActions.add( data ) );
          console.log(data)
          return data;
          

      } catch ( error )
      {

          console.log( "error" );
          return "failed"

      }

  };

};


export const fetchQuestionsData = ( questionId ) => {

  return async ( dispatch ) => {
      console.log( "questions fetch data action is triggered" );
      const url = `https://blogsite-dc4f2-default-rtdb.firebaseio.com/questions/${ questionId }.json`;
      const fetchData = async () => {

          const response = await fetch( url );

          if ( ! response.ok )
          {

              throw new Error( "Could not fetch data!" );

          }
          // console.log(response);
          const data = await response.json();

          return data;

      };

      try
      {

          const questionData = await fetchData();
          var data = {

              ... questionData,
              comments : questionData.comments === undefined ? [] : questionData.comments,
              bookmarks : questionData.bookmarks === undefined ? 0 : questionData.bookmarks,
              status : questionData.status === undefined ? "active" : questionData.status,
          }
          dispatch( questionsActions.addQuestion( data ) );
          return "success";

      } catch ( error )
      {

          console.log( "error" );
          return "failed"

      }

  };

};

