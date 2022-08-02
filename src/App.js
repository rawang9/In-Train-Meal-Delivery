import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registe from "./screens/Registe";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import Administrator from "./Page/page.js"
import Delivery_panel from "./components/Admin/OrderList"
function App() {
  return (
    <BrowserRouter>
      <TopBar />
    
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/adminlogin" component={Login} exact />
        <Route path="/" component={Registe} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/home" component={HomeScreen} />
        <Route path="/adminpage" component = {Administrator} />
        <Route path="/delivery" component = {Delivery_panel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
