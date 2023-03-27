import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],

    quantity: 0,

    total: 0,
  },

  reducers: {
    addPackage: (state, action) => {

      
      state.quantity += 1;

      state.products.push(action.payload);

      state.total += action.payload.price * action.payload.quantity;

     
    },

    removePackage: (state) => {
      state.products = [];

      state.quantity = 0;

      state.total = 0;
    },
  },
});

export const { addPackage, removePackage } = cartSlice.actions;

export default cartSlice.reducer;
