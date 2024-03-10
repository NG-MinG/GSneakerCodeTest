import { createSlice } from '@reduxjs/toolkit';
import shoppingCart from '../../utils/storage';

const cart = createSlice({
    name: 'carts',
    initialState: {
        carts: shoppingCart.get() ?? [],
        newItems: [],
        totalPrice: shoppingCart.calcTotalPrice() ?? 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const data = action.payload;

            const idx = state.carts.findIndex((item) => item.id === data.id);
            if (idx === -1) {
                state.carts.push({
                    ...data,
                    addedToCart: true,
                    amount: 1,
                });

                state.newItems.push(data.id);

                shoppingCart.save(state.carts);
                state.totalPrice = shoppingCart.calcTotalPrice();
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            const idx = state.carts.findIndex((item) => item.id === id);

            if (idx !== -1) {
                state.carts = state.carts.filter((item) => item.id !== id);

                shoppingCart.save(state.carts);
                state.totalPrice = shoppingCart.calcTotalPrice();
            }
        },

        updateCart: (state, action) => {
            const { id, amount } = action.payload;

            const idx = state.carts.findIndex((item) => item.id === id);
            if (idx !== -1) {
                state.carts[idx].amount = amount;

                shoppingCart.save(state.carts);
                state.totalPrice = shoppingCart.calcTotalPrice();
            }
        },

        clearNewItems: (state) => {
            state.newItems = [];
        },
    },
});

export const { addToCart, removeFromCart, updateCart, clearNewItems } = cart.actions;
export default cart.reducer;
