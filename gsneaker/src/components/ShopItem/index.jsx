import PropTypes from 'prop-types';
import checkIcon from '../../assets/check.png';
import classes from './shopItem.module.css';

const ShopItem = ({ item, onAddToCart }) => {
    return (
        <div className={classes.container}>
            <div className={classes.image} style={{ backgroundColor: item.color }}>
                <img src={item.image} alt={`${item.name} Review`} />
            </div>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.description}>{item.description}</div>
            <div className={classes.bottom}>
                <div className={classes.price}>${item.price.toFixed(2)}</div>
                <button
                    className={`${classes.button} ${item.addedToCart ? classes.added : ''}`}
                    onClick={() => onAddToCart(item)}
                >
                    {item.addedToCart ? <img src={checkIcon} alt="added" /> : <p>ADD TO CART</p>}
                </button>
            </div>
        </div>
    );
};

ShopItem.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        color: PropTypes.string,
        addedToCart: PropTypes.bool,
    }),
    onAddToCart: PropTypes.func,
};

export default ShopItem;
