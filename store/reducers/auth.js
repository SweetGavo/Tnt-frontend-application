import {createSlice} from "@reduxjs/toolkit";
import {STORAGENAME} from "../../utils/textHelper";


const auth = createSlice({
    name:'auth',
    initialState:{
        isLogin: false,
        user: null
    },
    reducers:{
        loginUser:(state,{payload:{user}})=>{
            state.isLogin = true;
            state.user = user;
            localStorage.setItem(STORAGENAME,JSON.stringify(user));
        },
        logoutUser:(state)=>{
            state.isLogin = false;
            state.user = null;
            localStorage.removeItem(STORAGENAME);
        },
        setUser:(state,{payload})=>{
            state.isLogin = payload.isLogin;
            state.user = payload.user;
        }
    }
})

export const {loginUser,logoutUser,setUser} = auth.actions;
export default auth.reducer;