import React from 'react'
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onchange = (e) => {
    if(e.target.name === "email"){
      setEmail(e.target.value);
    }else if(e.target.name === "password"){
      setPassword(e.target.value);
    }
  }

  const login = () => {
    if(email === "user@gmail.com" && password === "user"){
      props.setIsAuth(true);
      localStorage.setItem("react-music-site-login-flag", true);
    } else {
      alert('Email & Password is wrong')
      alert(email)
    }
  }
  
  return (
    <Row>
      <Col xs="4" className="offset-md-4 mt-5">
        <Card className="p-5 bg-info">
          <h2 className="text-center">Login</h2>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={email} onChange={onchange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" defaultValue={password} onChange={onchange} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <div className="text-center">
              <Button variant="primary" type="button" onClick={login}>
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login;