import React from 'react';
import { Container, Tabs, Col, Tab } from 'react-bootstrap';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { useAppState } from './app-state';

function Login() {
  const [{loggLoading}] = useAppState();

  return (
    <Container style={loggLoading ? {opacity: 0.5} : {}}>
      <Col xs={{ span: 6, offset: 3 }}>
        <Tabs defaultActiveKey="register">
          <Tab title="Register" eventKey="register">
            <RegisterForm />
          </Tab>
          <Tab title="Login" eventKey="login">
            <LoginForm />
          </Tab>
        </Tabs>
      </Col>
    </Container>
  );
}

export default Login;
