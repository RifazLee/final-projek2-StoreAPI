import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.unshift(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      alert("Product Add to Cart");
      window.location.replace("/cart")
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload.title
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      alert("Remove product  from Cart");
      
    }
  },
});

export const { addToCart, removeFromCart, addCart } = cartSlice.actions;

export default cartSlice.reducer;
