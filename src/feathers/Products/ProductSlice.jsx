import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
});

const productSlice = createSlice({
    name: "product",
    initialState:{
        isLoding: false,
        products: [],
        error: null
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoding = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoding = false;
            state.products = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoding = false;
            state.products = [];
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;