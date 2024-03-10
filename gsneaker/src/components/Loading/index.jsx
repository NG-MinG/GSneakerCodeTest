import React from 'react';
import classes from './loading.module.css';

const Loading = () => (
    <div className={classes.container}>
        <div className={classes['loader']}></div>
    </div>
);

export default Loading;
