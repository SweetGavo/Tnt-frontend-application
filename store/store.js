import {configureStore} from "@reduxjs/toolkit";
import auth from  "../store/reducers/auth";
import {createWrapper} from "next-redux-wrapper";
import cart from "./reducers/cart";

export const store = configureStore({
    reducer:{
        auth: auth,
        cart: cart
    }
})
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);