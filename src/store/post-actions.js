import { postActions } from "./post";
export const sendPostData = ( postData, postId ) => {

    return async ( dispatch ) => {

        console.log( "sending" );
        console.log( "send data action is triggered" );
        const sendRequest = async () => {

            const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${ postId }.json`;
            const response = await fetch( url,
            {

                method: "PUT",
                body: JSON.stringify( postData )

            } );

            if ( ! response.ok )
            {

                throw new Error( "Sending data failed." );

            }

        };

        try
        {

            await sendRequest();
            console.log( "Success" );

        } catch ( error )
        {

            console.log( error );
            console.log( "send post error" );

        }

    };

};

export const fetchPostData = ( postId ) => {

    return async ( dispatch ) => {
        postId = "2db7a6cb-8ce5-468f-901e-a4930366ca85";
        console.log( "fetch data action is triggered" );
        const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${ postId }.json`;
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

            const postData = await fetchData();
            var data = {

                ... postData,
                comments : postData.comments === undefined ? [] : postData.comments,
                postData : postData.postData === undefined ? [] : postData.postData

            }
            dispatch( postActions.add( data ) );
            return "success";

        } catch ( error )
        {

            console.log( "error" );
            return "failed"

        }

    };

};
