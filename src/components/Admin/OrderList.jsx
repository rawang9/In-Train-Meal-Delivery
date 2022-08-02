import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "./../../actions/orderAction";
import { Table, Button } from "react-bootstrap";
import Loader from "./../Loader";
import Error from "./../Error";
import { Row, Col, Container} from "react-bootstrap";
import { Wrapper, Details, Name, Role} from "../../Page/page.style";
import { logoutUser } from "../../actions/userAction";
const OrderList = () => {
  const dispatch = useDispatch();
  const allOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const train_numb = localStorage.getItem("train_nu")
    ? JSON.parse(localStorage.getItem("train_nu"))
    : {};
  useEffect(() => {
    dispatch(getAllOrders(train_numb));
  }, [dispatch]);
  //login details
  const [details, setDetails] = useState({
    Name : localStorage.getItem("uname")
    ? JSON.parse(localStorage.getItem("uname"))
    : {},
    Role: localStorage.getItem("role")
    ? JSON.parse(localStorage.getItem("role"))
    : {}
});
if(localStorage.getItem("role")==='"Manager"'){logoutUser()};
  return (
    <div>
      <Wrapper>
            <Details>
                <tbody>
                    <tr>
                    <Name>Name: {details.Name}</Name>
                    <Role>Role: {details.Role}</Role>
                    <td><Button onClick={logoutUser}>Logout</Button></td>
                    </tr>
                </tbody>
            </Details>
        </Wrapper>
      <Container><Row><h1 className="text-center bg-dark text-light p-2">Delivery Panel</h1></Row></Container>
      <h1>Order Lists</h1>
      {loading && (<Loader />)}
      {error && (<Error error="Admin Order req fail" />)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Train no.</th>
            <th>Name and Seat No.</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.trainNo}</td>
                <td>{order.passengerNameAndSeatNo}</td>
                <td>{order.orderStatus}</td>
                <td>
                  {" "}
                  {order.isDeliverd ? (
                    <h6 className="text-success">Deliverd</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order.orderId));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
