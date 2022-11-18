// for add to cart
export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: product
    }
  }
  // for delete item from cart
  export const deleteCart = (product) => {
    return {
      type: "DELETEITEM",
      payload: product
    }
  }