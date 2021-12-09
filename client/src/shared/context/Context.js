import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

//If request returns succesfully, user value will be filled with user creds stored in DB.
//If request fails, error will be set to true.
const INITIAL_STATE = {
  //Initially we'll check for a user in local storage,
  //If there's none the value will default to null.
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  //Second arg is the state to be updated; Our initial state.
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
