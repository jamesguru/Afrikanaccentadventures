import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import { publicRequest } from "../requestMethods";

import { loginStart, loginSuccess, loginFailure } from "./user";

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get("/packages");

    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());

  try {
    const res = await publicRequest.delete(`/packages/${id}`);

    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());

  try {
    dispatch(updateProductSuccess(id, product));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (Package, dispatch) => {
  dispatch(addProductStart());

  try {
    const res = await publicRequest.post("/packages/", Package);

    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login/", user);

    console.log(res.data);

    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
