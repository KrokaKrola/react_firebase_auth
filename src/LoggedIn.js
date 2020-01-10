import React from 'react';
import { Button } from 'react-bootstrap';
import { logout } from './firebase';

function Main({displayName}) {
  function logoutHandler() {
    logout();
  }

  return (
    <main>
      main section of logged {displayName}{' '}
      <Button onClick={logoutHandler}>logout</Button>
    </main>
  );
}

export default Main;
