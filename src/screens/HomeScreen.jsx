import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas, getPizzaById } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import NavBar from "../components/NavBar";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getPizzaByIdReducer);
  const pnrUserState = useSelector((state) => state.pnrUserReducer);

  const pnrUser = localStorage.getItem("pnrUser")
    ? JSON.parse(localStorage.getItem("pnrUser"))
    : {};

  const { loading, pizza, error } = pizzastate;
  //console.log(pizza);
  //console.log(loading);
  useEffect(() => {
    if (pnrUser.trainNo) {
      dispatch(getPizzaById(pnrUser.trainNo));
    }
  }, [dispatch]);
  // console.log(typeof(pizza));
  // console.log(pizza);
  // : error ? (
  //   <Error>Error while fetching Meals {error}</Error>
  // )
  return (
    <>
      <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error> {window.location.href="/"}</Error>
      ) : (
          <Row>
            <NavBar />
            {pizza.map((pizz) => (
              <Col md={4} key={pizz.name}>
                <Pizza pizz={pizz} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
