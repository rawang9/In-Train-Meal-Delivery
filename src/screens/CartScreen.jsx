import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import NavBar from "../components/NavBar";
import swal from "sweetalert";
const forwarder = () => {
  window.location.href = "/home";
};
const place_ord = (rate) => {
  localStorage.setItem("totalprice",rate);
  window.location.href = "/orders";
};
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  if(cartItems.length>0){
    return (
    <>
      <Container>
        <NavBar />
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>{item.itemName}</h5>
                    <h6>
                      {" "}
                      Price : {item.quantity} X {item.itemCost} = {item.price}
                    </h6>

                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(addToCart(item, item.quantity - 1));
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(addToCart(item, item.quantity + 1));
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={process.env.PUBLIC_URL + `/images/${item.image}.jpg`}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total - Pay on delivery</h4>
            <h4>RS : {subTotal} /-</h4>
            {/* <Checkout subTotal={subTotal} /> */}
            <Button onClick={() => place_ord(subTotal)}
              >
              Place Order
            </Button>
            {/* <Button
           onClick={() => OrderPlaced()}>Place Order</Button> */}
          </Col>
        </Row>
      </Container>
    </>
  );
  }else{
    localStorage.removeItem("cartItems");
    //console.log('localStorage');
    return (
    <>
      <Container>
        <NavBar />
        <Row>
          <Col md={6}><br />
            <h1>My Cart</h1><br />
            <h4 style={{color:"red"}} >Your Cart is Empty please add to continue....</h4>
            <br />
            <Button onClick={forwarder}>
              Go Back to Order Menu
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
  };
};

export default CartScreen;
