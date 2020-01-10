import React from 'react';
import { initialState, appStateReducer } from './appReducer';
import AppStateProvider from './app-state';
import useAuth from './useAuth';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

function App() {
  
  const auth = useAuth();
  console.log(auth);
  return <div>
    {
      auth ? <LoggedIn displayName={auth.displayName} /> : <LoggedOut />
    }
  </div>;
}

export default () => {
  return (
    <AppStateProvider reducer={appStateReducer} initialState={initialState}>
      <App />
    </AppStateProvider>
  );
};
