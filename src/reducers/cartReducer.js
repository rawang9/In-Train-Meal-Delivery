export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //console.log(action.payload);
      const alreadyExists = state.cartItems.find(
        (item) => item.itemId === action.payload.itemId
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.itemId === action.payload.itemId ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.itemId !== action.payload.itemId
        ),
      };
    default: return state;
  }
};
