import { useEffect } from 'react';
import { useAppState } from './app-state';
import { onAuthStateChanged } from './firebase';

export default function useAuth() {
  const [{ auth, authAttempted }, dispatch] = useAppState();

  useEffect(() => {
    return onAuthStateChanged(auth => {
      if (auth) {
        const { displayName, email, uid, photoURL } = auth;
        dispatch({
          type: 'CHANGE_AUTH_STATE',
          test: {
            auth: { displayName, email, uid, photoURL },
            user: null
          }
        });
      } else {
        console.log('logout');
        dispatch({
          type: 'CHANGE_AUTH_STATE',
          test: {
            auth: null,
            user: null
          }
        });
      }
    });
  }, [dispatch]);

  return { auth, authAttempted };
}
