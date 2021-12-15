import React from "react";

import { Auth } from "aws-amplify";

export const getInitialState = () => {
  const localState = localStorage.getItem('state')
  if (localState) {
    return JSON.parse(localState)
  }
  return initialState
}

const performLogout = () => {
  console.log('Logging out...');
  
  Auth.signOut().then(() => {
    console.log('OK');
  }).catch(error => {
    console.log('ERR');
  });

  localStorage.removeItem('state');
  return initialState;
}

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "logout":
      return performLogout()
    case "login":
      console.log('Logged in');

      const newState = {   
        isAuthenticated: true,
        isAuthenticating: false,
        user: {
          firstname: action.attributes.given_name,
          lastname: action.attributes.family_name
        }
      }

      localStorage.setItem('state', JSON.stringify(newState))
      return newState
    default:
      console.log('default state returned');
      return state;
  }
};

export const Context = React.createContext();
