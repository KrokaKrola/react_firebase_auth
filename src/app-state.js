import React, { useContext, createContext, useReducer } from "react";

const Context = createContext();

export function useAppContext() {
  return useContext(Context);
}

export default function AppStateProvider({ reducer, inititalValue = {}, children }) {
  const value = useReducer(reducer, inititalValue);
  return <Context.Provider value={value} children={children} />;
}
