import React, { useState } from "react";
import { Container, Nav, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { pnrUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

const Registe = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const pnrhandler = () => {
    if (name === "") {
      alert("PNR didnt exist");
    } else {
      const user = { name };
      //console.log(user);
      dispatch(pnrUser(user));
    }
  };
  return (
    <>
      <Container>
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="somthing went wrong" />}
        <Form>
          <br /><br /><br />
          <h1>Enter Your PNR </h1>
          <Form.Group className="mb-3" controlId="formBasicName">
          <br />
            <Form.Control
              type="number"
              placeholder="Enter your 10-digit PNR"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group> 

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" onClick={pnrhandler}>
            Proceed
          </Button>
        </Form>
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/adminlogin">Administrator Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};

export default Registe;
