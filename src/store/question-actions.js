import { questionActions } from "./question";
import { questionsActions } from "./questions";
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

export const fetchQuestionData = ( questionId ) => {

  return async ( dispatch ) => {
      questionId = "7b3869d4-f17b-4fcb-bf82-eeee9d7e7d7f";
      console.log( "fetch data action is triggered" );
      const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/questions/${ questionId }.json`;
      const fetchData = async () => {

          const response = await fetch( url );

          if ( ! response.ok )
          {

              throw new Error( "Could not fetch data!" );

          }
          console.log(response);
          const data = await response.json();

          return data;

      };

      try
      {

          const questionData = await fetchData();
          var data = {

              ... questionData,
              comments : questionData.comments === undefined ? [] : questionData.comments,
          }
          dispatch( questionActions.add( data ) );
          return "success";

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
      const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/questions/${ questionId }.json`;
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

