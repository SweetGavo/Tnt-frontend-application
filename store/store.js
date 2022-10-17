import {configureStore} from "@reduxjs/toolkit";
import auth from  "../store/reducers/auth";
import {createWrapper} from "next-redux-wrapper";

export const store = configureStore({
    reducer:{
        auth: auth
    }
})
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);