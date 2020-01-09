import React from 'react';
import { useAppState } from './app-state';
import { Button } from 'react-bootstrap';
import { logout } from './firebase';

function Main() {
  const [{ auth }] = useAppState();

  function logoutHandler() {
    logout();
  }

  return (
    <main>
      main section of logged {auth.displayName}{' '}
      <Button onClick={logoutHandler}>logout</Button>
    </main>
  );
}

export default Main;
