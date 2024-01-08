import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  //enums
});
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};
const productSlice = createSlice({
  name: "product",
  initialState,

  //Normal Async Method
  reducers: {
    //   setProducts(state, action) {
    //     state.data = action.payload;
    //   },
    //   setStatus(state, action) {
    //     state.status = action.payload;
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export default productSlice.reducer;
export const { setProducts, setStatus } = productSlice.actions;

//Asynchronous function call
//Normal Method
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const url = "https://fakestoreapi.com/products";
//       let response = await fetch(url);
//       response = await response.json();
//       if (response) {
//         dispatch(setProducts(response));
//         dispatch(setStatus(STATUSES.IDLE));
//       }
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

//Create async thunk method
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const url = "https://fakestoreapi.com/products";

  let response = await fetch(url);
  response = await response.json();
  return response;
});
