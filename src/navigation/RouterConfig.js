import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Apartment, Home } from '../pages';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/apartment' element={<Apartment />} />
            </Routes>

        </>
    )
}

export default AppRouter