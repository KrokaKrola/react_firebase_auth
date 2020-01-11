import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from './../../utils';

export default function LoginForm() {

  return (
    <form onSubmit={emailPaswordLoginHandler} >
      <div>
        <label htmlFor="email_login">Email</label>
        <InputGroup>
          <FormControl
            required={true}
            id="email_login"
            aria-label="User email"
            type="email"
          />
        </InputGroup>
      </div>
      <div>
        <label htmlFor="password_login">Password</label>
        <InputGroup>
          <FormControl
            required={true}
            id="password_login"
            aria-label="User password"
            type="password"
          />
        </InputGroup>
      </div>
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
}

function emailPaswordLoginHandler(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const data = {
    email: formElements.email_login.value,
    password: formElements.password_login.value
  };
  signInWithEmailAndPassword(data);
}