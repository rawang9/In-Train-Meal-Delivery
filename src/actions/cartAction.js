export const addToCart = (pizza, quantity) => (dispatch, getState) => {
  // console.log(pizza);
  // console.log(quantity);
  // console.log(typeof(pizza.itemCost));
  var cartItem = {
    itemName: pizza.itemName,
    itemId: pizza.itemId,
    image: pizza.itemId,
    quantity: Number(quantity),
    itemCost: Number(pizza.itemCost),
    price: pizza.itemCost * quantity,
  };
  // console.log("quantity");
  // console.log(typeof(cartItem.prices));

  if (cartItem.quantity > 10) {
    alert("you Can only add 10 pizzas");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      //console.log(JSON.stringify(getState().cartReducer.cartItems));
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartitems;
  // console.log("hehe");
  // console.log(cartItems.length>0);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
