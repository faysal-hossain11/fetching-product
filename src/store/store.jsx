import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../feathers/Products/ProductSlice";


const store = configureStore({
    reducer: {
        products: ProductReducer
    }
});

export default store;