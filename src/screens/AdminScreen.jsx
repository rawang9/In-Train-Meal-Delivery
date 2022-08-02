import React, { useEffect,useState } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";
import { Wrapper, Details, Name, Role} from "../Page/page.style";
import { logoutUser } from "../actions/userAction";
const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  /*useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);*/
  //login details
  const [details, setDetails] = useState({
    Name : localStorage.getItem("uname")
    ? JSON.parse(localStorage.getItem("uname"))
    : {},
    Role: localStorage.getItem("role")
    ? JSON.parse(localStorage.getItem("role"))
    : {}
});
if(localStorage.getItem("role")==='"Delivery"'){logoutUser()};
  return (
    <>
      <Container>
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
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Meal Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              {/* <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button> */}
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Meals
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add <br /> and Update  Meal
              </Button>
              {/* <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button> */}
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              {/* <Route path="/admin" component={Userlist} exact /> */}
              {/* <Route path="/admin/userlist" component={Userlist} exact /> */}
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzalist" component={Pizzaslist} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
