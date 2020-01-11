import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { logout, getUser } from './firebase';
import { useAppState } from './app-state';

function LoggedIn() {
  const [{ auth, user }, dispatch] = useAppState();

  function logoutHandler() {
    logout();
  }

  useEffect(() => {
    if (!user) {
      getUser(auth.uid).then(user => {
        dispatch({ type: 'LOAD_USER', user: user });
      });
    }
  }, [user, auth.uid, dispatch]);
  
  return user ? (
    <>
      main section of logged {user.data.displayName}{' '}
      <Button onClick={logoutHandler}>logout</Button>
    </>
  ) : null;
}

export default LoggedIn;
