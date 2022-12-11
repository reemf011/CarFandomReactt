import { createContext } from 'react';

//We  define our context with empty data for better code completion later on
const AuthContext = createContext({
  Email: '',
  id: '',
  token: '',
  login: (id, Email, token) => {},
  logout: () => {}
});

export default AuthContext;
