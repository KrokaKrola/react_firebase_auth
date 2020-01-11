import React from "react";
import { Button } from "react-bootstrap";
import { googleAuthProvider } from "../../../../firebase";
import { setDoc } from "../../../../utils";
import googleSvg from "../../../../assets/google.svg";

const GoogleAuthButton = () => {
  return (
    <Button onClick={googleAuthHandler} variant="outline-light">
      <img style={{ width: 20 }} src={googleSvg} alt="" />
    </Button>
  );
};

async function googleAuthHandler() {
  const { user: userObject } = await googleAuthProvider();
  const { displayName, email, uid, photoURL } = userObject;
  setDoc(`/users/${uid}`, { displayName, email, uid, photoURL });
}

export default GoogleAuthButton;
