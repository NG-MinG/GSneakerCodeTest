import { Routes, Route } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route index element={<HomePage />}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
