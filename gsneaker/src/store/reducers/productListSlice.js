import { createSlice } from '@reduxjs/toolkit';
import shoppingCart from '../../utils/storage';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        shoes: [],
        loading: true,
    },
    reducers: {
        init: (state, action) => {
            state.loading = true;
            const products = action.payload.map((el) => ({ ...el, addedToCart: false }));
            const carts = shoppingCart.get();

            if (carts && carts.length > 0) {
                products.forEach((product, index) => {
                    carts.forEach((cart) => {
                        if (cart.id === product.id) {
                            products[index].addedToCart = true;
                        }
                    });
                });
            }
            return {
                shoes: products,
                loading: false,
            };
        },
        update: (state, action) => {
            const { id, status } = action.payload;
            const productIndex = state.shoes.findIndex((el) => el.id === id);
            if (productIndex !== -1) state.shoes[productIndex].addedToCart = status;
        },
    },
});

export const { init, update } = productSlice.actions;
export default productSlice.reducer;
