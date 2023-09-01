import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from "uuid";

const initialState = {
    burgers: [],
    cartCount: 0,
};

const burgerSlice = createSlice({
    name: "burgers",
    initialState,
    reducers: {
        addBurger(state, action) {
            state.burgers.push({...action.payload, id: uuidv4()});
        },
        deleteBurger(state, action){
            state.burgers = state.burgers.filter((burger) => burger.id !== action.payload.id);
        },
        updateBurger(state, action){
            state.burgers = state.burgers.map((burger) => burger.id === action.payload.id ? action.payload : burger);
        },
        addToCart(state, action) {
            state.cartCount++;
        },
        updateCart(state, action) {
            state.burgers = state.burgers.map((burger) => burger.qty === action.payload.qty ? action.payload : burger);
        }
    }
});

export const {addBurger, deleteBurger, updateBurger, addToCart, updateCart} = burgerSlice.actions

export default  burgerSlice.reducer;