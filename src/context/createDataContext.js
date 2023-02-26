import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const context = React.createContext();

  const provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <context.Provider value={{ state }}>{children}</context.Provider>;
  };
  return { context, provider };
};
