import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import minusIcon from '../../assets/minus.png';
import plusIcon from '../../assets/plus.png';
import trashIcon from '../../assets/trash.png';

import classes from './cartItem.module.css';

const CartItem = ({ item, isNew, onRemoveCart, onIncrease, onDecrease }) => {
    const timer = useRef(null);
    const [removeTrigger, setRemoveTrigger] = useState(false);

    const classNameParent =
        classes.container +
        (isNew && !removeTrigger
            ? ` ${classes['active-effect']}`
            : removeTrigger
              ? ` ${classes['remove-effect']}`
              : '');

    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, []);

    const handleRemove = () => {
        setRemoveTrigger(true);
        timer.current = setTimeout(() => {
            onRemoveCart(item);
        }, 800);
    };

    return (
        <div className={classNameParent}>
            <div className={classes.image} style={{ backgroundColor: item.color }}>
                <img src={item.image} alt={`${item.name} Review`} />
            </div>
            <div className={classes.information}>
                <div className={classes.name}>{item.name}</div>
                <div className={classes.price}>${item.price.toFixed(2)}</div>
                <div className={classes.actions}>
                    <div className={classes.actionCount}>
                        <button
                            className={classes.countButton}
                            onClick={() => {
                                if (item.amount - 1 === 0) {
                                    handleRemove();
                                }
                                onDecrease(item);
                            }}
                        >
                            <img src={minusIcon} alt="minus_icon" />
                        </button>
                        <span className={classes.countNumber}>{item.amount}</span>
                        <button className={classes.countButton} onClick={() => onIncrease(item)}>
                            <img src={plusIcon} alt="plus_icon" />
                        </button>
                    </div>
                    <div className={classes.actionRemove}>
                        <button className={classes.removeButton} onClick={handleRemove}>
                            <img src={trashIcon} alt="trash_icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        amount: PropTypes.number,
        addedToCart: PropTypes.bool,
        color: PropTypes.string,
    }),
    isNew: PropTypes.bool,
    onRemoveCart: PropTypes.func,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
};

CartItem.defaultProps = {
    isNew: false,
};

export default React.memo(CartItem);
