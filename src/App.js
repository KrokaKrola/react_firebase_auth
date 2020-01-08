import React from "react";
import { initialState, appStateReducer } from "./appReducer";
import AppStateProvider from "./app-state";

function App() {
  return <div>user</div>;
}

export default () => {
  return (
    <AppStateProvider reducer={appStateReducer} initialState={initialState}>
      <App />
    </AppStateProvider>
  );
};
