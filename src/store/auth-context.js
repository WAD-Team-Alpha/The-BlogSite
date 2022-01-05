import React, { useState } from 'react';

const AuthContext = React.createContext({
  status: false,
  submitted: false,
  updateStatus: (value) => {},
  updateSubmitted: (value) => {}
});

export const AuthContextProvider = (props) => {
  const [isSignin, setIsSignin] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const authHandler = (value) => {
    setIsSignin(value);
  };

  const submitHandler = (value) => {
    setIsSubmitted(value);
  };

  return (
    <AuthContext.Provider
      value={{
        status: isSignin,
        submitted: isSubmitted,
        updateStatus: authHandler,
        updateSubmitted: submitHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;