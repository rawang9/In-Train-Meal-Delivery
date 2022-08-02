import axios from "axios";
import swal from "sweetalert";
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    await axios.post("/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    // console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};

export const getUserOrders = (user_order) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  // console.log(user_order);
  // console.log("Enter",user_order);
  dispatch({type: "USER_ORDER_REQUEST",});
  try {
    const response = await axios.post("https://e-catering-order-service.herokuapp.com/api/create/order", user_order);
    const orders = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
    //console.log("placed");
    dispatch({ type: "USER_ORDER_SUCCESS", payload: orders });
  } catch (error) {
    //console.log("error in placing order");
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};
export const getAllOrders = (trainNo) => async (dispatch, getState) => {
 // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({type: "ALL_ORDER_REQUEST"});
  try {
    const response = await axios.get('https://e-catering-order-service.herokuapp.com/api/order/'+trainNo+'/Pending');
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
    alert("TRAIN didnt exist");
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
    // console.log("error");
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({type: "GET_ALL_ORDER_REQUEST"});
  try {
    await axios.put("https://e-catering-order-service.herokuapp.com/api/update/order/" + orderid +'/Delivered');
    swal("Deliverd Success : "+ orderid, "success");
    const orders = await axios.get("https://e-catering-order-service.herokuapp.com/api/order/"+orderid);
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.href = "/delivery";
  } catch (error) {
    //console.log("error");
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};
