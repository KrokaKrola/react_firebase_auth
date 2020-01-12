import React from "react";
import { Button } from "react-bootstrap";
import { googleAuthProvider } from "../../../../firebase";
import { setDoc } from "../../../../utils";
import googleSvg from "../../../../assets/google.svg";
import { useAppState } from "../../../../app-state";

const GoogleAuthButton = ({ setLoading }) => {
  const [{ errors }, dispatch] = useAppState();

  const googleAuthHandler = async () => {
    setLoading(true);
    try {
      const { displayName, email, uid, photoURL } = await googleAuthProvider();
      setDoc(`/users/${uid}`, { displayName, email, uid, photoURL });
    } catch (error) {
      setLoading(false);
      const newErrors = [
        ...errors,
        {
          message: error.message
        }
      ];
      dispatch({
        type: "CHANGE_ERRORS_STATE",
        errors: newErrors
      });
    }
  };

  return (
    <Button onClick={googleAuthHandler} variant="outline-light">
      <img style={{ width: 20 }} src={googleSvg} alt="" />
    </Button>
  );
};

export default GoogleAuthButton;
