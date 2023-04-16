// add item cart 
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};


// delete item cart

export const deleteCart = (productId) => ({
  type: "DELETE_CART",
  payload: productId,
});


export const incrementQuantity = (productId) => ({
  type: "INCREMENT_QUANTITY",
  payload: { productId },
});

export const decrementQuantity = (productId) => ({
  type: "DECREMENT_QUANTITY",
  payload: { productId },
});
