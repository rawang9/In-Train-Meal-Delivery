import axios from "axios";
import swal from "sweetalert";
import { getPizzaById } from "./pizzaAction";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const pnrUser = (user) => async (dispatch) => {
  //  const a= `https://umeedbackend.herokuapp.com/api/v1/teacher/info/?batch=2024`
  const pnr = user.name;
  //console.log(pnr);
  dispatch({ type: "PNR_FETCH_REQUEST" });

  try {
    const response = await axios.get(
      `https://e-catering-pnr-service.herokuapp.com/api/pnrinfo/${pnr}`
    );
    //console.log(response.data);

    dispatch({ type: "PNR_FETCH_SUCCESS", payload: response.data });
    localStorage.setItem("pnrUser", JSON.stringify(response.data));
    // console.log(JSON.parse(localStorage.getItem("pnrUser")));
    //console.log(localStorage.getItem("pnrUser"));
    window.location.href = "/home";
  } catch (error) {
    //console.log("kuldeep 3", error);
    dispatch({ type: "PNR_FETCH_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  const uid = user.email;
  const passw = user.password;
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.get('https://e-catering-admin-service.herokuapp.com/api/admin/login/'+uid+'/'+passw);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("train_nu",response.data.trainno);
    localStorage.setItem("uname", JSON.stringify(response.data.name));
    localStorage.setItem("role", JSON.stringify(response.data.role));
    if(response.data.role=="admin"){ window.location.href = "/adminpage";}
    else if(response.data.role=="Manager"){ window.location.href = "/admin/pizzalist";}
    else {window.location.href = "/delivery";}
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    swal("User Not Deleteded", "Failed");
  }
};
export const logout = () => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("totalprice");
  localStorage.removeItem("totalprice");
  window.location.href = "/";
};
export const logoutUser = () => {
  localStorage.removeItem("uname");
  localStorage.removeItem("role");
  localStorage.removeItem("train_nu");
  window.location.href = "/adminlogin";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get("/api/users/getallusers");
    // console.log(response.data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userid });
    swal("User Deleted Succss!", "success");
    window.location.reload();
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};
