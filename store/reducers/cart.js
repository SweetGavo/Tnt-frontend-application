import {createSlice} from "@reduxjs/toolkit";
import {CARTNAME} from "../../utils/textHelper";

const initialState = {
    items:{},
    itemsId:[]
};

function saveToMemory(state){
    const {items,itemsId} = state;
    window.localStorage.setItem(CARTNAME,JSON.stringify(state));
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addItem(state,{payload:{product}}){
            const {_id} = product;
            if(!(_id in state.items)){
                state.items[_id] = product;
                state.itemsId.push(_id);
                saveToMemory(state)
            }
        },
        removeItem(state,{payload:{product}}){
            const {_id} = product;
            if(_id in state.items){
                delete state.items[_id];
                const prevsId = [...state.itemsId];
                state.itemsId = prevsId.filter(itm=>itm != _id);
                saveToMemory(state);
            }
        },
        clearCart(state){
            state.items = {};
            state.itemsId = [];
        },
        changeQuantity(state,{payload}){
            const {productId,quantity} = payload;
            console.log(productId);
            if(productId in state.items){
                const item = {...state.items[productId]};
                item.quantity += quantity;
                if(item.quantity > 0){
                    state.items[productId] = item;
                    saveToMemory(state);
                }
            }
        },
        getFromMemory(state){
           const item = window.localStorage.getItem(CARTNAME) || JSON.stringify(initialState);
           const {items,itemsId} = JSON.parse(item);
           state.items = items;
           state.itemsId = itemsId;
        }
    }
})

export const {getFromMemory,addItem,removeItem,clearCart,changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;