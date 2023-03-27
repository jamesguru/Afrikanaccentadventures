import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartpackage",
  initialState: {
    packages: [],

    quantity: 1,

    total: 0,
  },

  reducers: {
    addPackage: (state, action) => {
      state.quantity += 1;

      state.packages.push(action.payload);

      state.total += action.payload.price * action.payload.quantity;
    },

    removePackage: (state) => {
      state.packages = [];

      state.quantity = 0;

      state.total = 0;
    },
  },
});

export const { addPackage, removePackage } = cartSlice.actions;

export default cartSlice.reducer;
