import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './baseLayout.module.css';

const BaseLayout = () => {
    return (
        <div className={classes.body}>
            <Outlet />
        </div>
    );
};

export default BaseLayout;
