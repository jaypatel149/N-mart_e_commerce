// reducer.js

const initialState = {
  carts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex !== -1) {
        const updatedCart = [...state.carts];
        updatedCart[ItemIndex].quantity++;

        return {
          ...state,
          carts: updatedCart,
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload, quantity: 1 }],
        };
      }

    case "DELETE_CART":
      return {
        ...state,
        carts: state.carts.filter((product) => product.id !== action.payload),
      };


      case "INCREMENT_QUANTITY":
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case "DECREMENT_QUANTITY":
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload.productId && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };


    default:
      return state;
  }
};

export default reducer;
