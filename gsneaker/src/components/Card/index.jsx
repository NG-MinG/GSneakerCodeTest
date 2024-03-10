import PropTypes from 'prop-types';
import nikeLogo from '../../assets/nike.png';
import classes from './card.module.css';

const Card = ({ title, children }) => {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <img className={classes.topLogo} src={nikeLogo} alt="nike logo" />
            </div>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>{children}</div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Card;
