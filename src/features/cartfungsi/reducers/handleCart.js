const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check  if product is Already Exist
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        // Increase the quantity
        return state.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          }
        ]
      }
    case "DELETEITEM":
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.filter((item) => item.id === product.id ? { ...item, qty: item.qty } : item);
      }
    default:
      return state;
  }
}

export default handleCart;