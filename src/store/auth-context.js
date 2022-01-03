import React, { useState } from 'react';

const AuthContext = React.createContext({
  status: false,
  updateStatus: (value) => {}
});

export const AuthContextProvider = (props) => {
  const [isSignin, setIsSignin] = useState(false);

  const authHandler = (value) => {
    setIsSignin(value);
  };

  return (
    <AuthContext.Provider
      value={{
        status: isSignin,
        updateStatus: authHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;