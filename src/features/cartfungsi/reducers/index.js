import { combineReducers } from "@reduxjs/toolkit";
import handleCart from "./handleCart";

const rootRedusers = combineReducers({
  handleCart,
})

export default rootRedusers;