import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItme: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // return { items: []} => both are same. its clear the cart 
        }
    }
})

export const {addItem, removeItme, clearCart} = cartSlice.actions;

export default cartSlice.reducer;