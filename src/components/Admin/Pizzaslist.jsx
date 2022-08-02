import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas,getPizzaById } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getPizzaByIdReducer);
  const { loading, pizza, error } = pizzastate;
 
  const train_numb = localStorage.getItem("train_nu")
    ? JSON.parse(localStorage.getItem("train_nu"))
    : {};
  useEffect(() => {
    dispatch(getPizzaById(localStorage.getItem("train_nu")));
  }, [dispatch]);
  return (
    <>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching Meal {window.location.href="/adminlogin"}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Item Quantity</th>
                <th>Prices</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizza &&
                pizza.map((pizza) => (
                  <tr>
                    <td>
                      <img
                        src={process.env.PUBLIC_URL + `/images/${pizza.itemId}.jpg`}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{pizza.itemId}</td>
                    <td>{pizza.itemName}</td>
                    <td>{pizza.itemQuantity} pcs</td>
                    <td>Rs. {pizza.itemCost}</td>
                    <td>
                      {/* <Link to={`/admin/editpizza/${pizza.itemId}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link> */}
                      &nbsp;
                      <AiFillDelete
                        FaThumbsDown size={30}
                        style={{ color: "red", cursor: "pointer",size:70 }}
                        onClick={() => {
                          dispatch(deletePizza(pizza.itemId));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Pizzaslist;
