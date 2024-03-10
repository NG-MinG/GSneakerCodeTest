const shoppingCart = {
    save(data) {
        localStorage.setItem('carts', JSON.stringify(data));
    },

    get() {
        const carts = localStorage.getItem('carts');
        return carts && Object(carts) ? JSON.parse(carts) : null;
    },

    calcTotalPrice() {
        const carts = this.get();
        let totalPrice = 0;

        if (carts) {
            totalPrice = carts.reduce((acc, curr) => {
                return acc + curr.price * curr.amount;
            }, 0);
        }

        return totalPrice.toFixed(2);
    },

    clear() {
        localStorage.removeItem('carts');
    },
};

export default shoppingCart;
