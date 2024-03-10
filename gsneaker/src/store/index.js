import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productListSlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer,
    },
});

export default store;
