import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  cart: [],
  cartTotal: null,
};

export const getCartItems = createAsyncThunk("cart/get", async (userId) => {
  const res = await axios
    .get(`${baseUrl}/cart/${userId}`, { withCredentials: true })
    .then((res) => res)
    .catch((err) => console.log({ err }));

  return res.data;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ userId, productId }) => {
    const res = await axios
      .post(
        `${baseUrl}/cart/${userId}`,
        { product: productId },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);
export const incrementCartQuantity = createAsyncThunk(
  "cart-quantity/increment",
  async (item) => {
    const res = await axios
      .put(
        `${baseUrl}/cart/product/quantity/${item._id}`,
        { quantity: item.quantity + 1 },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);

export const decrementCartQuantity = createAsyncThunk(
  "cart-quantity/decrement",
  async (item) => {
    const res = await axios
      .put(
        `${baseUrl}/cart/product/quantity/${item._id}`,
        { quantity: item.quantity - 1 },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart-item/delete",
  async (item) => {
    const res = await axios
      .delete(`${baseUrl}/cart/${item._id}`, { withCredentials: true })
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);

function calculateCartTotal(cart) {
  let total = 0;

  for (const item of cart) {
    if (item.product.sale_price !== null) {
      total += item.product.sale_price * item.quantity;
    } else {
      total += item.product.regular_price * item.quantity;
    }
  }

  return total;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cart = action.payload;
      const total = calculateCartTotal(state.cart);
      state.cartTotal = total;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const isExist = () => {
        let isTrue;
        state.cart.forEach((item, index) => {
          if (item.product._id === action.payload.product._id) {
            isTrue = true;
          }
        });
        return isTrue;
      };

      if (isExist()) {
        return;
      } else {
        state.cart = [...state.cart, action.payload];
      }
      const total = calculateCartTotal(state.cart);
      state.cartTotal = total;
    });
    builder.addCase(incrementCartQuantity.fulfilled, (state, action) => {
      state.cart.forEach((item, index) => {
        if (item._id == action.payload._id) {
          state.cart[index] = action.payload;
        }
      });
      const total = calculateCartTotal(state.cart);
      state.cartTotal = total;
    });
    builder.addCase(decrementCartQuantity.fulfilled, (state, action) => {
      state.cart.forEach((item, index) => {
        if (item._id == action.payload._id) {
          state.cart[index] = action.payload;
        }
      });
      const total = calculateCartTotal(state.cart);
      state.cartTotal = total;
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      const newCartArray = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      state.cart = newCartArray;
      const total = calculateCartTotal(state.cart);
      state.cartTotal = total;
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
