import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import ShopItem from '../components/ShopItem';
import CartItem from '../components/CartItem';
import Loading from '../components/Loading';
import { init, update } from '../store/reducers/productListSlice';
import { addToCart, clearNewItems, removeFromCart, updateCart } from '../store/reducers/cartSlice';

const ProductCard = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products);

    console.log('render Product');

    useEffect(() => {
        fetch('./data/shoes.json')
            .then((res) => res.json())
            .then((jsonData) => dispatch(init(jsonData.shoes)))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Card title="Our Products">
            <>
                {!data.loading ? (
                    data.shoes && data.shoes?.length > 0 ? (
                        data.shoes.map((shoe) => (
                            <ShopItem
                                item={shoe}
                                key={shoe.id}
                                onAddToCart={(item) => {
                                    dispatch(addToCart(item));
                                    dispatch(update({ id: item.id, status: true }));
                                }}
                            />
                        ))
                    ) : (
                        'There are no products available'
                    )
                ) : (
                    <Loading />
                )}
            </>
        </Card>
    );
};

const CartCard = () => {
    const data = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => dispatch(clearNewItems()), 2000);
        return () => clearTimeout(timer);
    }, [data.carts]);

    return (
        <Card
            title={
                <>
                    {'Your cart'}
                    <span style={{ float: 'right' }}>${data.totalPrice}</span>
                </>
            }
        >
            {data.carts && data.carts.length > 0 ? (
                data.carts.map((el) => (
                    <CartItem
                        key={el.id}
                        item={el}
                        isNew={data.newItems.includes(el.id)}
                        onRemoveCart={(item) => {
                            dispatch(update({ id: item.id, status: false }));
                            dispatch(removeFromCart(item.id));
                        }}
                        onIncrease={(item) => {
                            dispatch(updateCart({ id: item.id, amount: item.amount + 1 }));
                        }}
                        onDecrease={(item) => {
                            if (item.amount - 1 === 0) {
                                dispatch(updateCart({ id: item.id, amount: 0 }));
                            } else dispatch(updateCart({ id: item.id, amount: item.amount - 1 }));
                        }}
                    />
                ))
            ) : (
                <font size={3}>Your cart is empty.</font>
            )}
        </Card>
    );
};

const HomePage = () => {
    console.log('render Home');
    return (
        <>
            <ProductCard />
            <CartCard />
        </>
    );
};

export default React.memo(HomePage);
