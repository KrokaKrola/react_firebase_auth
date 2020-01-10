import { useEffect } from 'react';
import { useAppState } from './app-state';
import { onAuthStateChanged, getUser} from './firebase';

export default function useAuth() {
  const [{ auth }, dispatch] = useAppState();

  useEffect(() => {
    return onAuthStateChanged(auth => {
      if (auth) {
        const { displayName, email, uid, photoURL } = auth;
        // const authObject = getUser(auth.uid);
        // authObject.then(result => {
          // });
          dispatch({
            type: 'CHANGE_AUTH_STATE',
            auth: { displayName, email, uid, photoURL }
        })
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
