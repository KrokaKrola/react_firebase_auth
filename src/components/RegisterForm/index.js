import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import googleSvg from './../../assets/google.svg';
import { googleAuthProvider, createUserWithEmailAndPassword, setUser} from './../../firebase';
import { useAppState } from './../../app-state';

export default function LoginForm() {
  // const [, dispatch] = useAppState();

  async function googleAuthHandler() {
    const { user: userObject } = await googleAuthProvider();
    // const { displayName, email, uid, photoURL } = userObject;
    // dispatch({
    //   type: 'CHANGE_AUTH_STATE',
    //   auth: { displayName, email, uid, photoURL }
    // });
    setUser(userObject)
  }

  async function emailPaswordRegisterHandler(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {
      displayName: formElements.name.value,
      email: formElements.email_register.value,
      password: formElements.password_register.value
    }
    const userObject = await createUserWithEmailAndPassword(data);
    setUser({
      ...data,
      uid: userObject.uid
    });
  }

  return (
    <form onSubmit={emailPaswordRegisterHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <InputGroup>
          <FormControl
            id="name"
            aria-label="User name"
            type="text"
            required={true}
          />
        </InputGroup>
      </div>
      <div>
        <label htmlFor="email_register">Email</label>
        <InputGroup>
          <FormControl
            id="email_register"
            aria-label="User email"
            type="email"
            required={true}
          />
        </InputGroup>
      </div>
      <div>
        <label htmlFor="password_register">Password</label>
        <InputGroup>
          <FormControl
            id="password_register"
            aria-label="User password"
            type="password"
            required={true}
          />
        </InputGroup>
      </div>
      <Button onClick={googleAuthHandler} variant="outline-light">
        <img style={{ width: 20 }} src={googleSvg} alt="" />
      </Button>
      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  );
}
