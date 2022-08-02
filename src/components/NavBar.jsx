import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Col,
  Form,

  
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout, logoutUser } from "../actions/userAction";
const NavBar = () => {
  const dispatch = useDispatch();

  const pnrUserState = useSelector((state) => state.pnrUserReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { pnrUser } = pnrUserState;
  //console.log(pnrUser);
  const { currentUser } = userState;
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div><b>
            <Form>
              <Row>
                <Col xs={5}>Name : {pnrUser.passengerName}</Col>
                <Col xs={4}>PNR : {pnrUser.pnrNo}</Col>
                <Col xs={3}>SeatNo : {pnrUser.seatNo}</Col>
                <Col xs={4}>TrainNo : {pnrUser.trainNo}</Col>
              </Row>
            </Form>
            </b>
            <NavDropdown.Item
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser && (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              )}
              
              <LinkContainer to="/cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
