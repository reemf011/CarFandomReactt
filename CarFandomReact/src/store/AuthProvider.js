import AuthContext from './authContext';

import { useState } from 'react';

const AuthProvider = (props) => {
  const [Email, setEmail] = useState('');
  const [id, setID] = useState('');
  const [token, setToken] = useState('');

  const authContext = {
    Email:Email,
    id: id,
    token: token,
    login: (id, Email, token) => {
      setID(id);
      setEmail(Email);
      setToken(token);
    },
    logout: () => {
      setEmail('');
      setID('');
      setToken('');
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
