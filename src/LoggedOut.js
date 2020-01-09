import React, { useEffect, useState } from 'react';
import {
  InputGroup,
  FormControl,
  Container,
  Button,
  Tabs,
  Tab,
  Col
} from 'react-bootstrap';
import { useAppState } from './app-state';
import googleSvg from './assets/google.svg';
import { db, googleAuthProvider } from './firebase';

function Login() {
  const [{ user }, dispatch] = useAppState();

  
  async function googleAuthHandler() {
    const { user } = await googleAuthProvider();
    const { displayName, email, uid, photoURL } = user;
    dispatch({ type: 'CHANGE_AUTH_STATE', auth: { displayName, email, uid, photoURL } });
  }

  return (
    <Container>
      <Col xs={{ span: 6, offset: 3 }}>
        <Tabs defaultActiveKey="register">
          <Tab title="Register" eventKey="register">
            <div>
              <label htmlFor="name">Name</label>
              <InputGroup>
                <FormControl id="name" aria-label="User name" type="text" />
              </InputGroup>
            </div>
            <div>
              <label htmlFor="email_register">Email</label>
              <InputGroup>
                <FormControl
                  id="email_register"
                  aria-label="User email"
                  type="email"
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
                />
              </InputGroup>
            </div>
            <Button onClick={googleAuthHandler} variant="outline-light">
              <img style={{ width: 20 }} src={googleSvg} alt="" />
            </Button>
            <Button variant="primary">Register</Button>
          </Tab>
          <Tab title="Login" eventKey="login">
            <div>
              <label htmlFor="email_login">Email</label>
              <InputGroup>
                <FormControl
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
                  id="password_login"
                  aria-label="User password"
                  type="password"
                />
              </InputGroup>
            </div>
            <Button variant="primary">Login</Button>
          </Tab>
        </Tabs>
      </Col>
    </Container>
  );
}

export default Login;
