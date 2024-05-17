import React, { createContext, useReducer, useContext } from 'react';

// Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_TAB = 'SET_TAB';
const SET_DARK_MODE = 'SET_DARK_MODE';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  tab: 'home',
  darkMode: false,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        tab: 'home',
      };
    case SET_TAB:
      return {
        ...state,
        tab: action.payload,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

// Create context
const GlobalContext = createContext();

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
