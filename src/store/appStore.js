import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice"
console.log(cartReducer, "CArt Reduce")
const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
}); 

export default appStore;