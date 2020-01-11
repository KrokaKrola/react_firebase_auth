import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {createUserWithEmailAndPassword, setDoc} from './../../utils';
import GoogleAuthButton from './components/GoogleAuthButton';

export default function LoginForm() {
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
      <GoogleAuthButton />
      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  );
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
  setDoc(`/users/${userObject.uid}`, {
    displayName: data.displayName,
    email: data.email,
    uid: userObject.uid
  });
}