import React, { forwardRef, useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import NavBar from "../components/NavBar";
import { Container,Table, Button } from "react-bootstrap";
const forwarder1 = () => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("totalprice");
  window.location.href = "/home";
};
const passngerDetail = JSON.parse(localStorage.getItem("pnrUser"));
if(passngerDetail!== null){
  var user_order = {                                    
    "orderId": "oid"+Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)+0),
    "trainNo": passngerDetail.trainNo,
    "passengerNameAndSeatNo": passngerDetail.passengerName +','+passngerDetail.seatNo,
    "orderStatus": "Pending"
  };
};
const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders(user_order));
  }, [dispatch]);
  // console.log("doggy");
  // console.log(typeof(orders));
  // console.log(orders);
  return (
    <Container>
    <NavBar />
      <h1 className="text-center ">Your Orders</h1>
      <br />
      {loading && (<Loader />)}
      {error && (<Error error="Order page fail" />)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity (pcs)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
      { orders.map((order) => (
          <tr>
                <td>{order.itemName}</td>
                <td>Rs. {order.itemCost}</td>
                <td>{order.quantity} pcs.</td>
                <td>Rs. {order.price}</td>
              {/* <Col md={5}>
                <h4>Order Info :</h4>
                <h6>Order Amount : {12}</h6>
                <h6>Order id : {user_order.orderId}</h6>
              </Col> */}
          </tr>
    ))}<br />
                <tr>
                <td>{<Button onClick={forwarder1}>Go Back to Order Menu.</Button>}</td>
                <td></td>
                <td style={{fontWeight: 'bold'}}>TotalAmount to be Paid</td>
                <td style={{fontWeight: 'bold'}}>Rs. {localStorage.getItem("totalprice")}</td>
                </tr>
        </tbody>
      </Table>
      <br />
      <h5>Your order_Id is : # {user_order.orderId}</h5>
      <br />
      <h3 style={{color:"skyblue"}}>Tranks for using N.E. Railway In-Train Meal Delivery. <br />Have a Happy 
      Journey.</h3>
      
    </Container>
  );
};

export default OrderScreen;
