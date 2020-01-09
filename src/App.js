import React from 'react';
import { initialState, appStateReducer } from './appReducer';
import AppStateProvider from './app-state';
import useAuth from './useAuth';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

function App() {
  // const [{user}] = useAppState();
  const auth = useAuth();
  return <div>
    {
      auth ? <LoggedIn /> : <LoggedOut />
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
