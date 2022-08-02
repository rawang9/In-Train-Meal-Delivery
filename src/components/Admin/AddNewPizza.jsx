import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addPizza } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../Loader";
import Error from "./../Error";
import Success from "./../Success";
const AddNewPizza = () => {
  const [trainNo, settrain] = useState("");
  const [itemId, setitemId] = useState("");
  const [itemName, setname] = useState("");
  const [itemQuantity, setQuantity] = useState();
  const [itemCost, setPrice] = useState();
  

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();
  const Train_numb = localStorage.getItem("train_nu")
  ? JSON.parse(localStorage.getItem("train_nu"))
  : {};
  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      trainNo:Train_numb,
      itemId,
      itemName,
      itemQuantity,
      itemCost,
    };
    dispatch(addPizza(pizza));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="Pizza Added Successfully" />}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={itemName}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="int"
                value={itemCost}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                placeholder="Enter Price"
              />
            </Form.Group>

          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>ItemID</Form.Label>
            <Form.Control
              type="text"
              value={itemId}
              onChange={(e) => setitemId(e.target.value)}
              placeholder="Enter item_Id"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="int"
            value={itemQuantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            placeholder="Enter Available Quantity"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddNewPizza;
