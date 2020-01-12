import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "./../../utils";
import { useAppState } from "../../app-state";

export default function LoginForm() {
  const [{ errors }, dispatch] = useAppState();

  async function emailPaswordLoginHandler(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {
      email: formElements.email_login.value,
      password: formElements.password_login.value
    };

    try {
      await signInWithEmailAndPassword(data);
    } catch (error) {
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
  }

  return (
    <form onSubmit={emailPaswordLoginHandler}>
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
