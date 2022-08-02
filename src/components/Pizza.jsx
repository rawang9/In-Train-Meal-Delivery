import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizz }) => {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizz, quantity));
  };
  //console.log(pizz);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px",backgroundColor: "lightgray" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + `/images/${pizz.itemId}.jpg`}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title><b>{pizz.itemName}</b></Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}></Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizz.itemCost * quantity} /-RS</Col>
            <Col md={6}>
              <Button
                onClick={addToCartHandler}
                className="bg-warning text-white"
              >
                Add to cart
              </Button>
            </Col>
          </Row>
          
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizz.itemName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + `/images/${pizz.itemId}.jpg`}
              style={{ height: "250px" }}
            />
          </div>
          <div>
            <h3 style={{textAlign:"center"}}>In-Train Fresh Meal.</h3>
            <h6>{pizz.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
