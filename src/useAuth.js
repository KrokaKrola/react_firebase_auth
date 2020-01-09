import { useEffect } from 'react';
import { useAppState } from './app-state';
import { onAuthStateChanged } from './firebase';

export default function useAuth() {
  const [{ auth }, dispatch] = useAppState();

  useEffect(() => {
    return onAuthStateChanged(auth => {
      if (auth) {
        const { displayName, email, uid, photoURL } = auth;
        dispatch({
          type: 'CHANGE_AUTH_STATE',
          auth: { displayName, email, uid, photoURL }
        });
      } else {
        dispatch({
          type: 'CHANGE_AUTH_STATE',
          auth: null
        });
      }
    });
  }, [dispatch]);
  
  return auth;
}
