import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducer,
  pnrUserReducer,
} from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  allUserOrdersReducer,
  getAllOrdersReducer,
} from "./reducers/orderReducer";
import CartScreen from "./screens/CartScreen";
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
: [];
//console.log(cartItems);
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const pnrUser = localStorage.getItem("pnrUser")
  ? JSON.parse(localStorage.getItem("pnrUser"))
  : {};
//console.log(pnrUser.trainNo, "kuldeep");
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  pnrUserReducer: pnrUserReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  getAllOrdersReducer: getAllOrdersReducer,
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
  pnrUserReducer: {
    pnrUser: pnrUser,
  },
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
